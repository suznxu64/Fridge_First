import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { HomeScreen } from "./components/HomeScreen";
import { AddIngredientsScreen } from "./components/AddIngredientsScreen";
import { ConfirmIngredientsScreen } from "./components/ConfirmIngredientsScreen";
import { MealsScreen } from "./components/MealsScreen";
import { RECIPES, SAMPLE_FRIDGE_INGREDIENTS } from "./data/recipes";
import type {
  EquipmentId,
  IngredientItem,
  IngredientSource,
  ParsedIngredientEntry,
  ScreenId,
} from "./types";
import {
  adjustCountableNoun,
  cleanIngredientDisplay,
  explainNoMatch,
  matchRecipes,
  normalizeIngredient,
} from "./utils/recipeMatcher";

function makeId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export default function App() {
  const [screen, setScreen] = useState<ScreenId>("home");
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
  const [priorityIngredientId, setPriorityIngredientId] = useState<string | null>(null);
  const [timeLimit, setTimeLimit] = useState<number>(15);
  const [equipment, setEquipment] = useState<EquipmentId[]>(["frying-pan"]);
  const [source, setSource] = useState<IngredientSource | null>(null);

  const loadNewIngredientList = (
    entries: ParsedIngredientEntry[],
    nextSource: IngredientSource
  ) => {
    const seen = new Set<string>();
    const items: IngredientItem[] = [];

    for (const raw of entries) {
      const cleanedName = cleanIngredientDisplay(raw.name);
      const quantity = raw.quantity.trim();
      const display = quantity
        ? adjustCountableNoun(cleanedName, quantity)
        : cleanedName;
      const norm = normalizeIngredient(display);
      if (!display || !norm || seen.has(norm)) continue;
      seen.add(norm);
      items.push({ id: makeId(), name: display, quantity });
    }

    setIngredients(items);
    setPriorityIngredientId(null);
    setSource(nextSource);
    setScreen("confirm");
  };

  const handleTrySampleFridge = () => {
    loadNewIngredientList(SAMPLE_FRIDGE_INGREDIENTS, "sample");
  };

  const handleAddIngredients = (entries: ParsedIngredientEntry[]) => {
    setIngredients((prev) => {
      const next = [...prev];

      for (const raw of entries) {
        const cleanedName = cleanIngredientDisplay(raw.name);
        const quantity = raw.quantity.trim();
        const display = quantity
          ? adjustCountableNoun(cleanedName, quantity)
          : cleanedName;
        const norm = normalizeIngredient(display);
        if (!display || !norm) continue;

        const existingIndex = next.findIndex(
          (item) => normalizeIngredient(item.name) === norm
        );

        if (existingIndex >= 0) {
          if (quantity) {
            const existing = next[existingIndex];
            next[existingIndex] = {
              ...existing,
              name: adjustCountableNoun(existing.name, quantity),
              quantity,
            };
          }
          continue;
        }

        next.push({ id: makeId(), name: display, quantity });
      }
      return next;
    });
  };

  const handleUpdateIngredient = (id: string, newName: string) => {
    const cleaned = cleanIngredientDisplay(newName);
    if (!cleaned) return;
    setIngredients((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: item.quantity
                ? adjustCountableNoun(cleaned, item.quantity)
                : cleaned,
            }
          : item
      )
    );
  };

  const handleUpdateIngredientQuantity = (id: string, newQuantity: string) => {
    const cleanedQty = newQuantity.replace(/\s+/g, " ");
    setIngredients((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: cleanedQty,
              name: cleanedQty.trim()
                ? adjustCountableNoun(item.name, cleanedQty.trim())
                : item.name,
            }
          : item
      )
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
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A211D]">
        {/* Compact 3-zone top bar */}
        <header className="sticky top-0 z-30 border-b border-[#E2DDD2] bg-[#FAF7F0]/95 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-8">
            {/* Zone 1: Logo + Wordmark */}
            <button
              type="button"
              onClick={() => setScreen("home")}
              className="inline-flex items-center gap-2 font-display text-sm sm:text-lg font-bold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <img
                src="/assets/aistudio/IMG_4111_9a68c17d.PNG"
                alt="What The Fridge logo"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain shrink-0"
              />
              <span className="sm:hidden">WTF</span>
              <span className="hidden sm:inline">WTF (What the Fridge)</span>
            </button>

            {/* Zone 2: Concise single-line nav links */}
            <nav
              aria-label="App sections"
              className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium overflow-x-auto"
            >
              <button
                type="button"
                onClick={() => setScreen("home")}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  screen === "home"
                    ? "text-[#1B4332] font-semibold underline decoration-[#2D6A4F] decoration-2 underline-offset-4"
                    : "text-[#525E56] hover:text-[#1A211D]"
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => setScreen("add")}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  screen === "add"
                    ? "text-[#1B4332] font-semibold underline decoration-[#2D6A4F] decoration-2 underline-offset-4"
                    : "text-[#525E56] hover:text-[#1A211D]"
                }`}
              >
                <span className="hidden sm:inline">1. </span>Add
              </button>
              <button
                type="button"
                onClick={() => setScreen("confirm")}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  screen === "confirm"
                    ? "text-[#1B4332] font-semibold underline decoration-[#2D6A4F] decoration-2 underline-offset-4"
                    : "text-[#525E56] hover:text-[#1A211D]"
                }`}
              >
                <span className="hidden sm:inline">2. </span>Confirm
              </button>
              <button
                type="button"
                onClick={() => setScreen("meals")}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  screen === "meals"
                    ? "text-[#1B4332] font-semibold underline decoration-[#2D6A4F] decoration-2 underline-offset-4"
                    : "text-[#525E56] hover:text-[#1A211D]"
                }`}
              >
                <span className="hidden sm:inline">3. </span>Meals
              </button>
            </nav>

            {/* Zone 3: Single contextual primary/utility action */}
            <div className="shrink-0">
              {screen === "home" ? (
                <button
                  type="button"
                  onClick={() => setScreen("add")}
                  className="min-h-[38px] px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-[#2D6A4F] text-xs font-semibold text-white hover:bg-[#1B4332] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Open planner
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStartOver}
                  className="min-h-[38px] px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#D5CFC2] bg-white text-xs font-semibold text-[#39453E] hover:border-[#2D6A4F] hover:text-[#1B4332] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Start over
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Main content with fast compositor transitions */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {screen === "home" && (
                <HomeScreen
                  onStartPlanning={() => setScreen("add")}
                  onTrySampleFridge={handleTrySampleFridge}
                />
              )}

              {screen === "add" && (
                <AddIngredientsScreen
                  onTrySampleFridge={handleTrySampleFridge}
                  onSubmitIngredients={(entries, entrySource) =>
                    loadNewIngredientList(entries, entrySource)
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
                  matchCount={matches.length}
                  onAddIngredients={handleAddIngredients}
                  onUpdateIngredient={handleUpdateIngredient}
                  onUpdateIngredientQuantity={handleUpdateIngredientQuantity}
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
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="border-t border-[#E8E3D8] py-5 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A665E]">
            <span>WTF (What the Fridge) · Cook what is already in your fridge before break</span>
            <span>Wellesley College Hackathon · Better Worlds Track</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
