import type {
  EquipmentId,
  IngredientItem,
  MatchedRecipe,
  NoMatchExplanation,
  Recipe,
} from "../types";

/**
 * Maps common ingredient phrasings and variants to a canonical name
 * so "eggs" matches "egg" and "olive oil" matches "oil".
 */
const INGREDIENT_ALIASES: Record<string, string> = {
  egg: "egg",
  eggs: "egg",
  "large egg": "egg",
  "large eggs": "egg",
  spinach: "spinach",
  "baby spinach": "spinach",
  "fresh spinach": "spinach",
  "spinach leaves": "spinach",
  cheese: "cheese",
  "shredded cheese": "cheese",
  "grated cheese": "cheese",
  cheddar: "cheese",
  "cheddar cheese": "cheese",
  mozzarella: "cheese",
  "mozzarella cheese": "cheese",
  "mexican cheese": "cheese",
  oil: "oil",
  "olive oil": "oil",
  "cooking oil": "oil",
  "vegetable oil": "oil",
  "canola oil": "oil",
  "avocado oil": "oil",
  tortilla: "tortilla",
  tortillas: "tortilla",
  "flour tortilla": "tortilla",
  "flour tortillas": "tortilla",
  "corn tortilla": "tortilla",
  "corn tortillas": "tortilla",
  wrap: "tortilla",
  wraps: "tortilla",
  "canned white beans": "canned white beans",
  "white beans": "canned white beans",
  "white bean": "canned white beans",
  "cannellini beans": "canned white beans",
  "great northern beans": "canned white beans",
  "navy beans": "canned white beans",
  "canned beans": "canned white beans",
  garlic: "garlic",
  "garlic clove": "garlic",
  "garlic cloves": "garlic",
  "minced garlic": "garlic",
  "fresh garlic": "garlic",
  butter: "butter",
  "unsalted butter": "butter",
  "salted butter": "butter",
  salt: "salt",
  "sea salt": "salt",
  "kosher salt": "salt",
  pepper: "pepper",
  "black pepper": "pepper",
};

const KEEP_TRAILING_S = new Set([
  "canned white beans",
  "white beans",
  "beans",
  "greens",
  "oats",
  "hummus",
  "couscous",
  "peas",
  "lentils",
  "chickpeas",
]);

/**
 * Clean up user-entered display text while preserving readability
 * (for example, stripping leading "a " or "an " from "a tortilla").
 */
export function cleanIngredientDisplay(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^(a|an|some|the)\s+/i, "")
    .toLowerCase();
}

/**
 * Normalize an ingredient string to a canonical matching key.
 */
export function normalizeIngredient(raw: string): string {
  const cleaned = cleanIngredientDisplay(raw);
  if (!cleaned) return "";

  if (INGREDIENT_ALIASES[cleaned]) {
    return INGREDIENT_ALIASES[cleaned];
  }

  // Handle simple plural forms like "tomatoes" or "tortillas"
  if (!KEEP_TRAILING_S.has(cleaned)) {
    if (cleaned.endsWith("ies") && cleaned.length > 4) {
      const singular = cleaned.slice(0, -3) + "y";
      return INGREDIENT_ALIASES[singular] ?? singular;
    }
    if (cleaned.endsWith("es") && cleaned.length > 3) {
      const withoutEs = cleaned.slice(0, -2);
      if (INGREDIENT_ALIASES[withoutEs]) return INGREDIENT_ALIASES[withoutEs];
    }
    if (cleaned.endsWith("s") && !cleaned.endsWith("ss") && cleaned.length > 3) {
      const singular = cleaned.slice(0, -1);
      return INGREDIENT_ALIASES[singular] ?? singular;
    }
  }

  return cleaned;
}

/**
 * Split comma- or newline-separated ingredient input into clean, unique names.
 */
export function parseIngredientInput(raw: string): string[] {
  const parts = raw
    .split(/[\n,]+/)
    .map((part) => cleanIngredientDisplay(part))
    .filter(Boolean);

  const seenNormalized = new Set<string>();
  const result: string[] = [];

  for (const part of parts) {
    const norm = normalizeIngredient(part);
    if (!norm || seenNormalized.has(norm)) continue;
    seenNormalized.add(norm);
    result.push(part);
  }

  return result;
}

/**
 * Format an ingredient cleanly with an article when appropriate
 * for natural sentences like "except a tortilla".
 */
function formatMissingNoun(ingredient: string): string {
  const countableWithArticle: Record<string, string> = {
    tortilla: "a tortilla",
    egg: "an egg",
  };
  return countableWithArticle[ingredient] ?? ingredient;
}

/**
 * Filter and rank recipes in strict "No shopping" mode:
 * - User must have EVERY required ingredient (including oil/butter/seasonings)
 * - User must have the required equipment
 * - Recipe time must fit within the user's time limit
 * - Recipes using the "Use first" priority ingredient rank first,
 *   then sorted by shortest cooking time.
 */
export function matchRecipes(params: {
  recipes: Recipe[];
  userIngredients: IngredientItem[];
  priorityIngredientId: string | null;
  timeLimit: number;
  equipment: EquipmentId[];
}): MatchedRecipe[] {
  const { recipes, userIngredients, priorityIngredientId, timeLimit, equipment } = params;

  const availableSet = new Set(
    userIngredients.map((item) => normalizeIngredient(item.name)).filter(Boolean)
  );

  const priorityItem = userIngredients.find((item) => item.id === priorityIngredientId);
  const priorityNormalized = priorityItem ? normalizeIngredient(priorityItem.name) : null;

  const eligible: MatchedRecipe[] = [];

  for (const recipe of recipes) {
    if (recipe.timeMinutes > timeLimit) continue;
    if (!equipment.includes(recipe.equipment)) continue;

    const hasAllIngredients = recipe.ingredients.every((req) =>
      availableSet.has(normalizeIngredient(req))
    );
    if (!hasAllIngredients) continue;

    const usesPriority = Boolean(
      priorityNormalized &&
        recipe.ingredients.some((req) => normalizeIngredient(req) === priorityNormalized)
    );

    eligible.push({ recipe, usesPriority });
  }

  eligible.sort((a, b) => {
    if (a.usesPriority !== b.usesPriority) {
      return a.usesPriority ? -1 : 1;
    }
    if (a.recipe.timeMinutes !== b.recipe.timeMinutes) {
      return a.recipe.timeMinutes - b.recipe.timeMinutes;
    }
    return a.recipe.name.localeCompare(b.recipe.name);
  });

  return eligible;
}

/**
 * When zero recipes match, find the closest real recipe in the dataset
 * and explain the exact missing ingredient, time shortfall, or equipment gap.
 */
export function explainNoMatch(params: {
  recipes: Recipe[];
  userIngredients: IngredientItem[];
  timeLimit: number;
  equipment: EquipmentId[];
}): NoMatchExplanation | null {
  const { recipes, userIngredients, timeLimit, equipment } = params;
  if (recipes.length === 0) return null;

  const availableSet = new Set(
    userIngredients.map((item) => normalizeIngredient(item.name)).filter(Boolean)
  );

  const scored = recipes.map((recipe) => {
    const missingIngredients = recipe.ingredients.filter(
      (req) => !availableSet.has(normalizeIngredient(req))
    );
    const overTime = recipe.timeMinutes > timeLimit;
    const missingEquip = !equipment.includes(recipe.equipment);

    // Lower score = closer to being cookable right now
    const penalty =
      missingIngredients.length * 10 + (overTime ? 4 : 0) + (missingEquip ? 6 : 0);

    return { recipe, missingIngredients, overTime, missingEquip, penalty };
  });

  scored.sort((a, b) => a.penalty - b.penalty);
  const best = scored[0];

  if (best.missingIngredients.length === 1 && !best.overTime && !best.missingEquip) {
    const missingText = formatMissingNoun(best.missingIngredients[0]);
    return {
      closestRecipe: best.recipe,
      headline: `You have everything for the ${best.recipe.name} except ${missingText}.`,
      detail: `Add ${missingText} if you spot it in the pantry, or edit your ingredients to try another combination.`,
    };
  }

  if (best.missingIngredients.length === 0 && best.overTime) {
    return {
      closestRecipe: best.recipe,
      headline: `${best.recipe.name} takes ${best.recipe.timeMinutes} minutes, which is over your ${timeLimit}-minute limit.`,
      detail: `You already have all the ingredients for it. Raise your time limit to ${best.recipe.timeMinutes} minutes or more to unlock this meal.`,
    };
  }

  if (best.missingIngredients.length === 0 && best.missingEquip) {
    return {
      closestRecipe: best.recipe,
      headline: `${best.recipe.name} needs ${best.recipe.equipmentLabel.toLowerCase()}.`,
      detail: `You already have all the ingredients. Select ${best.recipe.equipmentLabel.toLowerCase()} in your equipment list if you have one available.`,
    };
  }

  if (best.missingIngredients.length > 0) {
    const formattedList = best.missingIngredients.map(formatMissingNoun);
    const joined =
      formattedList.length === 1
        ? formattedList[0]
        : formattedList.slice(0, -1).join(", ") + " and " + formattedList[formattedList.length - 1];

    return {
      closestRecipe: best.recipe,
      headline: `Closest match: ${best.recipe.name} still needs ${joined}.`,
      detail: `In No shopping mode, we only show meals you can cook right now with what you confirmed.`,
    };
  }

  return {
    closestRecipe: best.recipe,
    headline: `No recipes matched your current filters.`,
    detail: `Try editing your ingredients, time limit, or equipment.`,
  };
}
