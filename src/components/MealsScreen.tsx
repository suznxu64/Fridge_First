import { useState } from "react";
import { ArrowLeft, Star, Utensils } from "lucide-react";
import type {
  EquipmentId,
  IngredientItem,
  MatchedRecipe,
  NoMatchExplanation,
  Recipe,
} from "../types";
import { EQUIPMENT_OPTIONS } from "../data/recipes";
import {
  formatIngredientWithQuantity,
  normalizeIngredient,
} from "../utils/recipeMatcher";

interface MealsScreenProps {
  matches: MatchedRecipe[];
  noMatchExplanation: NoMatchExplanation | null;
  ingredients: IngredientItem[];
  priorityIngredient: IngredientItem | null;
  timeLimit: number;
  equipment: EquipmentId[];
  onEditIngredients: () => void;
}

function RecipePhoto({
  recipe,
  compact = false,
}: {
  recipe: Recipe;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!recipe.imageUrl || failed) {
    if (compact) {
      return (
        <div className="w-28 h-24 rounded-xl border border-[#E2DDD2] bg-gradient-to-br from-[#EDF5F0] to-[#E5DFD2] flex flex-col items-center justify-center gap-1.5 px-3 text-center shrink-0">
          <Utensils className="w-6 h-6 text-[#2D6A4F]" />
        </div>
      );
    }
    return (
      <div className="w-full border-b border-[#E2DDD2] bg-[#FAF7F0] px-5 py-3 flex items-center gap-2 text-xs font-semibold text-[#2D6A4F]">
        <Utensils className="w-4 h-4 shrink-0" />
        <span>{recipe.equipmentLabel}</span>
      </div>
    );
  }

  return (
    <div
      className={`${
        compact
          ? "w-28 h-24 rounded-xl border shrink-0"
          : "aspect-[4/3] w-full border-b"
      } overflow-hidden bg-[#ECE7DC] border-[#E2DDD2]`}
    >
      <img
        src={recipe.imageUrl}
        alt={recipe.imageAlt ?? recipe.name}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
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

  const userItemsByKey = new Map<string, IngredientItem>();
  for (const item of ingredients) {
    userItemsByKey.set(normalizeIngredient(item.name), item);
  }

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
                  Use first: {formatIngredientWithQuantity(priorityIngredient)}
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
              className={`group flex flex-col overflow-hidden rounded-2xl border bg-white ${
                usesPriority ? "border-[#2D6A4F]" : "border-[#E2DDD2]"
              }`}
            >
              <RecipePhoto recipe={recipe} />

              {usesPriority && priorityIngredient && (
                <div className="flex items-center gap-2 border-b border-[#C6DDD0] bg-[#EDF5F0] px-5 py-2.5 text-xs font-semibold text-[#1B4332]">
                  <Star className="w-3.5 h-3.5 fill-[#2D6A4F] text-[#2D6A4F] shrink-0" />
                  <span>Uses your {priorityIngredient.name}</span>
                </div>
              )}

              <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 space-y-4">
                <div className="space-y-4">
                  <div className="space-y-1.5">
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

                  {/* Ingredients with recipe amounts + user's on-hand quantity */}
                  <div className="rounded-xl bg-[#FAF7F0] px-4 py-3.5 space-y-2">
                    <h3 className="text-xs font-semibold text-[#525E56]">
                      Ingredients needed
                    </h3>
                    <ul className="divide-y divide-[#ECE7DC] text-sm text-[#1A211D]">
                      {recipe.ingredientRequirements.map((req) => {
                        const userItem = userItemsByKey.get(normalizeIngredient(req.key));
                        const userQty = userItem?.quantity?.trim();
                        return (
                          <li
                            key={req.key}
                            className="flex flex-wrap items-baseline justify-between gap-2 py-1.5 first:pt-0 last:pb-0"
                          >
                            <span className="font-medium">{req.label}</span>
                            {userItem && userQty && (
                              <span className="text-xs font-medium text-[#2D6A4F] tabular-nums">
                                you have {formatIngredientWithQuantity(userItem)}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Cooking steps */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-semibold text-[#525E56]">
                      Cooking steps
                    </h3>
                    <ol className="space-y-2.5 text-sm text-[#2F3A33] leading-relaxed">
                      {recipe.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-[#EDF5F0] text-[#1B4332] text-xs font-bold tabular-nums flex items-center justify-center shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <section className="rounded-2xl border border-[#E2DDD2] bg-white p-6 sm:p-8 max-w-2xl space-y-5">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {noMatchExplanation?.closestRecipe && (
              <RecipePhoto recipe={noMatchExplanation.closestRecipe} compact />
            )}
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
          </div>

          {ingredients.length > 0 && (
            <p className="text-sm text-[#525E56] rounded-xl bg-[#FAF7F0] px-4 py-3">
              Your current list:{" "}
              <span className="font-medium text-[#1A211D]">
                {ingredients
                  .map((item) => formatIngredientWithQuantity(item))
                  .join(", ")}
              </span>
            </p>
          )}

          <div>
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
