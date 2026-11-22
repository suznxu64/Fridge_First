import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";

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

      const mimeToSend = mimeType === "image/jpg" ? "image/jpeg" : mimeType;
      const promptText = [
        "Identify only the clearly visible food ingredients in this fridge or kitchen photo.",
        "Return short, plain ingredient names in lowercase, including a simple count or container when clearly visible (for example: '1 bag spinach', '4 eggs', '1 block cheese', 'milk', '2 tortillas').",
        "Do not guess hidden items, brand names, or pantry staples that you cannot see.",
        "If no food ingredients are clearly visible, return an empty ingredients array.",
      ].join(" ");

      const parts = [
        {
          inlineData: {
            mimeType: mimeToSend,
            data: imageBase64,
          },
        },
        { text: promptText },
      ];

      const responseSchema = {
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
      };

      const preferredModel = process.env.GEMINI_MODEL?.trim();
      const candidateModels = preferredModel
        ? [preferredModel]
        : ["gemini-4-hydrogen", "gemini-3.1-flash-lite", "gemini-2.5-flash"];

      let responseText = "";
      let lastError: unknown = null;

      for (const modelName of candidateModels) {
        try {
          const isGemini4 = modelName.startsWith("gemini-4") || modelName.startsWith("gemini-3");
          const response = await ai.models.generateContent({
            model: modelName,
            contents: { parts },
            config: {
              abortSignal: AbortSignal.timeout(9000),
              ...(isGemini4
                ? {
                    thinkingConfig: {
                      thinkingLevel:
                        modelName === "gemini-3.1-flash-lite"
                          ? ThinkingLevel.MINIMAL
                          : ThinkingLevel.LOW,
                    },
                  }
                : {}),
              responseMimeType: "application/json",
              responseSchema,
            },
          });
          responseText = (response.text ?? "{}").trim();
          lastError = null;
          break;
        } catch (err: unknown) {
          lastError = err;
          const errObj = err as { name?: string; status?: number; message?: string };
          const status = typeof errObj?.status === "number" ? errObj.status : 0;
          const msg = typeof errObj?.message === "string" ? errObj.message : "";
          const canTryNextModel =
            errObj?.name === "AbortError" ||
            errObj?.name === "TimeoutError" ||
            status === 404 ||
            status === 429 ||
            status === 500 ||
            status === 503 ||
            status === 504 ||
            msg.includes("NOT_FOUND") ||
            msg.includes("is not found") ||
            msg.includes("UNAVAILABLE") ||
            msg.includes("high demand") ||
            msg.includes("RESOURCE_EXHAUSTED") ||
            msg.includes("aborted") ||
            msg.includes("timeout");
          if (!canTryNextModel) {
            throw err;
          }
        }
      }

      if (lastError) {
        throw lastError;
      }

      const cleanedJson = responseText
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/, "")
        .trim();
      const jsonObjectMatch = cleanedJson.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(jsonObjectMatch ? jsonObjectMatch[0] : "{}") as {
        ingredients?: unknown;
      };
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
    } catch (error: unknown) {
      console.error("Ingredient recognition error:", error);
      const errObj = error as { status?: number; code?: string | number; message?: string };
      const status = typeof errObj?.status === "number" ? errObj.status : 502;
      const msg = typeof errObj?.message === "string" ? errObj.message : String(error ?? "");
      const safeDetail = msg.replace(/AIza[0-9A-Za-z_-]{20,}/g, "[redacted]").slice(0, 260);

      if (
        status === 400 ||
        status === 403 ||
        msg.includes("API_KEY_INVALID") ||
        msg.includes("PERMISSION_DENIED")
      ) {
        res.status(status === 400 || status === 403 ? status : 403).json({
          error:
            "Gemini photo recognition is not authorized with the current API key. Check or select your API key in Settings > Secrets.",
          detail: safeDetail,
        });
        return;
      }

      if (status === 429 || msg.includes("RESOURCE_EXHAUSTED")) {
        res.status(429).json({
          error:
            "Photo recognition quota is temporarily reached. Try again shortly, or type your ingredients instead.",
          detail: safeDetail,
        });
        return;
      }

      if (status === 503 || msg.includes("UNAVAILABLE") || msg.includes("high demand")) {
        res.status(503).json({
          error:
            "Gemini photo recognition is temporarily busy due to high demand. Please try again in a few seconds, or type your ingredients instead.",
          detail: safeDetail,
        });
        return;
      }

      res.status(502).json({
        error:
          "We could not read ingredients from that photo right now. You can type your ingredients or try the sample fridge instead.",
        detail: `status=${status}${errObj?.code ? ` code=${errObj.code}` : ""} ${safeDetail}`.trim(),
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
