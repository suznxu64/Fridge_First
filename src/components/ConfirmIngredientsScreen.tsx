import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Minus,
  Pencil,
  Plus,
  Star,
  Utensils,
  X,
} from "lucide-react";
import type {
  EquipmentId,
  IngredientItem,
  IngredientSource,
  ParsedIngredientEntry,
} from "../types";
import {
  EQUIPMENT_OPTIONS,
  QUICK_PANTRY_ITEMS,
  TIME_LIMIT_OPTIONS,
} from "../data/recipes";
import {
  cleanIngredientDisplay,
  formatIngredientWithQuantity,
  normalizeIngredient,
  parseIngredientEntry,
  parseIngredientInput,
  stepQuantityString,
} from "../utils/recipeMatcher";

interface ConfirmIngredientsScreenProps {
  ingredients: IngredientItem[];
  priorityIngredientId: string | null;
  timeLimit: number;
  equipment: EquipmentId[];
  source: IngredientSource | null;
  matchCount: number;
  onAddIngredients: (entries: ParsedIngredientEntry[]) => void;
  onUpdateIngredient: (id: string, newName: string) => void;
  onUpdateIngredientQuantity: (id: string, newQuantity: string) => void;
  onRemoveIngredient: (id: string) => void;
  onTogglePriority: (id: string) => void;
  onChangeTimeLimit: (minutes: number) => void;
  onToggleEquipment: (id: EquipmentId) => void;
  onFindMeals: () => void;
  onBackToStart: () => void;
}

export function ConfirmIngredientsScreen({
  ingredients,
  priorityIngredientId,
  timeLimit,
  equipment,
  source,
  matchCount,
  onAddIngredients,
  onUpdateIngredient,
  onUpdateIngredientQuantity,
  onRemoveIngredient,
  onTogglePriority,
  onChangeTimeLimit,
  onToggleEquipment,
  onFindMeals,
  onBackToStart,
}: ConfirmIngredientsScreenProps) {
  const [newQuantityText, setNewQuantityText] = useState("");
  const [newIngredientText, setNewIngredientText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  const normalizedSet = new Set(
    ingredients.map((item) => normalizeIngredient(item.name))
  );

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qtyInput = newQuantityText.trim();

    if (qtyInput && !newIngredientText.includes(",")) {
      const parsed = parseIngredientEntry(`${qtyInput} ${newIngredientText}`);
      if (parsed) {
        onAddIngredients([parsed]);
        setNewQuantityText("");
        setNewIngredientText("");
        return;
      }
    }

    const parsedList = parseIngredientInput(newIngredientText);
    if (parsedList.length === 0) return;

    if (qtyInput && parsedList.length === 1 && !parsedList[0].quantity) {
      parsedList[0].quantity = qtyInput;
    }

    onAddIngredients(parsedList);
    setNewQuantityText("");
    setNewIngredientText("");
  };

  const startEditing = (item: IngredientItem) => {
    setEditingId(item.id);
    setEditingText(item.name);
  };

  const commitEditing = () => {
    if (!editingId) return;
    const cleaned = cleanIngredientDisplay(editingText);
    if (cleaned) {
      onUpdateIngredient(editingId, cleaned);
    }
    setEditingId(null);
    setEditingText("");
  };

  const sourceNotice =
    source === "sample"
      ? "Sample fridge data · Spinach, eggs, and cheese"
      : source === "photo"
        ? "Detected from your fridge photo"
        : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#525E56]">
            <span className="font-medium text-[#2D6A4F]">Step 2 of 3 · Confirm what you can use</span>
            {sourceNotice && (
              <>
                <span aria-hidden="true">·</span>
                <span>{sourceNotice}</span>
              </>
            )}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1A211D]">
            Confirm your ingredients
          </h1>
          <p className="text-base text-[#39453E]">
            Remove anything that isn’t yours, and add anything you have in the pantry.
          </p>
        </div>

        <button
          type="button"
          onClick={onBackToStart}
          className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#4A554E] hover:text-[#1A211D] whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Start screen
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Main Column: Editable ingredient chips + Add ingredient field */}
        <div className="lg:col-span-7 space-y-5 rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-lg font-bold text-[#1A211D]">
              Your available ingredients{" "}
              <span className="text-sm font-medium text-[#525E56] tabular-nums">
                ({ingredients.length})
              </span>
            </h2>
            <p className="text-xs text-[#525E56]">
              Adjust quantities or tap <span className="font-semibold text-[#1B4332]">Use first</span> to prioritize.
            </p>
          </div>

          {ingredients.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#CBD3CA] bg-[#FAF7F0] p-5 text-sm text-[#4A554E]">
              No ingredients in your list yet. Add ingredients below—such as 1 egg, spinach, oil, or 1 tortilla.
            </div>
          ) : (
            <ul className="space-y-2.5" aria-label="Confirmed ingredients">
              {ingredients.map((item) => {
                const isPriority = item.id === priorityIngredientId;
                const isEditing = editingId === item.id;

                return (
                  <li
                    key={item.id}
                    className={`flex flex-wrap items-center justify-between gap-2.5 rounded-xl border p-2.5 sm:px-3.5 transition-colors ${
                      isPriority
                        ? "border-[#2D6A4F] bg-[#EDF5F0]"
                        : "border-[#E2DDD2] bg-[#FAF7F0]/75 hover:border-[#C9C2B3]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
                      {/* Quantity stepper & editable quantity field */}
                      <div className="inline-flex items-center rounded-xl border border-[#D5CFC2] bg-white divide-x divide-[#ECE7DC] shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateIngredientQuantity(
                              item.id,
                              stepQuantityString(item.quantity, -1)
                            )
                          }
                          aria-label={`Decrease quantity for ${item.name}`}
                          className="min-h-[40px] min-w-[36px] inline-flex items-center justify-center text-[#4A554E] hover:text-[#1A211D] hover:bg-[#FAF7F0] rounded-l-xl transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) =>
                            onUpdateIngredientQuantity(item.id, e.target.value)
                          }
                          placeholder="qty"
                          aria-label={`Quantity for ${item.name}`}
                          className="w-16 min-h-[40px] bg-transparent px-1 text-center text-xs font-semibold tabular-nums text-[#1A211D] placeholder:text-[#8A948D] focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateIngredientQuantity(
                              item.id,
                              stepQuantityString(item.quantity, 1)
                            )
                          }
                          aria-label={`Increase quantity for ${item.name}`}
                          className="min-h-[40px] min-w-[36px] inline-flex items-center justify-center text-[#4A554E] hover:text-[#1A211D] hover:bg-[#FAF7F0] rounded-r-xl transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {isEditing ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            commitEditing();
                          }}
                          className="flex flex-1 items-center gap-2 min-w-[140px]"
                        >
                          <input
                            type="text"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            onBlur={commitEditing}
                            autoFocus
                            aria-label={`Edit ${item.name}`}
                            className="flex-1 min-h-[40px] rounded-lg border border-[#2D6A4F] bg-white px-3 text-sm font-medium text-[#1A211D] focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="min-h-[40px] px-3 rounded-lg bg-[#2D6A4F] text-xs font-semibold text-white whitespace-nowrap cursor-pointer"
                          >
                            Save
                          </button>
                        </form>
                      ) : (
                        <button
                          type="button"
                          onClick={() => startEditing(item)}
                          title="Tap to rename ingredient"
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-1.5 text-left text-base font-medium text-[#1A211D] hover:text-[#2D6A4F] rounded-lg cursor-pointer min-w-0"
                        >
                          <span className="truncate">{item.name}</span>
                          <Pencil className="w-3.5 h-3.5 text-[#6B776F] shrink-0" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onTogglePriority(item.id)}
                        aria-pressed={isPriority}
                        className={`min-h-[44px] inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                          isPriority
                            ? "bg-[#2D6A4F] text-white hover:bg-[#1B4332]"
                            : "border border-[#CBD3CA] bg-white text-[#39453E] hover:border-[#2D6A4F] hover:text-[#1B4332]"
                        }`}
                      >
                        <Star
                          className={`w-3.5 h-3.5 shrink-0 ${isPriority ? "fill-white" : ""}`}
                        />
                        {isPriority ? "Use first (active)" : "Use first"}
                      </button>

                      <button
                        type="button"
                        onClick={() => onRemoveIngredient(item.id)}
                        aria-label={`Remove ${formatIngredientWithQuantity(item)}`}
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-transparent text-[#525E56] hover:border-[#E2DDD2] hover:bg-white hover:text-[#B42318] transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Add ingredient field with optional Qty */}
          <div className="pt-4 border-t border-[#ECE7DC] space-y-3">
            <form onSubmit={handleAddSubmit} className="space-y-2">
              <label
                htmlFor="add-ingredient-input"
                className="block text-sm font-semibold text-[#1A211D]"
              >
                Add ingredient
              </label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="flex flex-1 gap-2">
                  <label htmlFor="add-quantity-input" className="sr-only">
                    Quantity
                  </label>
                  <input
                    id="add-quantity-input"
                    type="text"
                    value={newQuantityText}
                    onChange={(e) => setNewQuantityText(e.target.value)}
                    placeholder="Qty (e.g. 4)"
                    className="w-24 sm:w-28 min-h-[48px] rounded-xl border border-[#CBD3CA] bg-[#FAF7F0] px-3 py-2.5 text-sm text-[#1A211D] placeholder:text-[#6B776F] focus:border-[#2D6A4F] focus:bg-white focus:outline-none shrink-0"
                  />
                  <input
                    id="add-ingredient-input"
                    type="text"
                    value={newIngredientText}
                    onChange={(e) => setNewIngredientText(e.target.value)}
                    placeholder="egg, tortilla, oil, canned white beans..."
                    className="flex-1 min-w-0 min-h-[48px] rounded-xl border border-[#CBD3CA] bg-[#FAF7F0] px-4 py-2.5 text-base text-[#1A211D] placeholder:text-[#6B776F] focus:border-[#2D6A4F] focus:bg-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[48px] inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#2D6A4F] bg-white px-5 py-2.5 text-sm font-semibold text-[#1B4332] hover:bg-[#EDF5F0] whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <p className="text-xs text-[#525E56]">
                Tip: Type <span className="font-medium text-[#1A211D]">1 egg</span> or{" "}
                <span className="font-medium text-[#1A211D]">4 eggs</span> directly, or fill in Qty separately.
              </p>
            </form>

            {/* Quick-tap pantry staples */}
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-[#525E56]">
                Quick-add pantry items (only counted if added):
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_PANTRY_ITEMS.map((item) => {
                  const alreadyAdded = normalizedSet.has(normalizeIngredient(item.name));
                  const label = formatIngredientWithQuantity(item);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      disabled={alreadyAdded}
                      onClick={() => onAddIngredients([item])}
                      className={`min-h-[40px] inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                        alreadyAdded
                          ? "border border-[#DCE3DA] bg-[#EDF5F0] text-[#2D6A4F] opacity-75 cursor-default"
                          : "border border-[#D5CFC2] bg-[#FAF7F0] text-[#1A211D] hover:border-[#2D6A4F] hover:bg-[#EDF5F0] cursor-pointer"
                      }`}
                    >
                      {alreadyAdded ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Time limit, Equipment, No shopping mode, Find meals CTA */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-2xl border border-[#E2DDD2] bg-white p-5 sm:p-6 space-y-5">
            {/* No shopping mode explanation */}
            <div className="rounded-xl border border-[#C6DDD0] bg-[#EDF5F0] p-4 space-y-1">
              <p className="text-sm font-semibold text-[#1B4332]">
                No shopping mode
              </p>
              <p className="text-xs text-[#2D4739] leading-relaxed">
                You will only see meals made strictly from your list. Oil, butter, and seasonings count only when you add them.
              </p>
            </div>

            {/* Time limit */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2D6A4F]" />
                <h2 className="font-display text-base font-bold text-[#1A211D]">
                  Time limit
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                {TIME_LIMIT_OPTIONS.map((minutes) => {
                  const selected = timeLimit === minutes;
                  return (
                    <button
                      key={minutes}
                      type="button"
                      onClick={() => onChangeTimeLimit(minutes)}
                      aria-pressed={selected}
                      className={`min-h-[44px] rounded-xl px-3.5 py-2 text-sm font-semibold tabular-nums transition-colors whitespace-nowrap cursor-pointer ${
                        selected
                          ? "bg-[#2D6A4F] text-white"
                          : "border border-[#D5CFC2] bg-[#FAF7F0] text-[#1A211D] hover:border-[#2D6A4F]"
                      }`}
                    >
                      {minutes} min
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Equipment */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#2D6A4F]" />
                <h2 className="font-display text-base font-bold text-[#1A211D]">
                  Available equipment
                </h2>
              </div>
              <div className="space-y-2">
                {EQUIPMENT_OPTIONS.map((option) => {
                  const active = equipment.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => onToggleEquipment(option.id)}
                      aria-pressed={active}
                      className={`w-full min-h-[44px] flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                        active
                          ? "border border-[#2D6A4F] bg-[#EDF5F0] text-[#1B4332]"
                          : "border border-[#D5CFC2] bg-[#FAF7F0] text-[#4A554E] hover:border-[#2D6A4F]"
                      }`}
                    >
                      <span>{option.label}</span>
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          active
                            ? "border-[#2D6A4F] bg-[#2D6A4F] text-white"
                            : "border-[#B8B2A5] bg-white"
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary CTA with subtle live readiness cue */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-medium text-[#525E56] text-center tabular-nums">
                {matchCount > 0
                  ? `${matchCount} ${matchCount === 1 ? "meal" : "meals"} ready with your current list`
                  : "Tap Find meals to see what is missing"}
              </p>
              <button
                type="button"
                onClick={onFindMeals}
                className="w-full min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D6A4F] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#1B4332] active:scale-[0.99] transition-all whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                Find meals
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
