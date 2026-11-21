import { ArrowLeft, Star } from "lucide-react";
import type {
  EquipmentId,
  IngredientItem,
  MatchedRecipe,
  NoMatchExplanation,
} from "../types";
import { EQUIPMENT_OPTIONS } from "../data/recipes";

interface MealsScreenProps {
  matches: MatchedRecipe[];
  noMatchExplanation: NoMatchExplanation | null;
  ingredients: IngredientItem[];
  priorityIngredient: IngredientItem | null;
  timeLimit: number;
  equipment: EquipmentId[];
  onEditIngredients: () => void;
}

export function MealsScreen({
  matches,
  noMatchExplanation,
  ingredients,
  priorityIngredient,
  timeLimit,
  equipment,
  onEditIngredients,
}: MealsScreenProps) {
  const equipmentNames = EQUIPMENT_OPTIONS.filter((opt) =>
    equipment.includes(opt.id)
  ).map((opt) => opt.label);

  const equipmentSummary =
    equipmentNames.length > 0 ? equipmentNames.join(", ") : "No equipment selected";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-[#2D6A4F]">
            Step 3 of 3 · Find a meal
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1A211D]">
            {matches.length > 0
              ? `${matches.length} ${matches.length === 1 ? "meal" : "meals"} you can cook tonight`
              : "No complete match yet"}
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#525E56]">
            <span>No shopping mode</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{timeLimit} min max</span>
            <span aria-hidden="true">·</span>
            <span>{equipmentSummary}</span>
            {priorityIngredient && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-[#1B4332]">
                  Use first: {priorityIngredient.name}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={onEditIngredients}
          className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl border border-[#2D6A4F] bg-white px-4 py-2.5 text-sm font-semibold text-[#1B4332] hover:bg-[#EDF5F0] active:scale-[0.99] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Edit ingredients
        </button>
      </div>

      {matches.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {matches.map(({ recipe, usesPriority }) => (
            <article
              key={recipe.id}
              className={`flex flex-col justify-between rounded-2xl border p-5 sm:p-6 space-y-4 ${
                usesPriority
                  ? "border-[#2D6A4F] bg-white"
                  : "border-[#E2DDD2] bg-white"
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  {usesPriority && priorityIngredient && (
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332]">
                      <Star className="w-3.5 h-3.5 fill-[#2D6A4F] text-[#2D6A4F]" />
                      Uses your {priorityIngredient.name}
                    </p>
                  )}

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1A211D]">
                    {recipe.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#525E56]">
                    <span className="font-medium text-[#1A211D] tabular-nums">
                      {recipe.timeMinutes} minutes
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{recipe.equipmentLabel}</span>
                    {recipe.panNote && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{recipe.panNote}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Ingredients */}
                <div className="rounded-xl bg-[#FAF7F0] px-4 py-3 space-y-1">
                  <h3 className="text-xs font-semibold text-[#525E56]">
                    Ingredients used
                  </h3>
                  <p className="text-sm font-medium text-[#1A211D]">
                    {recipe.ingredientList.join(", ")}
                  </p>
                </div>

                {/* Cooking steps */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-[#525E56]">
                    Cooking steps
                  </h3>
                  <ol className="space-y-2 text-sm text-[#2F3A33] leading-relaxed">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="flex gap-2.5">
                        <span className="font-semibold text-[#2D6A4F] tabular-nums shrink-0">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <section className="rounded-2xl border border-[#E2DDD2] bg-white p-6 sm:p-8 max-w-2xl space-y-4">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1A211D]">
              {noMatchExplanation?.headline ??
                "No recipes matched all of your current ingredients."}
            </h2>
            <p className="text-base text-[#4A554E] leading-relaxed">
              {noMatchExplanation?.detail ??
                "In No shopping mode, every ingredient in a recipe needs to be in your confirmed list."}
            </p>
          </div>

          {ingredients.length > 0 && (
            <p className="text-sm text-[#525E56]">
              Your current list:{" "}
              <span className="font-medium text-[#1A211D]">
                {ingredients.map((item) => item.name).join(", ")}
              </span>
            </p>
          )}

          <div className="pt-2">
            <button
              type="button"
              onClick={onEditIngredients}
              className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1B4332] whitespace-nowrap cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Edit ingredients
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
