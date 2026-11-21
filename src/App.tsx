import { useMemo, useState } from "react";
import { AddIngredientsScreen } from "./components/AddIngredientsScreen";
import { ConfirmIngredientsScreen } from "./components/ConfirmIngredientsScreen";
import { MealsScreen } from "./components/MealsScreen";
import { RECIPES, SAMPLE_FRIDGE_INGREDIENTS } from "./data/recipes";
import type {
  EquipmentId,
  IngredientItem,
  IngredientSource,
  ScreenId,
} from "./types";
import {
  cleanIngredientDisplay,
  explainNoMatch,
  matchRecipes,
  normalizeIngredient,
} from "./utils/recipeMatcher";

function makeId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export default function App() {
  const [screen, setScreen] = useState<ScreenId>("add");
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
  const [priorityIngredientId, setPriorityIngredientId] = useState<string | null>(null);
  const [timeLimit, setTimeLimit] = useState<number>(15);
  const [equipment, setEquipment] = useState<EquipmentId[]>(["frying-pan"]);
  const [source, setSource] = useState<IngredientSource | null>(null);

  const loadNewIngredientList = (
    names: string[],
    nextSource: IngredientSource
  ) => {
    const seen = new Set<string>();
    const items: IngredientItem[] = [];

    for (const raw of names) {
      const display = cleanIngredientDisplay(raw);
      const norm = normalizeIngredient(display);
      if (!display || !norm || seen.has(norm)) continue;
      seen.add(norm);
      items.push({ id: makeId(), name: display });
    }

    setIngredients(items);
    setPriorityIngredientId(null);
    setSource(nextSource);
    setScreen("confirm");
  };

  const handleTrySampleFridge = () => {
    loadNewIngredientList(SAMPLE_FRIDGE_INGREDIENTS, "sample");
  };

  const handleAddIngredients = (names: string[]) => {
    setIngredients((prev) => {
      const existingNorms = new Set(
        prev.map((item) => normalizeIngredient(item.name))
      );
      const next = [...prev];

      for (const raw of names) {
        const display = cleanIngredientDisplay(raw);
        const norm = normalizeIngredient(display);
        if (!display || !norm || existingNorms.has(norm)) continue;
        existingNorms.add(norm);
        next.push({ id: makeId(), name: display });
      }
      return next;
    });
  };

  const handleUpdateIngredient = (id: string, newName: string) => {
    const cleaned = cleanIngredientDisplay(newName);
    if (!cleaned) return;
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: cleaned } : item))
    );
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients((prev) => prev.filter((item) => item.id !== id));
    setPriorityIngredientId((prevId) => (prevId === id ? null : prevId));
  };

  const handleTogglePriority = (id: string) => {
    setPriorityIngredientId((prevId) => (prevId === id ? null : id));
  };

  const handleToggleEquipment = (id: EquipmentId) => {
    setEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStartOver = () => {
    setScreen("add");
    setIngredients([]);
    setPriorityIngredientId(null);
    setTimeLimit(15);
    setEquipment(["frying-pan"]);
    setSource(null);
  };

  const priorityIngredient = useMemo(
    () => ingredients.find((item) => item.id === priorityIngredientId) ?? null,
    [ingredients, priorityIngredientId]
  );

  const matches = useMemo(
    () =>
      matchRecipes({
        recipes: RECIPES,
        userIngredients: ingredients,
        priorityIngredientId,
        timeLimit,
        equipment,
      }),
    [ingredients, priorityIngredientId, timeLimit, equipment]
  );

  const noMatchExplanation = useMemo(() => {
    if (matches.length > 0) return null;
    return explainNoMatch({
      recipes: RECIPES,
      userIngredients: ingredients,
      timeLimit,
      equipment,
    });
  }, [matches.length, ingredients, timeLimit, equipment]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A211D]">
      {/* Compact 3-zone top bar */}
      <header className="sticky top-0 z-30 border-b border-[#E2DDD2] bg-[#FAF7F0]/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single wordmark */}
          <button
            type="button"
            onClick={() => setScreen("add")}
            className="font-display text-xl font-bold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0 cursor-pointer"
          >
            FridgeFirst
          </button>

          {/* Zone 2: Concise single-line step links */}
          <nav
            aria-label="Cooking steps"
            className="flex items-center gap-4 sm:gap-6 text-sm font-medium overflow-x-auto"
          >
            <button
              type="button"
              onClick={() => setScreen("add")}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                screen === "add"
                  ? "text-[#1B4332] font-semibold underline decoration-2 underline-offset-4"
                  : "text-[#525E56] hover:text-[#1A211D]"
              }`}
            >
              1. Add
            </button>
            <button
              type="button"
              onClick={() => setScreen("confirm")}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                screen === "confirm"
                  ? "text-[#1B4332] font-semibold underline decoration-2 underline-offset-4"
                  : "text-[#525E56] hover:text-[#1A211D]"
              }`}
            >
              2. Confirm
            </button>
            <button
              type="button"
              onClick={() => setScreen("meals")}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                screen === "meals"
                  ? "text-[#1B4332] font-semibold underline decoration-2 underline-offset-4"
                  : "text-[#525E56] hover:text-[#1A211D]"
              }`}
            >
              3. Meals
            </button>
          </nav>

          {/* Zone 3: Single utility action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={handleStartOver}
              className="min-h-[38px] px-3 py-1.5 rounded-lg border border-[#D5CFC2] bg-white text-xs font-semibold text-[#39453E] hover:border-[#2D6A4F] hover:text-[#1B4332] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Start over
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {screen === "add" && (
          <AddIngredientsScreen
            onTrySampleFridge={handleTrySampleFridge}
            onSubmitIngredients={(names, entrySource) =>
              loadNewIngredientList(names, entrySource)
            }
            existingCount={ingredients.length}
            onReturnToConfirm={() => setScreen("confirm")}
          />
        )}

        {screen === "confirm" && (
          <ConfirmIngredientsScreen
            ingredients={ingredients}
            priorityIngredientId={priorityIngredientId}
            timeLimit={timeLimit}
            equipment={equipment}
            source={source}
            onAddIngredients={handleAddIngredients}
            onUpdateIngredient={handleUpdateIngredient}
            onRemoveIngredient={handleRemoveIngredient}
            onTogglePriority={handleTogglePriority}
            onChangeTimeLimit={setTimeLimit}
            onToggleEquipment={handleToggleEquipment}
            onFindMeals={() => setScreen("meals")}
            onBackToStart={() => setScreen("add")}
          />
        )}

        {screen === "meals" && (
          <MealsScreen
            matches={matches}
            noMatchExplanation={noMatchExplanation}
            ingredients={ingredients}
            priorityIngredient={priorityIngredient}
            timeLimit={timeLimit}
            equipment={equipment}
            onEditIngredients={() => setScreen("confirm")}
          />
        )}
      </main>

      <footer className="border-t border-[#E8E3D8] py-5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A665E]">
          <span>FridgeFirst · Cook what is already in your fridge before break</span>
          <span>Wellesley College Hackathon · Better Worlds Track</span>
        </div>
      </footer>
    </div>
  );
}
