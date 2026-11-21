import React, { useEffect, useRef, useState } from "react";
import { Camera, Check, Keyboard, Loader2, Sparkles, ArrowRight, X } from "lucide-react";
import { SAMPLE_FRIDGE_INGREDIENTS } from "../data/recipes";
import { parseIngredientInput } from "../utils/recipeMatcher";

interface AddIngredientsScreenProps {
  onTrySampleFridge: () => void;
  onSubmitIngredients: (names: string[], source: "manual" | "photo") => void;
  existingCount: number;
  onReturnToConfirm: () => void;
}

export function AddIngredientsScreen({
  onTrySampleFridge,
  onSubmitIngredients,
  existingCount,
  onReturnToConfirm,
}: AddIngredientsScreenProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const manualInputRef = useRef<HTMLInputElement>(null);

  const [showManualForm, setShowManualForm] = useState(false);
  const [manualText, setManualText] = useState("");
  const [manualItems, setManualItems] = useState<string[]>([]);

  const [recognitionAvailable, setRecognitionAvailable] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [detectedItems, setDetectedItems] = useState<string[] | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/recognition-status")
      .then((res) => (res.ok ? res.json() : { available: false }))
      .then((data: { available?: boolean }) => {
        if (active) setRecognitionAvailable(Boolean(data.available));
      })
      .catch(() => {
        if (active) setRecognitionAvailable(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
    };
  }, [photoPreviewUrl]);

  const handleOpenManual = () => {
    setShowManualForm(true);
    setTimeout(() => {
      manualInputRef.current?.focus();
    }, 50);
  };

  const handleAddManualText = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseIngredientInput(manualText);
    if (parsed.length === 0) return;

    setManualItems((prev) => {
      const merged = [...prev];
      for (const item of parsed) {
        if (!merged.some((existing) => existing.toLowerCase() === item.toLowerCase())) {
          merged.push(item);
        }
      }
      return merged;
    });
    setManualText("");
  };

  const handleContinueManual = () => {
    // Include any uncommitted text in the input box if the user typed without pressing Add
    const pending = parseIngredientInput(manualText);
    const combined = [...manualItems];
    for (const item of pending) {
      if (!combined.some((existing) => existing.toLowerCase() === item.toLowerCase())) {
        combined.push(item);
      }
    }
    if (combined.length === 0) return;
    onSubmitIngredients(combined, "manual");
  };

  const handlePhotoSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset input so choosing the same file again still triggers onChange
    e.target.value = "";
    if (!file) return;

    setScanError(null);
    setDetectedItems(null);

    if (photoPreviewUrl) {
      URL.revokeObjectURL(photoPreviewUrl);
    }
    setPhotoPreviewUrl(URL.createObjectURL(file));
    setIsScanning(true);

    try {
      const base64 = await readFileAsBase64(file);
      const response = await fetch("/api/recognize-ingredients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: base64,
          mimeType: file.type || "image/jpeg",
        }),
      });

      const data = (await response.json()) as {
        ingredients?: string[];
        error?: string;
      };

      if (!response.ok) {
        setScanError(
          data.error ||
            "Photo recognition is unavailable right now. Try typing your ingredients or using the sample fridge."
        );
        return;
      }

      const items = Array.isArray(data.ingredients) ? data.ingredients : [];
      if (items.length === 0) {
        setScanError(
          "No food ingredients were clearly visible in that photo. You can type what you see or try the sample fridge."
        );
        return;
      }

      setDetectedItems(items);
    } catch {
      setScanError(
        "Could not connect to photo recognition right now. You can type your ingredients or try the sample fridge."
      );
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="max-w-2xl space-y-3">
        <p className="text-sm font-medium text-[#2D6A4F]">
          Step 1 of 3 · Add your ingredients
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A211D] text-balance leading-[1.15]">
          What can I cook tonight with food I already have?
        </h1>
        <p className="text-base text-[#4A554E] leading-relaxed">
          Start with what is in your shared fridge right now. You will review everything next so roommates&apos; items stay out and pantry staples stay in.
        </p>
      </section>

      {existingCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#DCE3DA] bg-white px-4 py-3">
          <p className="text-sm text-[#39453E]">
            You currently have <span className="font-semibold tabular-nums">{existingCount}</span>{" "}
            {existingCount === 1 ? "ingredient" : "ingredients"} in your current list.
          </p>
          <button
            type="button"
            onClick={onReturnToConfirm}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-[#2D6A4F] hover:text-[#1B4332] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Back to your list
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Three core entry actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Action 1: Try a sample fridge */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#B7D1C2] bg-[#EDF5F0] p-5 sm:p-6">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#1B4332]">
                Sample data · No API key needed
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-[#1A211D]">
              Try a sample fridge
            </h2>
            <p className="text-sm text-[#39453E] leading-relaxed">
              Load <span className="font-medium text-[#1A211D]">{SAMPLE_FRIDGE_INGREDIENTS.join(", ")}</span> in one click to walk through a realistic pre-break fridge.
            </p>
          </div>
          <div className="pt-5">
            <button
              type="button"
              onClick={onTrySampleFridge}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B4332] active:scale-[0.99] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              Try a sample fridge
            </button>
          </div>
        </div>

        {/* Action 2: Type ingredients */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6">
          <div className="space-y-2.5">
            <span className="text-xs font-medium text-[#525E56]">
              Manual entry · Works offline
            </span>
            <h2 className="font-display text-xl font-bold text-[#1A211D]">
              Type ingredients
            </h2>
            <p className="text-sm text-[#4A554E] leading-relaxed">
              Enter whatever is sitting on your shelf—like spinach, eggs, cheese, or a half-used jar of beans.
            </p>
          </div>
          <div className="pt-5">
            <button
              type="button"
              onClick={handleOpenManual}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#2D6A4F] bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] hover:bg-[#EDF5F0] active:scale-[0.99] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D6A4F]"
            >
              <Keyboard className="w-4 h-4 shrink-0" />
              Type ingredients
            </button>
          </div>
        </div>

        {/* Action 3: Upload a fridge photo */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6">
          <div className="space-y-2.5">
            <span className="text-xs font-medium text-[#525E56]">
              {recognitionAvailable === false
                ? "Server recognition unconfigured"
                : "Photo scan · Review before matching"}
            </span>
            <h2 className="font-display text-xl font-bold text-[#1A211D]">
              Upload a fridge photo
            </h2>
            <p className="text-sm text-[#4A554E] leading-relaxed">
              Snap your open fridge shelf to detect visible items and review the list before cooking.
            </p>
          </div>
          <div className="pt-5">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoSelect}
              className="hidden"
              aria-label="Upload a fridge photo"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isScanning}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#CBD3CA] bg-[#FAF7F0] px-5 py-3 text-sm font-semibold text-[#1A211D] hover:border-[#2D6A4F] hover:bg-[#EDF5F0] disabled:opacity-60 active:scale-[0.99] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D6A4F]"
            >
              {isScanning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                  Scanning photo...
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4 shrink-0" />
                  Upload a fridge photo
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Photo scan results or honest fallback when recognition fails / is unavailable */}
      {(isScanning || scanError || detectedItems) && (
        <section
          aria-live="polite"
          className="rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6 space-y-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#1A211D]">
                {isScanning
                  ? "Checking your photo for visible ingredients..."
                  : detectedItems
                    ? "Review detected ingredients"
                    : "Could not scan photo"}
              </h3>
              <p className="text-sm text-[#4A554E]">
                {isScanning
                  ? "Only items clearly visible in the photo will be listed."
                  : detectedItems
                    ? "Remove anything you do not want to use, then confirm your list."
                    : scanError}
              </p>
            </div>
            {photoPreviewUrl && (
              <img
                src={photoPreviewUrl}
                alt="Uploaded fridge shelf"
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-xl object-cover border border-[#E2DDD2] shrink-0"
              />
            )}
          </div>

          {detectedItems && detectedItems.length > 0 && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {detectedItems.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#B7D1C2] bg-[#EDF5F0] pl-3 pr-1 py-1 text-sm font-medium text-[#1B4332]"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setDetectedItems((prev) =>
                          prev ? prev.filter((entry) => entry !== item) : null
                        )
                      }
                      aria-label={`Remove ${item}`}
                      className="min-h-[36px] min-w-[36px] inline-flex items-center justify-center rounded-lg text-[#2D6A4F] hover:bg-[#2D6A4F]/10 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSubmitIngredients(detectedItems, "photo")}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1B4332] whitespace-nowrap cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Confirm detected ingredients
                </button>
                <button
                  type="button"
                  onClick={handleOpenManual}
                  className="min-h-[44px] inline-flex items-center justify-center rounded-xl border border-[#CBD3CA] px-4 py-2.5 text-sm font-medium text-[#39453E] hover:bg-[#FAF7F0] whitespace-nowrap cursor-pointer"
                >
                  Add more manually
                </button>
              </div>
            </div>
          )}

          {scanError && (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleOpenManual}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1B4332] whitespace-nowrap cursor-pointer"
              >
                <Keyboard className="w-4 h-4" />
                Type ingredients manually
              </button>
              <button
                type="button"
                onClick={onTrySampleFridge}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#2D6A4F] bg-white px-4 py-2.5 text-sm font-semibold text-[#1B4332] hover:bg-[#EDF5F0] whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Try a sample fridge
              </button>
            </div>
          )}
        </section>
      )}

      {/* Manual entry form */}
      {showManualForm && (
        <section className="rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-[#1A211D]">
              Type what you have
            </h3>
            <p className="text-sm text-[#4A554E]">
              Enter one item or separate several with commas (for example: <span className="font-medium text-[#1A211D]">spinach, eggs, cheese</span>).
            </p>
          </div>

          <form onSubmit={handleAddManualText} className="flex flex-col sm:flex-row gap-2.5">
            <label htmlFor="manual-ingredients-input" className="sr-only">
              Ingredients in your fridge
            </label>
            <input
              id="manual-ingredients-input"
              ref={manualInputRef}
              type="text"
              value={manualText}
              onChange={(e) => setManualText(e.target.value)}
              placeholder="spinach, eggs, cheese..."
              className="flex-1 min-h-[48px] rounded-xl border border-[#CBD3CA] bg-[#FAF7F0] px-4 py-2.5 text-base text-[#1A211D] placeholder:text-[#6B776F] focus:border-[#2D6A4F] focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-[48px] rounded-xl border border-[#2D6A4F] bg-white px-5 py-2.5 text-sm font-semibold text-[#1B4332] hover:bg-[#EDF5F0] whitespace-nowrap cursor-pointer"
            >
              Add to list
            </button>
          </form>

          {manualItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {manualItems.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1 rounded-xl border border-[#DCE3DA] bg-[#FAF7F0] pl-3 pr-1 py-1 text-sm font-medium text-[#1A211D]"
                >
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setManualItems((prev) => prev.filter((entry) => entry !== item))
                    }
                    aria-label={`Remove ${item}`}
                    className="min-h-[36px] min-w-[36px] inline-flex items-center justify-center rounded-lg text-[#525E56] hover:bg-[#E2DDD2]/60 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleContinueManual}
              disabled={manualItems.length === 0 && parseIngredientInput(manualText).length === 0}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B4332] disabled:opacity-45 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              Confirm ingredients
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      const commaIndex = result.indexOf(",");
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result);
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
