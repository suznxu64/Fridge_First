export type ScreenId = "add" | "confirm" | "meals";

export type EquipmentId = "frying-pan" | "microwave" | "saucepan";

export type IngredientSource = "sample" | "manual" | "photo";

export interface IngredientItem {
  id: string;
  name: string;
}

export interface Recipe {
  id: string;
  name: string;
  /** Canonical ingredient names required to cook this meal */
  ingredients: string[];
  /** Human-readable ingredient lines shown on the recipe card */
  ingredientList: string[];
  timeMinutes: number;
  equipment: EquipmentId;
  equipmentLabel: string;
  panNote?: string;
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
