import type { EquipmentId, ParsedIngredientEntry, Recipe } from "../types";

/**
 * Sample fridge preset so anyone can demo WTF (What the Fridge) immediately
 * without uploading a photo or needing an API key.
 */
export const SAMPLE_FRIDGE_INGREDIENTS: ParsedIngredientEntry[] = [
  { name: "spinach", quantity: "1 bag" },
  { name: "eggs", quantity: "4" },
  { name: "cheese", quantity: "1 cup" },
];

/**
 * Quick pantry & common fridge items to speed up tapping on mobile.
 * Users can also type any ingredient + quantity freely in the "Add ingredient" input.
 */
export const QUICK_PANTRY_ITEMS: ParsedIngredientEntry[] = [
  { name: "oil", quantity: "1 tbsp" },
  { name: "tortilla", quantity: "1" },
  { name: "garlic", quantity: "2 cloves" },
  { name: "canned white beans", quantity: "1 can" },
  { name: "butter", quantity: "1 tbsp" },
  { name: "salt", quantity: "1 pinch" },
];

export const TIME_LIMIT_OPTIONS = [10, 15, 20, 30] as const;

export const EQUIPMENT_OPTIONS: Array<{ id: EquipmentId; label: string }> = [
  { id: "frying-pan", label: "One frying pan" },
  { id: "microwave", label: "Microwave" },
  { id: "saucepan", label: "Saucepan" },
];

/**
 * Starter recipe dataset for WTF (What the Fridge).
 * Beginner note: Add new recipes by appending an object with canonical
 * ingredient names, quantities, cooking time in minutes, equipment ID, and short steps.
 */
export const RECIPES: Recipe[] = [
  {
    id: "spinach-egg-scramble",
    name: "Spinach and Egg Scramble",
    ingredients: ["spinach", "egg", "oil"],
    ingredientList: ["1–2 handfuls spinach", "1–2 eggs", "1 tsp oil"],
    ingredientRequirements: [
      { key: "spinach", label: "1–2 handfuls spinach" },
      { key: "egg", label: "1–2 eggs", minCount: 1 },
      { key: "oil", label: "1 tsp oil" },
    ],
    timeMinutes: 8,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    imageUrl: "/src/assets/images/cartoon_spinach_scramble_1795299497290.jpg",
    imageAlt: "Cartoon illustration of fluffy scrambled eggs and spinach on a cream plate",
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
    ingredientList: ["1 handful spinach", "1–2 eggs", "1 tsp oil", "1 tortilla"],
    ingredientRequirements: [
      { key: "spinach", label: "1 handful spinach" },
      { key: "egg", label: "1–2 eggs", minCount: 1 },
      { key: "oil", label: "1 tsp oil" },
      { key: "tortilla", label: "1 tortilla", minCount: 1 },
    ],
    timeMinutes: 12,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    imageUrl: "/src/assets/images/cartoon_spinach_wrap_1795299496395.jpg",
    imageAlt: "Cartoon illustration of a toasted tortilla wrap filled with scrambled eggs and spinach",
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
    ingredientList: [
      "2 handfuls spinach",
      "1 can white beans",
      "2 cloves garlic",
      "1 tbsp oil",
    ],
    ingredientRequirements: [
      { key: "spinach", label: "2 handfuls spinach" },
      { key: "canned white beans", label: "1 can white beans", minCount: 1 },
      { key: "garlic", label: "2 cloves garlic" },
      { key: "oil", label: "1 tbsp oil" },
    ],
    timeMinutes: 12,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    imageUrl: "/src/assets/images/cartoon_white_beans_1795299495112.jpg",
    imageAlt: "Cartoon illustration of white beans, spinach, and garlic simmering in a skillet",
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
    ingredientList: ["1/2 cup cheese", "1 tortilla"],
    ingredientRequirements: [
      { key: "cheese", label: "1/2 cup cheese" },
      { key: "tortilla", label: "1 tortilla", minCount: 1 },
    ],
    timeMinutes: 8,
    equipment: "frying-pan",
    equipmentLabel: "One frying pan",
    panNote: "Toasted in a dry pan",
    imageUrl: "/src/assets/images/cartoon_quesadilla_1795299496558.jpg",
    imageAlt: "Cartoon illustration of golden toasted cheese quesadilla wedges on a plate",
    steps: [
      "Heat a dry frying pan over medium-low heat—no oil needed.",
      "Place the tortilla flat, sprinkle cheese over one half, and fold the tortilla over.",
      "Toast 2 to 3 minutes per side until golden brown and the cheese is melted inside.",
    ],
  },
];
