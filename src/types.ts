export type ScreenId = "home" | "add" | "confirm" | "meals";

export type EquipmentId = "frying-pan" | "microwave" | "saucepan";

export type IngredientSource = "sample" | "manual" | "photo";

export interface IngredientItem {
  id: string;
  name: string;
  /** Optional quantity text such as "1", "4", "2 tbsp", or "1 bag" */
  quantity: string;
}

export interface ParsedIngredientEntry {
  name: string;
  quantity: string;
}

export interface RecipeIngredientRequirement {
  /** Canonical ingredient key used for matching (e.g. "egg") */
  key: string;
  /** Human-readable quantity + name shown on the recipe card (e.g. "1–2 eggs") */
  label: string;
  /** Minimum numeric count required if user provides a pure count (defaults to 1) */
  minCount?: number;
}

export interface Recipe {
  id: string;
  name: string;
  /** Canonical ingredient names required to cook this meal */
  ingredients: string[];
  /** Human-readable ingredient quantities shown on the recipe card */
  ingredientList: string[];
  /** Structured ingredient quantities for quantity-aware matching */
  ingredientRequirements: RecipeIngredientRequirement[];
  timeMinutes: number;
  equipment: EquipmentId | "none";
  equipmentLabel: string;
  panNote?: string;
  imageUrl?: string;
  imageAlt?: string;
  steps: string[];
}

export interface MatchedRecipe {
  recipe: Recipe;
  usesPriority: boolean;
}

export interface NoMatchExplanation {
  closestRecipe: Recipe;
  headline: string;
  detail: string;
}
