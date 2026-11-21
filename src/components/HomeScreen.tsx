import { useState } from "react";
import { ArrowRight, Sparkles, Utensils } from "lucide-react";
import { RECIPES } from "../data/recipes";

const HERO_IMAGE_URL = "/src/assets/images/cartoon_kitchen_prep_1795299496886.jpg";
const PRODUCT_OVERVIEW_URL = "/assets/aistudio/IMG_4109_e2d79a45.PNG";
const LOGO_URL = "/assets/aistudio/IMG_4111_9a68c17d.PNG";

interface HomeScreenProps {
  onStartPlanning: () => void;
  onTrySampleFridge: () => void;
}

export function HomeScreen({
  onStartPlanning,
  onTrySampleFridge,
}: HomeScreenProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [overviewImgFailed, setOverviewImgFailed] = useState(false);

  return (
    <div className="space-y-14 sm:space-y-16">
      {/* 1. Hero Proposition */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="What The Fridge mascot logo"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain shrink-0 sm:hidden"
            />
            <p className="text-sm font-medium text-[#2D6A4F]">
              WTF (What the Fridge) · Shared-fridge meal finder
            </p>
          </div>

          <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#1A211D] text-balance leading-[1.08]">
            Cook what is already in your fridge before break.
          </h1>

          <p className="text-base sm:text-lg text-[#4A554E] leading-relaxed max-w-xl">
            Built for students with a shared fridge, one frying pan, and 15 minutes. Answer one question tonight: what can I actually make with the food I already have?
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onStartPlanning}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#1B4332] active:scale-[0.99] transition-all whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              Add your ingredients
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <button
              type="button"
              onClick={onTrySampleFridge}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#2D6A4F] bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-[#1B4332] hover:bg-[#EDF5F0] active:scale-[0.99] transition-all whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              Try a sample fridge
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-[#525E56] pt-1">
            <span>No login required</span>
            <span aria-hidden="true">·</span>
            <span>No shopping mode</span>
            <span aria-hidden="true">·</span>
            <span>One-pan dorm recipes</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          {heroImgFailed ? (
            <div className="aspect-[4/3] lg:h-full w-full rounded-2xl border border-[#E2DDD2] bg-gradient-to-br from-[#EDF5F0] to-[#EAE4D7] flex flex-col items-center justify-center gap-2 p-6 text-center">
              <Utensils className="w-8 h-8 text-[#2D6A4F]" />
              <span className="font-display text-sm font-semibold text-[#1B4332]">
                Shared fridge ingredients ready to cook
              </span>
            </div>
          ) : (
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-2xl border border-[#E2DDD2] bg-[#ECE7DC]">
              <img
                src={HERO_IMAGE_URL}
                alt="Fresh spinach, brown eggs, cheddar cheese, tortillas, garlic, and a frying pan on a wooden kitchen counter"
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* 2. Illustrated Product Introduction */}
      {!overviewImgFailed && (
        <section className="space-y-4">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1A211D]">
              How What The Fridge works
            </h2>
            <p className="text-base text-[#4A554E]">
              Snap or type what is on your shelf, adjust quantities, pick your pan and time, and cook tonight.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E2DDD2] bg-[#FAF7F0] p-2 sm:p-4">
            <img
              src={PRODUCT_OVERVIEW_URL}
              alt="What The Fridge workflow showing Upload Your Fridge, Set Quantities, Choose Cooking Setup, and Recipe Suggestions"
              referrerPolicy="no-referrer"
              onError={() => setOverviewImgFailed(true)}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </section>
      )}

      {/* 3. Asymmetric Bento Feature Showcase */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1A211D] text-balance">
            Designed around how shared fridges actually work
          </h2>
          <p className="text-base text-[#4A554E]">
            Most recipe apps assume a full pantry and an empty grocery list. WTF works strictly from your shelf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 01 — Wide */}
          <div className="md:col-span-2 rounded-2xl border border-[#E2DDD2] bg-white p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#2D6A4F]">
                01. Three ways to start
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A211D]">
                Snap a fridge photo, type with quantities, or load a sample shelf
              </h3>
              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-xl">
                Upload a quick shelf photo for visual ingredient detection, type items like <span className="font-medium text-[#1A211D]">1 egg</span> or <span className="font-medium text-[#1A211D]">4 eggs</span>, or open the pre-loaded sample fridge in one tap.
              </p>
            </div>
            <p className="text-xs text-[#525E56]">
              Photo scan · Manual entry · Sample demo without an API key
            </p>
          </div>

          {/* Feature 02 — Narrow */}
          <div className="rounded-2xl border border-[#B7D1C2] bg-[#EDF5F0] p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#1B4332]">
                02. Shared-fridge filter
              </p>
              <h3 className="font-display text-xl font-bold text-[#1A211D]">
                Leave your roommates’ food out
              </h3>
              <p className="text-sm text-[#39453E] leading-relaxed">
                Review every item as an editable chip, step exact quantities up or down, and remove anything that isn’t yours.
              </p>
            </div>
            <p className="text-xs text-[#1B4332]">
              Inline rename · Quantity steppers
            </p>
          </div>

          {/* Feature 03 — Narrow */}
          <div className="rounded-2xl border border-[#E2DDD2] bg-white p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#2D6A4F]">
                03. Strict pantry rules
              </p>
              <h3 className="font-display text-xl font-bold text-[#1A211D]">
                No shopping mode by default
              </h3>
              <p className="text-sm text-[#4A554E] leading-relaxed">
                Oil, butter, and seasonings only count when you add them—so nothing requires a late-night store run.
              </p>
            </div>
            <p className="text-xs text-[#525E56]">
              Exact ingredient matching
            </p>
          </div>

          {/* Feature 04 — Wide */}
          <div className="md:col-span-2 rounded-2xl border border-[#E2DDD2] bg-white p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#2D6A4F]">
                04. Priority ranking & honest near-matches
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A211D]">
                Use up what spoils first—fit your pan and your clock
              </h3>
              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-xl">
                Mark wilting spinach as <span className="font-medium text-[#1A211D]">Use first</span> to push recipes using it to the top, sorted by cooking time. When nothing matches, see the exact missing item for the closest meal.
              </p>
            </div>
            <p className="text-xs text-[#525E56]">
              Use first ranking · 10–30 min limits · Equipment filter
            </p>
          </div>
        </div>
      </section>

      {/* 4. Meal Preview Strip */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#1A211D]">
              One-pan meals ready in minutes
            </h2>
            <p className="text-sm text-[#4A554E]">
              Every starter recipe needs only a single frying pan and straightforward dorm-kitchen steps.
            </p>
          </div>
          <span className="text-xs font-medium text-[#525E56] tabular-nums">
            {RECIPES.length} starter recipes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E2DDD2] bg-white"
            >
              {recipe.imageUrl && (
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#ECE7DC] border-b border-[#E2DDD2]">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.imageAlt ?? recipe.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <h3 className="font-display text-base font-bold text-[#1A211D]">
                  {recipe.name}
                </h3>
                <p className="text-xs text-[#525E56] tabular-nums">
                  {recipe.timeMinutes} min · {recipe.equipmentLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Final Callout */}
      <section className="rounded-2xl border border-[#B7D1C2] bg-[#EDF5F0] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <h2 className="font-display text-2xl font-bold text-[#1A211D]">
            Ready to clear a shelf tonight?
          </h2>
          <p className="text-sm sm:text-base text-[#39453E]">
            Built by a three-person Wellesley College team for the Better Worlds track to help people cook food they might otherwise leave behind.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onStartPlanning}
            className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B4332] active:scale-[0.99] transition-all whitespace-nowrap cursor-pointer"
          >
            Start with your fridge
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
