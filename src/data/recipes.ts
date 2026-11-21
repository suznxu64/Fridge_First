import type { EquipmentId, Recipe } from "../types";

/**
 * Sample fridge preset so anyone can demo FridgeFirst immediately
 * without uploading a photo or needing an API key.
 */
export const SAMPLE_FRIDGE_INGREDIENTS = ["spinach", "eggs", "cheese"];

/**
 * Quick pantry & common fridge items to speed up tapping on mobile.
 * Users can also type any ingredient freely in the "Add ingredient" input.
 */
export const QUICK_PANTRY_ITEMS = [
  "oil",
  "tortilla",
  "garlic",
  "canned white beans",
  "butter",
  "salt",
];

export const TIME_LIMIT_OPTIONS = [10, 15, 20, 30] as const;

export const EQUIPMENT_OPTIONS: Array<{ id: EquipmentId; label: string }> = [
  { id: "frying-pan", label: "One frying pan" },
  { id: "microwave", label: "Microwave" },
  { id: "saucepan", label: "Saucepan" },
];

/**
 * Starter recipe dataset for FridgeFirst.
 * Beginner note: Add new recipes by appending an object with canonical
 * ingredient names, cooking time in minutes, equipment ID, and short steps.
 */
export const RECIPES: Recipe[] = [
  {
    id: "spinach-egg-scramble",
    name: "Spinach and Egg Scramble",
    ingredients: ["spinach", "egg", "oil"],
    ingredientList: ["spinach", "eggs", "oil"],
    timeMinutes: 8,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    steps: [
      "Warm a splash of oil in your frying pan over medium heat.",
      "Toss in the spinach and stir for 1 to 2 minutes until wilted.",
      "Crack in the eggs, scramble gently with a spatula until just set, and serve warm.",
    ],
  },
  {
    id: "spinach-egg-wrap",
    name: "Spinach and Egg Wrap",
    ingredients: ["spinach", "egg", "oil", "tortilla"],
    ingredientList: ["spinach", "eggs", "oil", "tortilla"],
    timeMinutes: 12,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    steps: [
      "Warm the oil in your frying pan over medium heat and wilt the spinach.",
      "Pour in beaten eggs and cook until softly scrambled, then slide onto a plate.",
      "Warm the tortilla in the same pan for 30 seconds, spoon the eggs and spinach inside, and fold to eat.",
    ],
  },
  {
    id: "garlicky-spinach-white-beans",
    name: "Garlicky Spinach and White Beans",
    ingredients: ["spinach", "canned white beans", "garlic", "oil"],
    ingredientList: ["spinach", "canned white beans", "garlic", "oil"],
    timeMinutes: 12,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    steps: [
      "Warm oil in your frying pan over medium heat and sizzle sliced or minced garlic for 30 seconds.",
      "Stir in drained canned white beans and cook for 4 minutes until warmed through and lightly crisp.",
      "Fold in the spinach and stir for 2 minutes until bright green and wilted.",
    ],
  },
  {
    id: "cheese-quesadilla",
    name: "Cheese Quesadilla",
    ingredients: ["cheese", "tortilla"],
    ingredientList: ["cheese", "tortilla"],
    timeMinutes: 8,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    panNote: "Toasted in a dry pan",
    steps: [
      "Heat a dry frying pan over medium-low heat—no oil needed.",
      "Place the tortilla flat, sprinkle cheese over one half, and fold the tortilla over.",
      "Toast 2 to 3 minutes per side until golden brown and the cheese is melted inside.",
    ],
  },
];
