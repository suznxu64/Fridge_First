import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "image/gif",
]);

function getConfiguredApiKey(): string | null {
  const key = process.env.GEMINI_API_KEY?.trim();
  if (!key || key === "MY_GEMINI_API_KEY") {
    return null;
  }
  return key;
}

async function startServer() {
  const app = express();

  app.use(express.json({ limit: "12mb" }));

  // Check if server-side Gemini photo recognition is configured
  app.get("/api/recognition-status", (_req, res) => {
    const apiKey = getConfiguredApiKey();
    res.json({ available: Boolean(apiKey) });
  });

  // Recognize visible ingredients from an uploaded fridge photo using Gemini
  app.post("/api/recognize-ingredients", async (req, res) => {
    const apiKey = getConfiguredApiKey();
    if (!apiKey) {
      res.status(503).json({
        available: false,
        error:
          "Photo recognition is unavailable right now because no server-side API key is configured. Try the sample fridge or type ingredients instead.",
      });
      return;
    }

    const body = req.body as { imageBase64?: unknown; mimeType?: unknown } | undefined;
    const imageBase64 = typeof body?.imageBase64 === "string" ? body.imageBase64.trim() : "";
    const mimeType =
      typeof body?.mimeType === "string" ? body.mimeType.trim().toLowerCase() : "image/jpeg";

    if (!imageBase64) {
      res.status(400).json({ error: "Please choose a fridge photo to scan." });
      return;
    }

    if (!ALLOWED_MIME_TYPES.has(mimeType)) {
      res.status(400).json({
        error: "Unsupported image format. Please upload a JPG, PNG, or WebP photo.",
      });
      return;
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: mimeType === "image/jpg" ? "image/jpeg" : mimeType,
                data: imageBase64,
              },
            },
            {
              text: [
                "Identify only the clearly visible food ingredients in this fridge or kitchen photo.",
                "Return short, plain ingredient names in lowercase, including a simple count or container when clearly visible (for example: '1 bag spinach', '4 eggs', '1 block cheese', 'milk', '2 tortillas').",
                "Do not guess hidden items, brand names, or pantry staples that you cannot see.",
                "If no food ingredients are clearly visible, return an empty ingredients array.",
              ].join(" "),
            },
          ],
        },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "Short, plain names of clearly visible food ingredients.",
              },
            },
            required: ["ingredients"],
          },
        },
      });

      const rawJson = (response.text ?? "{}").trim();
      const parsed = JSON.parse(rawJson) as { ingredients?: unknown };
      const rawList = Array.isArray(parsed.ingredients) ? parsed.ingredients : [];

      const seen = new Set<string>();
      const ingredients: string[] = [];
      for (const entry of rawList) {
        if (typeof entry !== "string") continue;
        const cleaned = entry.trim().toLowerCase();
        if (!cleaned || seen.has(cleaned)) continue;
        seen.add(cleaned);
        ingredients.push(cleaned);
      }

      res.json({ ingredients });
    } catch (error) {
      console.error("Ingredient recognition error:", error);
      res.status(502).json({
        error:
          "We could not read ingredients from that photo right now. You can type your ingredients or try the sample fridge instead.",
      });
    }
  });

  const distPath = path.resolve(__dirname, "dist");
  const distIndexPath = path.join(distPath, "index.html");
  const isProduction =
    process.env.NODE_ENV === "production" ||
    process.env.npm_lifecycle_event === "start";

  const serveDist = () => {
    if (!fs.existsSync(distIndexPath)) {
      console.error(
        "Missing dist/index.html. Run `npm run build` before starting in production."
      );
    }
    app.use(
      express.static(distPath, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
            res.setHeader("Content-Type", "application/javascript; charset=utf-8");
          } else if (filePath.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css; charset=utf-8");
          }
        },
      })
    );
    app.get("*", (_req, res) => {
      res.sendFile(distIndexPath);
    });
  };

  if (isProduction) {
    serveDist();
  } else {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch {
      serveDist();
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`WTF (What the Fridge) running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start WTF (What the Fridge) server:", err);
  process.exit(1);
});
