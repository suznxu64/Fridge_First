import type {
  EquipmentId,
  IngredientItem,
  MatchedRecipe,
  NoMatchExplanation,
  ParsedIngredientEntry,
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
  "sliced cheese": "cheese",
  "cheese slice": "cheese",
  "cheese slices": "cheese",
  "mexican cheese": "cheese",
  "american cheese": "cheese",
  "swiss cheese": "cheese",
  provolone: "cheese",
  "provolone cheese": "cheese",
  cheddar: "cheddar",
  "cheddar cheese": "cheddar",
  "shredded cheddar": "cheddar",
  mozzarella: "mozzarella",
  "mozzarella cheese": "mozzarella",
  "shredded mozzarella": "mozzarella",
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
  "large tortilla": "tortilla",
  "large tortillas": "tortilla",
  "small tortilla": "tortilla",
  "small tortillas": "tortilla",
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
  pepper: "black pepper",
  "black pepper": "black pepper",
  "ground black pepper": "black pepper",
  "bell pepper": "bell pepper",
  "bell peppers": "bell pepper",
  "red bell pepper": "bell pepper",
  "green bell pepper": "bell pepper",
  "yellow bell pepper": "bell pepper",
  bread: "bread",
  "sliced bread": "bread",
  "white bread": "bread",
  "wheat bread": "bread",
  "whole wheat bread": "bread",
  "sandwich bread": "bread",
  sourdough: "bread",
  "sourdough bread": "bread",
  "bread slice": "bread",
  "bread slices": "bread",
  "thick slice bread": "bread",
  toast: "bread",
  "peanut butter": "peanut butter",
  pb: "peanut butter",
  "creamy peanut butter": "peanut butter",
  "crunchy peanut butter": "peanut butter",
  "smooth peanut butter": "peanut butter",
  jelly: "jelly",
  jam: "jelly",
  "grape jelly": "jelly",
  "strawberry jelly": "jelly",
  "strawberry jam": "jelly",
  "raspberry jam": "jelly",
  "fruit preserves": "jelly",
  preserves: "jelly",
  turkey: "turkey",
  "deli turkey": "turkey",
  "sliced turkey": "turkey",
  "turkey breast": "turkey",
  "turkey slice": "turkey",
  "turkey slices": "turkey",
  "smoked turkey": "turkey",
  "roast turkey": "turkey",
  tomato: "tomato",
  tomatoes: "tomato",
  "roma tomato": "tomato",
  "cherry tomatoes": "tomato",
  "tomato sauce": "tomato sauce",
  marinara: "tomato sauce",
  "marinara sauce": "tomato sauce",
  "pasta sauce": "tomato sauce",
  "pizza sauce": "tomato sauce",
  oats: "oats",
  "rolled oats": "oats",
  "quick oats": "oats",
  "old fashioned oats": "oats",
  oatmeal: "oats",
  milk: "milk",
  "whole milk": "milk",
  "2% milk": "milk",
  "skim milk": "milk",
  "oat milk": "milk",
  "almond milk": "milk",
  "soy milk": "milk",
  banana: "banana",
  bananas: "banana",
  "ripe banana": "banana",
  "ripe bananas": "banana",
  yogurt: "yogurt",
  "plain yogurt": "yogurt",
  "thick plain yogurt": "yogurt",
  "greek yogurt": "yogurt",
  "plain greek yogurt": "yogurt",
  blueberries: "blueberries",
  blueberry: "blueberries",
  "fresh blueberries": "blueberries",
  "frozen blueberries": "blueberries",
  strawberries: "strawberries",
  strawberry: "strawberries",
  "fresh strawberries": "strawberries",
  "frozen strawberries": "strawberries",
  apple: "apple",
  apples: "apple",
  "red apple": "apple",
  "green apple": "apple",
  pear: "pear",
  pears: "pear",
  orange: "orange",
  oranges: "orange",
  grapes: "grapes",
  grape: "grapes",
  "red grapes": "grapes",
  "green grapes": "grapes",
  flour: "flour",
  "all-purpose flour": "flour",
  "all purpose flour": "flour",
  "wheat flour": "flour",
  potato: "potato",
  potatoes: "potato",
  "small potato": "potato",
  "medium potato": "potato",
  "large potato": "potato",
  "sweet potato": "sweet potato",
  "sweet potatoes": "sweet potato",
  "small sweet potato": "sweet potato",
  "medium sweet potato": "sweet potato",
  "large sweet potato": "sweet potato",
  onion: "onion",
  onions: "onion",
  "yellow onion": "onion",
  "red onion": "onion",
  "white onion": "onion",
  peas: "peas",
  "frozen peas": "peas",
  "green peas": "peas",
  avocado: "avocado",
  avocados: "avocado",
  "lemon juice": "lemon juice",
  lemon: "lemon juice",
  lemons: "lemon juice",
  "lime juice": "lime juice",
  lime: "lime juice",
  limes: "lime juice",
  tuna: "tuna",
  "canned tuna": "tuna",
  cucumber: "cucumber",
  cucumbers: "cucumber",
  chickpeas: "chickpeas",
  "canned chickpeas": "chickpeas",
  "garbanzo beans": "chickpeas",
  ham: "ham",
  "sliced ham": "ham",
  "deli ham": "ham",
  "black beans": "black beans",
  "canned black beans": "black beans",
  cabbage: "cabbage",
  "shredded cabbage": "cabbage",
  "finely shredded cabbage": "cabbage",
  "green cabbage": "cabbage",
  "red cabbage": "cabbage",
  chicken: "chicken",
  "cooked chicken": "chicken",
  "chilled cooked chicken": "chicken",
  "shredded chicken": "chicken",
  "diced chicken": "chicken",
  "rotisserie chicken": "chicken",
  tofu: "tofu",
  "firm tofu": "tofu",
  "extra firm tofu": "tofu",
  "soy sauce": "soy sauce",
  corn: "corn",
  "frozen corn": "corn",
  "canned corn": "corn",
  "sweet corn": "corn",
  rice: "rice",
  "cooked rice": "rice",
  "chilled cooked rice": "rice",
  "white rice": "rice",
  "brown rice": "rice",
  "leftover rice": "rice",
  broccoli: "broccoli",
  "broccoli florets": "broccoli",
  "small broccoli florets": "broccoli",
  "chopped broccoli": "broccoli",
  "finely chopped broccoli": "broccoli",
  "ground beef": "ground beef",
  "cooked ground beef": "ground beef",
  beef: "ground beef",
  pasta: "pasta",
  "dry pasta": "pasta",
  spaghetti: "pasta",
  "dry spaghetti": "pasta",
  macaroni: "pasta",
  "dry macaroni": "pasta",
  penne: "pasta",
  "instant ramen": "instant ramen",
  "block instant ramen": "instant ramen",
  ramen: "instant ramen",
  "ramen noodles": "instant ramen",
  carrot: "carrot",
  carrots: "carrot",
  lentils: "lentils",
  "cooked lentils": "lentils",
  "dry red lentils": "lentils",
  "red lentils": "lentils",
};

/**
 * Cheese compatibility: generic "cheese" satisfies cheddar/mozzarella recipes,
 * and specific cheddar/mozzarella also satisfy generic "cheese" recipes.
 */
const INGREDIENT_COMPATIBILITY: Record<string, string[]> = {
  cheese: ["cheese", "cheddar", "mozzarella"],
  cheddar: ["cheddar", "cheese"],
  mozzarella: ["mozzarella", "cheese"],
};

const KEEP_TRAILING_S = new Set([
  "canned white beans",
  "white beans",
  "black beans",
  "canned black beans",
  "beans",
  "oats",
  "rolled oats",
  "peas",
  "frozen peas",
  "blueberries",
  "strawberries",
  "grapes",
  "chickpeas",
  "canned chickpeas",
  "lentils",
  "cooked lentils",
  "dry red lentils",
  "greens",
  "hummus",
  "couscous",
]);

const QUANTITY_UNITS = new Set([
  "cup",
  "cups",
  "tbsp",
  "tablespoon",
  "tablespoons",
  "tsp",
  "teaspoon",
  "teaspoons",
  "oz",
  "ounce",
  "ounces",
  "lb",
  "lbs",
  "pound",
  "pounds",
  "g",
  "gram",
  "grams",
  "kg",
  "ml",
  "l",
  "can",
  "cans",
  "bag",
  "bags",
  "bunch",
  "bunches",
  "handful",
  "handfuls",
  "clove",
  "cloves",
  "slice",
  "slices",
  "block",
  "blocks",
  "pinch",
  "pinches",
  "splash",
  "jar",
  "jars",
  "box",
  "boxes",
  "pack",
  "packs",
  "loaf",
  "loaves",
]);

const COUNTABLE_SINGULAR_TO_PLURAL: Record<string, string> = {
  egg: "eggs",
  tortilla: "tortillas",
  wrap: "wraps",
  clove: "cloves",
  slice: "slices",
  loaf: "loaves",
};

const COUNTABLE_PLURAL_TO_SINGULAR: Record<string, string> = {
  eggs: "egg",
  tortillas: "tortilla",
  wraps: "wrap",
  cloves: "clove",
  slices: "slice",
  loaves: "loaf",
};

/**
 * Clean up user-entered display text while preserving readability.
 */
export function cleanIngredientDisplay(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^(a|an|some|the)\s+/i, "")
    .toLowerCase();
}

/**
 * Parse a single string like "4 eggs", "1 egg", "2 tbsp olive oil", or "a tortilla"
 * into a clean { name, quantity } pair.
 */
export function parseIngredientEntry(raw: string): ParsedIngredientEntry | null {
  const trimmed = raw.trim().replace(/\s+/g, " ");
  if (!trimmed) return null;

  // Handle "a tortilla" / "an egg" -> quantity "1", name "tortilla" / "egg"
  const articleMatch = trimmed.match(/^(?:a|an)\s+(.+)$/i);
  if (articleMatch) {
    const name = cleanIngredientDisplay(articleMatch[1]);
    return name ? { name, quantity: "1" } : null;
  }

  // Handle leading numeric or Unicode-fraction quantity (e.g. "4 eggs", "½ tomato", "1/2 cup cheese")
  const normalizedQtyPrefix = trimmed
    .replace(/(\d)([½¼¾⅓⅔])/g, "$1 $2")
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    .replace(/⅓/g, "1/3")
    .replace(/⅔/g, "2/3");

  const qtyMatch = normalizedQtyPrefix.match(
    /^(\d+(?:\.\d+)?(?:\s+\d+\/\d+|\s*\/\s*\d+)?(?:\s*-\s*\d+(?:\.\d+)?)?)\s+(.+)$/
  );
  if (qtyMatch) {
    const numPart = qtyMatch[1].replace(/\s*\/\s*/g, "/").replace(/\s+/g, " ");
    const restTokens = qtyMatch[2].trim().split(/\s+/);

    if (restTokens.length >= 2 && QUANTITY_UNITS.has(restTokens[0].toLowerCase())) {
      const unit = restTokens[0].toLowerCase();
      // Special case: "1 can white beans" -> quantity "1 can", name "canned white beans"
      if (unit === "can" || unit === "cans") {
        const restName = cleanIngredientDisplay(restTokens.slice(1).join(" "));
        if (restName === "white beans" || restName === "white bean") {
          return { name: "canned white beans", quantity: `${numPart} ${unit}` };
        }
      }
      // Special case: "2 cloves garlic" -> quantity "2 cloves", name "garlic"
      const remainingName = cleanIngredientDisplay(restTokens.slice(1).join(" "));
      if (remainingName) {
        return {
          name: remainingName,
          quantity: `${numPart} ${unit}`,
        };
      }
    }

    const name = cleanIngredientDisplay(qtyMatch[2]);
    if (name) {
      return {
        name: adjustCountableNoun(name, numPart),
        quantity: numPart,
      };
    }
  }

  const plainName = cleanIngredientDisplay(trimmed);
  return plainName ? { name: plainName, quantity: "" } : null;
}

/**
 * Adjust countable ingredient nouns like egg/eggs or tortilla/tortillas
 * when the quantity is a simple number ("1" -> "egg", "4" -> "eggs").
 */
export function adjustCountableNoun(name: string, quantity: string): string {
  const numeric = parsePureNumber(quantity);
  if (numeric === null) return name;

  const lower = name.toLowerCase();
  if (numeric === 1 && COUNTABLE_PLURAL_TO_SINGULAR[lower]) {
    return COUNTABLE_PLURAL_TO_SINGULAR[lower];
  }
  if (numeric !== 1 && COUNTABLE_SINGULAR_TO_PLURAL[lower]) {
    return COUNTABLE_SINGULAR_TO_PLURAL[lower];
  }
  return name;
}

/**
 * Format an IngredientItem for display (e.g. "4 eggs", "1 egg", or "spinach").
 */
export function formatIngredientWithQuantity(item: {
  name: string;
  quantity?: string;
}): string {
  const qty = item.quantity?.trim();
  if (!qty) return item.name;
  return `${qty} ${adjustCountableNoun(item.name, qty)}`;
}

/**
 * Step a quantity string up or down by delta (+1 or -1).
 * Works cleanly for counts ("1" -> "2") and unit strings ("2 cloves" -> "3 cloves").
 */
export function stepQuantityString(currentQuantity: string, delta: 1 | -1): string {
  const trimmed = currentQuantity.trim();
  if (!trimmed) {
    return delta > 0 ? "1" : "";
  }

  const match = trimmed.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return trimmed;
  }

  const value = Number(match[1]);
  const suffix = match[2];
  const nextValue = Math.max(0, Math.round((value + delta) * 10) / 10);
  if (nextValue === 0 && !suffix) {
    return "0";
  }
  return `${nextValue}${suffix}`;
}

/**
 * Parse a numeric value like "1", "4", "0", or "1/2" from a quantity string (or null if text/blank).
 */
export function parsePureNumber(quantity: string): number | null {
  const trimmed = quantity
    .trim()
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    .replace(/⅓/g, "1/3")
    .replace(/⅔/g, "2/3");
  if (!trimmed) return null;

  const fractionMatch = trimmed.match(/^(\d+)\s*\/\s*(\d+)(?:\s+\w+)?$/);
  if (fractionMatch && Number(fractionMatch[2]) > 0) {
    return Number(fractionMatch[1]) / Number(fractionMatch[2]);
  }

  if (/^\d+(?:\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }
  // Also extract leading number from "1 can", "2 cloves"
  const leading = trimmed.match(/^(\d+(?:\.\d+)?)\s+\w+$/);
  return leading ? Number(leading[1]) : null;
}

/**
 * Normalize an ingredient string to a canonical matching key.
 */
export function normalizeIngredient(raw: string): string {
  // Strip any leading quantity before normalizing the ingredient name
  const parsed = parseIngredientEntry(raw);
  const cleaned = parsed ? parsed.name : cleanIngredientDisplay(raw);
  if (!cleaned) return "";

  if (INGREDIENT_ALIASES[cleaned]) {
    return INGREDIENT_ALIASES[cleaned];
  }

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
 * Split comma- or newline-separated ingredient input into clean, unique { name, quantity } entries.
 */
export function parseIngredientInput(raw: string): ParsedIngredientEntry[] {
  const parts = raw
    .split(/[\n,]+/)
    .map((part) => parseIngredientEntry(part))
    .filter((entry): entry is ParsedIngredientEntry => entry !== null);

  const seenNormalized = new Set<string>();
  const result: ParsedIngredientEntry[] = [];

  for (const part of parts) {
    const norm = normalizeIngredient(part.name);
    if (!norm || seenNormalized.has(norm)) continue;
    seenNormalized.add(norm);
    result.push(part);
  }

  return result;
}

function formatMissingNoun(ingredient: string): string {
  const countableWithArticle: Record<string, string> = {
    tortilla: "a tortilla",
    egg: "an egg",
  };
  return countableWithArticle[ingredient] ?? ingredient;
}

function hasEnoughIngredient(
  userItemsByKey: Map<string, IngredientItem>,
  key: string,
  minCount = 0
): boolean {
  const normalizedKey = normalizeIngredient(key);
  const candidateKeys = INGREDIENT_COMPATIBILITY[normalizedKey] ?? [normalizedKey];

  let item: IngredientItem | undefined;
  for (const candidate of candidateKeys) {
    item = userItemsByKey.get(candidate);
    if (item) break;
  }
  if (!item) return false;

  const numericQty = parsePureNumber(item.quantity);
  if (numericQty !== null) {
    if (numericQty <= 0) return false;
    return minCount > 0 ? numericQty >= minCount : true;
  }
  // If user didn't specify a numeric quantity (or used e.g. "some"), treat as available
  return true;
}

function hasRequiredEquipment(
  recipe: Recipe,
  selectedEquipment: EquipmentId[]
): boolean {
  if (recipe.requiredEquipment && recipe.requiredEquipment.length > 0) {
    return recipe.requiredEquipment.every((eq) => selectedEquipment.includes(eq));
  }
  if (recipe.equipment === "none") return true;
  return selectedEquipment.includes(recipe.equipment);
}

function buildUserItemMap(userIngredients: IngredientItem[]): Map<string, IngredientItem> {
  const map = new Map<string, IngredientItem>();
  for (const item of userIngredients) {
    const key = normalizeIngredient(item.name);
    if (!key) continue;
    map.set(key, item);
  }
  return map;
}

/**
 * Filter and rank recipes in strict "No shopping" mode:
 * - User must have EVERY required ingredient with sufficient quantity (not 0)
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

  const userItemsByKey = buildUserItemMap(userIngredients);
  const priorityItem = userIngredients.find((item) => item.id === priorityIngredientId);
  const priorityNormalized = priorityItem ? normalizeIngredient(priorityItem.name) : null;

  const eligible: MatchedRecipe[] = [];

  for (const recipe of recipes) {
    if (recipe.timeMinutes > timeLimit) continue;
    if (!hasRequiredEquipment(recipe, equipment)) continue;

    const hasAllIngredients = recipe.ingredientRequirements.every((req) =>
      hasEnoughIngredient(userItemsByKey, req.key, req.minCount ?? 0)
    );
    if (!hasAllIngredients) continue;

    const usesPriority = Boolean(
      priorityNormalized &&
        recipe.ingredients.some((req) => {
          const reqNorm = normalizeIngredient(req);
          const compat = INGREDIENT_COMPATIBILITY[reqNorm] ?? [reqNorm];
          return compat.includes(priorityNormalized);
        })
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
 * and explain the exact missing ingredient, quantity gap, time shortfall, or equipment gap.
 */
export function explainNoMatch(params: {
  recipes: Recipe[];
  userIngredients: IngredientItem[];
  timeLimit: number;
  equipment: EquipmentId[];
}): NoMatchExplanation | null {
  const { recipes, userIngredients, timeLimit, equipment } = params;
  if (recipes.length === 0) return null;

  const userItemsByKey = buildUserItemMap(userIngredients);

  const scored = recipes.map((recipe) => {
    const missingIngredients = recipe.ingredientRequirements
      .filter((req) => !hasEnoughIngredient(userItemsByKey, req.key, req.minCount ?? 0))
      .map((req) => req.key);

    const overTime = recipe.timeMinutes > timeLimit;
    const missingEquip = !hasRequiredEquipment(recipe, equipment);

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
