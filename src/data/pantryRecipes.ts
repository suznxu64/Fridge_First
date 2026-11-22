import type { Recipe } from "../types";

/**
 * 100 everyday student & dorm recipes imported from the curated recipe collection.
 */
export const PANTRY_RECIPES: Recipe[] = [
  {
    "id": "tomato-and-egg-toast",
    "name": "Tomato & Egg Toast",
    "ingredients": [
      "egg",
      "tomato",
      "bread",
      "butter"
    ],
    "ingredientList": [
      "2 eggs",
      "½ tomato",
      "2 slices bread",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "tomato",
        "label": "½ tomato"
      },
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Toast the bread in the dry pan and set aside.",
      "Melt the butter and cook the diced tomato for 2 minutes.",
      "Add beaten eggs and stir until set.",
      "Spoon onto the toast."
    ]
  },
  {
    "id": "banana-peanut-butter-oats",
    "name": "Banana Peanut Butter Oats",
    "ingredients": [
      "oats",
      "milk",
      "banana",
      "peanut butter"
    ],
    "ingredientList": [
      "½ cup rolled oats",
      "1 cup milk",
      "½ banana",
      "1 tbsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "oats",
        "label": "½ cup rolled oats"
      },
      {
        "key": "milk",
        "label": "1 cup milk"
      },
      {
        "key": "banana",
        "label": "½ banana"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      }
    ],
    "timeMinutes": 8,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer the oats in milk for 5–7 minutes, stirring often.",
      "Mash in the banana and swirl in the peanut butter."
    ]
  },
  {
    "id": "blueberry-yogurt-parfait",
    "name": "Blueberry Yogurt Parfait",
    "ingredients": [
      "yogurt",
      "blueberries",
      "oats"
    ],
    "ingredientList": [
      "¾ cup plain yogurt",
      "½ cup blueberries",
      "2 tbsp rolled oats"
    ],
    "ingredientRequirements": [
      {
        "key": "yogurt",
        "label": "¾ cup plain yogurt"
      },
      {
        "key": "blueberries",
        "label": "½ cup blueberries"
      },
      {
        "key": "oats",
        "label": "2 tbsp rolled oats"
      }
    ],
    "timeMinutes": 5,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Crush half the berries with a fork.",
      "Layer the yogurt, crushed berries, oats, and remaining berries in a bowl."
    ]
  },
  {
    "id": "apple-oat-pancakes",
    "name": "Apple Oat Pancakes",
    "ingredients": [
      "apple",
      "egg",
      "oats",
      "flour",
      "oil"
    ],
    "ingredientList": [
      "½ apple",
      "1 egg",
      "¼ cup rolled oats",
      "1 tbsp flour",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "apple",
        "label": "½ apple"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "oats",
        "label": "¼ cup rolled oats"
      },
      {
        "key": "flour",
        "label": "1 tbsp flour"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Grate the apple and mix with the egg, oats, and flour.",
      "Heat the oil over medium-low heat.",
      "Make three small pancakes and cook 3–4 minutes per side until set throughout."
    ]
  },
  {
    "id": "spinach-and-cheddar-omelet",
    "name": "Spinach & Cheddar Omelet",
    "ingredients": [
      "egg",
      "spinach",
      "cheddar",
      "butter"
    ],
    "ingredientList": [
      "2 eggs",
      "1 cup spinach",
      "2 tbsp shredded cheddar",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "cheddar",
        "label": "2 tbsp shredded cheddar"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Wilt spinach in the butter.",
      "Add beaten eggs and tilt the pan to spread them.",
      "When the eggs are set, add cheddar to one side and fold."
    ]
  },
  {
    "id": "strawberry-overnight-oats",
    "name": "Strawberry Overnight Oats",
    "ingredients": [
      "oats",
      "milk",
      "yogurt",
      "strawberries"
    ],
    "ingredientList": [
      "½ cup rolled oats",
      "½ cup milk",
      "¼ cup plain yogurt",
      "½ cup strawberries"
    ],
    "ingredientRequirements": [
      {
        "key": "oats",
        "label": "½ cup rolled oats"
      },
      {
        "key": "milk",
        "label": "½ cup milk"
      },
      {
        "key": "yogurt",
        "label": "¼ cup plain yogurt"
      },
      {
        "key": "strawberries",
        "label": "½ cup strawberries"
      }
    ],
    "timeMinutes": 5,
    "equipment": "none",
    "equipmentLabel": "Fridge",
    "panNote": "5 min prep + 6 hr chilling",
    "steps": [
      "Mix oats, milk, and yogurt in a covered bowl.",
      "Refrigerate overnight or at least 6 hours.",
      "Slice the strawberries over the top."
    ]
  },
  {
    "id": "egg-in-a-hole-toast",
    "name": "Egg-in-a-Hole Toast",
    "ingredients": [
      "egg",
      "bread",
      "butter"
    ],
    "ingredientList": [
      "1 egg",
      "1 slice bread",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "bread",
        "label": "1 slice bread"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 8,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Tear a wide hole in the bread.",
      "Melt the butter, add the bread and its center, then crack the egg into the hole.",
      "Cook over medium-low heat, flipping once, until the egg is set."
    ]
  },
  {
    "id": "breakfast-potato-hash",
    "name": "Breakfast Potato Hash",
    "ingredients": [
      "potato",
      "bell pepper",
      "onion",
      "egg",
      "oil"
    ],
    "ingredientList": [
      "1 small potato",
      "¼ bell pepper",
      "¼ onion",
      "1 egg",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 small potato"
      },
      {
        "key": "bell pepper",
        "label": "¼ bell pepper"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "requiredEquipment": [
      "microwave",
      "frying-pan"
    ],
    "equipmentLabel": "Microwave + frying pan",
    "steps": [
      "Dice the potato.",
      "Microwave it covered loosely with a splash of water for 3–5 minutes until tender.",
      "Drain, then brown with chopped pepper and onion in oil.",
      "Stir in the egg until set."
    ]
  },
  {
    "id": "banana-french-toast",
    "name": "Banana French Toast",
    "ingredients": [
      "bread",
      "banana",
      "egg",
      "milk",
      "butter"
    ],
    "ingredientList": [
      "2 slices bread",
      "½ ripe banana",
      "1 egg",
      "2 tbsp milk",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "banana",
        "label": "½ ripe banana"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "milk",
        "label": "2 tbsp milk"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Mash the banana until smooth and whisk with egg and milk.",
      "Dip the bread briefly on both sides.",
      "Cook in butter over medium-low heat until golden and set through the middle."
    ]
  },
  {
    "id": "savory-pea-and-cheddar-oats",
    "name": "Savory Pea & Cheddar Oats",
    "ingredients": [
      "oats",
      "peas",
      "cheddar",
      "black pepper"
    ],
    "ingredientList": [
      "½ cup rolled oats",
      "¼ cup frozen peas",
      "¼ cup shredded cheddar",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "oats",
        "label": "½ cup rolled oats"
      },
      {
        "key": "peas",
        "label": "¼ cup frozen peas"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 10,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer oats and peas in 1 cup water for 5–7 minutes, stirring.",
      "When the peas are cooked, take off the heat and stir in cheddar and pepper."
    ]
  },
  {
    "id": "lemon-avocado-toast",
    "name": "Lemon Avocado Toast",
    "ingredients": [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    "ingredientList": [
      "2 slices bread",
      "½ avocado",
      "1 tsp lemon juice",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "avocado",
        "label": "½ avocado"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 7,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Toast the bread in a dry pan.",
      "Mash avocado with lemon juice and salt, then spread over both slices."
    ]
  },
  {
    "id": "skillet-tuna-melt",
    "name": "Skillet Tuna Melt",
    "ingredients": [
      "bread",
      "tuna",
      "yogurt",
      "cheddar",
      "butter"
    ],
    "ingredientList": [
      "2 slices bread",
      "⅓ cup canned tuna",
      "1 tbsp plain yogurt",
      "¼ cup shredded cheddar",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Mix tuna and yogurt.",
      "Sandwich with cheddar, butter the outside of the bread, and grill over medium-low heat until both sides are golden and the cheese melts."
    ]
  },
  {
    "id": "cucumber-yogurt-sandwich",
    "name": "Cucumber Yogurt Sandwich",
    "ingredients": [
      "bread",
      "cucumber",
      "yogurt",
      "black pepper"
    ],
    "ingredientList": [
      "2 slices bread",
      "⅓ cucumber",
      "2 tbsp thick plain yogurt",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "cucumber",
        "label": "⅓ cucumber"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp thick plain yogurt"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 5,
    "equipment": "none",
    "equipmentLabel": "No heat needed",
    "steps": [
      "Slice the cucumber thinly and pat dry.",
      "Spread yogurt on the bread, add cucumber and pepper, and close the sandwich."
    ]
  },
  {
    "id": "tomato-mozzarella-toasts",
    "name": "Tomato Mozzarella Toasts",
    "ingredients": [
      "bread",
      "tomato",
      "mozzarella",
      "oil"
    ],
    "ingredientList": [
      "2 slices bread",
      "½ tomato",
      "¼ cup shredded mozzarella",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "tomato",
        "label": "½ tomato"
      },
      {
        "key": "mozzarella",
        "label": "¼ cup shredded mozzarella"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "panNote": "Uses frying pan with lid",
    "steps": [
      "Toast one side of the bread in oil and flip.",
      "Top with thin tomato slices and mozzarella.",
      "Cover over low heat until melted."
    ]
  },
  {
    "id": "apple-cheddar-grilled-cheese",
    "name": "Apple Cheddar Grilled Cheese",
    "ingredients": [
      "bread",
      "apple",
      "cheddar",
      "butter"
    ],
    "ingredientList": [
      "2 slices bread",
      "¼ apple",
      "¼ cup shredded cheddar",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "apple",
        "label": "¼ apple"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Slice apple thinly.",
      "Sandwich it between two layers of cheddar.",
      "Butter the outside and grill over medium-low heat until golden on both sides."
    ]
  },
  {
    "id": "lemony-smashed-chickpea-sandwich",
    "name": "Lemony Smashed Chickpea Sandwich",
    "ingredients": [
      "bread",
      "chickpeas",
      "yogurt",
      "lemon juice",
      "cucumber"
    ],
    "ingredientList": [
      "2 slices bread",
      "½ cup canned chickpeas",
      "1 tbsp plain yogurt",
      "1 tsp lemon juice",
      "¼ cucumber"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "cucumber",
        "label": "¼ cucumber"
      }
    ],
    "timeMinutes": 7,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Mash chickpeas with yogurt and lemon juice, leaving some texture.",
      "Spread on bread, add sliced cucumber, and close."
    ]
  },
  {
    "id": "ham-and-egg-breakfast-sandwich",
    "name": "Ham & Egg Breakfast Sandwich",
    "ingredients": [
      "bread",
      "egg",
      "ham",
      "butter"
    ],
    "ingredientList": [
      "2 slices bread",
      "1 egg",
      "2 slices ham",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "ham",
        "label": "2 slices ham"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Toast the bread and warm the ham in the pan.",
      "Melt butter, add the beaten egg, and fold it as it sets to fit the bread.",
      "Stack and serve."
    ]
  },
  {
    "id": "strawberry-peanut-butter-toast",
    "name": "Strawberry Peanut Butter Toast",
    "ingredients": [
      "bread",
      "peanut butter",
      "strawberries"
    ],
    "ingredientList": [
      "2 slices bread",
      "2 tbsp peanut butter",
      "½ cup strawberries"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "peanut butter",
        "label": "2 tbsp peanut butter"
      },
      {
        "key": "strawberries",
        "label": "½ cup strawberries"
      }
    ],
    "timeMinutes": 6,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Toast bread in a dry pan.",
      "Spread with peanut butter.",
      "Mash half the berries over the top and finish with the remaining sliced berries."
    ]
  },
  {
    "id": "white-bean-style-chickpea-and-garlic-toast",
    "name": "White Bean-Style Chickpea & Garlic Toast",
    "ingredients": [
      "bread",
      "chickpeas",
      "garlic",
      "oil",
      "lemon juice"
    ],
    "ingredientList": [
      "2 slices bread",
      "½ cup canned chickpeas",
      "1 garlic clove",
      "1 tsp oil",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Toast the bread and set aside.",
      "Soften minced garlic in oil, add chickpeas and 2 tbsp water, and mash over low heat until creamy.",
      "Finish with lemon and spoon onto toast."
    ]
  },
  {
    "id": "pepper-and-onion-pizza-toast",
    "name": "Pepper & Onion Pizza Toast",
    "ingredients": [
      "bread",
      "bell pepper",
      "onion",
      "tomato sauce",
      "mozzarella",
      "oil"
    ],
    "ingredientList": [
      "2 slices bread",
      "¼ bell pepper",
      "¼ onion",
      "2 tbsp tomato sauce",
      "¼ cup shredded mozzarella",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "bread",
        "label": "2 slices bread"
      },
      {
        "key": "bell pepper",
        "label": "¼ bell pepper"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "tomato sauce",
        "label": "2 tbsp tomato sauce"
      },
      {
        "key": "mozzarella",
        "label": "¼ cup shredded mozzarella"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "panNote": "Uses frying pan with lid",
    "steps": [
      "Soften thinly sliced pepper and onion in oil and set aside.",
      "Toast one side of the bread, flip, and top with sauce, vegetables, and cheese.",
      "Cover on low until melted."
    ]
  },
  {
    "id": "black-bean-quesadilla",
    "name": "Black Bean Quesadilla",
    "ingredients": [
      "tortilla",
      "black beans",
      "cheddar"
    ],
    "ingredientList": [
      "1 large tortilla",
      "⅓ cup canned black beans",
      "¼ cup shredded cheddar"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "black beans",
        "label": "⅓ cup canned black beans"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Lightly mash the beans over half the tortilla, add cheddar, and fold.",
      "Toast in a dry pan over medium-low heat for 2–3 minutes per side."
    ]
  },
  {
    "id": "egg-and-avocado-breakfast-tacos",
    "name": "Egg & Avocado Breakfast Tacos",
    "ingredients": [
      "tortilla",
      "egg",
      "avocado",
      "butter",
      "lime juice"
    ],
    "ingredientList": [
      "2 small tortillas",
      "2 eggs",
      "½ avocado",
      "1 tsp butter",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "2 small tortillas"
      },
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "avocado",
        "label": "½ avocado"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Warm tortillas and set aside.",
      "Scramble eggs in butter until set.",
      "Divide between tortillas and top with avocado slices and lime juice."
    ]
  },
  {
    "id": "crunchy-tuna-cabbage-wrap",
    "name": "Crunchy Tuna Cabbage Wrap",
    "ingredients": [
      "tortilla",
      "tuna",
      "cabbage",
      "yogurt",
      "lemon juice"
    ],
    "ingredientList": [
      "1 large tortilla",
      "⅓ cup canned tuna",
      "½ cup shredded cabbage",
      "1 tbsp plain yogurt",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "cabbage",
        "label": "½ cup shredded cabbage"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 7,
    "equipment": "none",
    "equipmentLabel": "No heat needed",
    "steps": [
      "Mix tuna with yogurt and lemon.",
      "Place on the tortilla with cabbage, fold in the sides, and roll tightly."
    ]
  },
  {
    "id": "sweet-potato-and-bean-tacos",
    "name": "Sweet Potato & Bean Tacos",
    "ingredients": [
      "sweet potato",
      "black beans",
      "tortilla",
      "lime juice"
    ],
    "ingredientList": [
      "1 small sweet potato",
      "⅓ cup canned black beans",
      "2 small tortillas",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "sweet potato",
        "label": "1 small sweet potato"
      },
      {
        "key": "black beans",
        "label": "⅓ cup canned black beans"
      },
      {
        "key": "tortilla",
        "label": "2 small tortillas"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 15,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce the potato and microwave until tender, about 4–7 minutes.",
      "Split and mash the flesh.",
      "Warm beans and tortillas separately, then fill and finish with lime."
    ]
  },
  {
    "id": "chicken-pepper-fajita-wrap",
    "name": "Chicken Pepper Fajita Wrap",
    "ingredients": [
      "tortilla",
      "chicken",
      "bell pepper",
      "onion",
      "oil",
      "lime juice"
    ],
    "ingredientList": [
      "1 large tortilla",
      "½ cup cooked chicken",
      "½ bell pepper",
      "¼ onion",
      "1 tsp oil",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "bell pepper",
        "label": "½ bell pepper"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Slice pepper and onion and sauté in oil until soft.",
      "Add shredded chicken and a splash of water.",
      "Heat through, squeeze over lime, and roll in the warmed tortilla."
    ]
  },
  {
    "id": "peanut-tofu-slaw-wrap",
    "name": "Peanut Tofu Slaw Wrap",
    "ingredients": [
      "tortilla",
      "tofu",
      "cabbage",
      "peanut butter",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "1 large tortilla",
      "3 oz firm tofu",
      "½ cup shredded cabbage",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "tofu",
        "label": "3 oz firm tofu"
      },
      {
        "key": "cabbage",
        "label": "½ cup shredded cabbage"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Pat tofu dry, cut into strips, and brown in oil.",
      "Thin peanut butter and soy sauce with warm water.",
      "Toss with cabbage and wrap with the tofu."
    ]
  },
  {
    "id": "spinach-pizza-quesadilla",
    "name": "Spinach Pizza Quesadilla",
    "ingredients": [
      "tortilla",
      "spinach",
      "tomato sauce",
      "mozzarella"
    ],
    "ingredientList": [
      "1 large tortilla",
      "½ cup spinach",
      "2 tbsp tomato sauce",
      "¼ cup shredded mozzarella"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "spinach",
        "label": "½ cup spinach"
      },
      {
        "key": "tomato sauce",
        "label": "2 tbsp tomato sauce"
      },
      {
        "key": "mozzarella",
        "label": "¼ cup shredded mozzarella"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Wilt spinach in the pan with a splash of water and squeeze dry.",
      "Fill half the tortilla with sauce, spinach, and mozzarella.",
      "Fold and toast on both sides."
    ]
  },
  {
    "id": "ham-and-cucumber-pinwheels",
    "name": "Ham & Cucumber Pinwheels",
    "ingredients": [
      "tortilla",
      "ham",
      "cucumber",
      "yogurt"
    ],
    "ingredientList": [
      "1 large tortilla",
      "2 slices ham",
      "¼ cucumber",
      "2 tbsp thick plain yogurt"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 large tortilla"
      },
      {
        "key": "ham",
        "label": "2 slices ham"
      },
      {
        "key": "cucumber",
        "label": "¼ cucumber"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp thick plain yogurt"
      }
    ],
    "timeMinutes": 6,
    "equipment": "none",
    "equipmentLabel": "No heat needed",
    "steps": [
      "Cut cucumber into thin sticks.",
      "Spread yogurt over the tortilla, add ham and cucumber, and roll tightly.",
      "Slice crosswise into pinwheels."
    ]
  },
  {
    "id": "corn-and-cheddar-tacos",
    "name": "Corn & Cheddar Tacos",
    "ingredients": [
      "corn",
      "tortilla",
      "cheddar",
      "butter",
      "lime juice"
    ],
    "ingredientList": [
      "½ cup frozen corn",
      "2 small tortillas",
      "¼ cup shredded cheddar",
      "1 tsp butter",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "corn",
        "label": "½ cup frozen corn"
      },
      {
        "key": "tortilla",
        "label": "2 small tortillas"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cook corn in butter until hot and lightly browned.",
      "Sprinkle cheddar onto tortillas in the pan.",
      "Once melted, add corn and lime and fold."
    ]
  },
  {
    "id": "warm-banana-peanut-butter-foldover",
    "name": "Warm Banana Peanut Butter Foldover",
    "ingredients": [
      "tortilla",
      "banana",
      "peanut butter"
    ],
    "ingredientList": [
      "1 tortilla",
      "1 banana",
      "1 tbsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 tortilla"
      },
      {
        "key": "banana",
        "label": "1 banana"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      }
    ],
    "timeMinutes": 8,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Spread peanut butter on half the tortilla and cover with thin banana slices.",
      "Fold and toast in a dry pan until crisp outside and warm inside."
    ]
  },
  {
    "id": "egg-and-pea-fried-rice",
    "name": "Egg & Pea Fried Rice",
    "ingredients": [
      "rice",
      "egg",
      "peas",
      "oil",
      "soy sauce"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "1 egg",
      "⅓ cup frozen peas",
      "1 tsp oil",
      "1 tsp soy sauce"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "peas",
        "label": "⅓ cup frozen peas"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cook peas in oil with a splash of water until hot.",
      "Push aside and scramble the egg until set.",
      "Add rice and soy sauce and stir-fry until steaming throughout."
    ]
  },
  {
    "id": "lime-black-bean-rice-bowl",
    "name": "Lime Black Bean Rice Bowl",
    "ingredients": [
      "rice",
      "black beans",
      "tomato",
      "avocado",
      "lime juice"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "½ cup canned black beans",
      "½ tomato",
      "¼ avocado",
      "2 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "black beans",
        "label": "½ cup canned black beans"
      },
      {
        "key": "tomato",
        "label": "½ tomato"
      },
      {
        "key": "avocado",
        "label": "¼ avocado"
      },
      {
        "key": "lime juice",
        "label": "2 tsp lime juice"
      }
    ],
    "timeMinutes": 10,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Microwave rice and beans with a splash of water until steaming.",
      "Top with diced tomato and avocado, then add lime juice."
    ]
  },
  {
    "id": "peanut-broccoli-rice-bowl",
    "name": "Peanut Broccoli Rice Bowl",
    "ingredients": [
      "rice",
      "broccoli",
      "peanut butter",
      "soy sauce",
      "lime juice"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "1 cup small broccoli florets",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "broccoli",
        "label": "1 cup small broccoli florets"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Microwave broccoli loosely covered with water until tender, then drain.",
      "Heat rice until steaming.",
      "Whisk peanut butter, soy sauce, lime, and warm water into a dressing and toss together."
    ]
  },
  {
    "id": "tomato-and-egg-rice-bowl",
    "name": "Tomato & Egg Rice Bowl",
    "ingredients": [
      "rice",
      "tomato",
      "egg",
      "oil",
      "salt"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "1 tomato",
      "2 eggs",
      "1 tsp oil",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "tomato",
        "label": "1 tomato"
      },
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Heat rice with a splash of water, then transfer to a bowl.",
      "Soften chopped tomato in oil with salt.",
      "Stir in beaten eggs until set and spoon over rice."
    ]
  },
  {
    "id": "garlic-chicken-and-corn-rice",
    "name": "Garlic Chicken & Corn Rice",
    "ingredients": [
      "rice",
      "chicken",
      "corn",
      "garlic",
      "oil"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "½ cup cooked chicken",
      "⅓ cup frozen corn",
      "1 garlic clove",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "corn",
        "label": "⅓ cup frozen corn"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Soften minced garlic in oil.",
      "Add corn and a splash of water and cook until hot.",
      "Stir in diced chicken and rice and cook until steaming throughout."
    ]
  },
  {
    "id": "crispy-tofu-and-cucumber-rice-bowl",
    "name": "Crispy Tofu & Cucumber Rice Bowl",
    "ingredients": [
      "rice",
      "tofu",
      "cucumber",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "4 oz firm tofu",
      "⅓ cucumber",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "tofu",
        "label": "4 oz firm tofu"
      },
      {
        "key": "cucumber",
        "label": "⅓ cucumber"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Heat rice with a splash of water and transfer to a bowl.",
      "Pat tofu dry, cube, and brown in oil.",
      "Toss with soy sauce and serve over rice with sliced cucumber."
    ]
  },
  {
    "id": "beef-and-cabbage-rice-skillet",
    "name": "Beef & Cabbage Rice Skillet",
    "ingredients": [
      "rice",
      "ground beef",
      "cabbage",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "⅓ cup cooked ground beef",
      "1 cup shredded cabbage",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "ground beef",
        "label": "⅓ cup cooked ground beef"
      },
      {
        "key": "cabbage",
        "label": "1 cup shredded cabbage"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Stir-fry cabbage in oil until its edges brown.",
      "Add beef, rice, soy sauce, and a splash of water.",
      "Stir until steaming throughout."
    ]
  },
  {
    "id": "cheesy-broccoli-rice",
    "name": "Cheesy Broccoli Rice",
    "ingredients": [
      "rice",
      "broccoli",
      "milk",
      "cheddar"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "¾ cup finely chopped broccoli",
      "¼ cup milk",
      "¼ cup shredded cheddar"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "broccoli",
        "label": "¾ cup finely chopped broccoli"
      },
      {
        "key": "milk",
        "label": "¼ cup milk"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      }
    ],
    "timeMinutes": 12,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer broccoli in a little water until tender and drain.",
      "Add milk and rice and stir until hot.",
      "Remove from heat and fold in cheddar."
    ]
  },
  {
    "id": "lemon-tuna-and-spinach-rice",
    "name": "Lemon Tuna & Spinach Rice",
    "ingredients": [
      "rice",
      "tuna",
      "spinach",
      "lemon juice",
      "butter"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "⅓ cup canned tuna",
      "1 cup spinach",
      "2 tsp lemon juice",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 10,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Wilt spinach in butter.",
      "Add rice, tuna, and a splash of water.",
      "Cover briefly and heat until steaming.",
      "Fluff and add lemon."
    ]
  },
  {
    "id": "soft-ginger-free-garlic-rice-porridge",
    "name": "Soft Ginger-Free Garlic Rice Porridge",
    "ingredients": [
      "rice",
      "garlic",
      "egg",
      "soy sauce"
    ],
    "ingredientList": [
      "¾ cup cooked rice",
      "1 garlic clove",
      "1 egg",
      "1 tsp soy sauce"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "¾ cup cooked rice"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      }
    ],
    "timeMinutes": 20,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer rice and finely grated garlic in 1½ cups water for 12–15 minutes, stirring and breaking up the grains.",
      "Drizzle in beaten egg while stirring until set.",
      "Add soy sauce."
    ]
  },
  {
    "id": "garlic-butter-spaghetti",
    "name": "Garlic Butter Spaghetti",
    "ingredients": [
      "pasta",
      "garlic",
      "butter",
      "black pepper"
    ],
    "ingredientList": [
      "3 oz dry spaghetti",
      "2 garlic cloves",
      "1 tbsp butter",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry spaghetti"
      },
      {
        "key": "garlic",
        "label": "2 garlic cloves"
      },
      {
        "key": "butter",
        "label": "1 tbsp butter"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Boil spaghetti according to the package.",
      "Reserve a little cooking water and drain.",
      "Soften minced garlic in butter in the pot, then toss with pasta, pepper, and a splash of cooking water."
    ]
  },
  {
    "id": "tomato-mozzarella-pasta",
    "name": "Tomato Mozzarella Pasta",
    "ingredients": [
      "pasta",
      "tomato sauce",
      "mozzarella"
    ],
    "ingredientList": [
      "3 oz dry pasta",
      "½ cup tomato sauce",
      "¼ cup shredded mozzarella"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry pasta"
      },
      {
        "key": "tomato sauce",
        "label": "½ cup tomato sauce"
      },
      {
        "key": "mozzarella",
        "label": "¼ cup shredded mozzarella"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook and drain pasta.",
      "Warm sauce in the pot, stir in pasta, and remove from heat.",
      "Fold in mozzarella just before serving."
    ]
  },
  {
    "id": "creamy-pea-and-cheddar-macaroni",
    "name": "Creamy Pea & Cheddar Macaroni",
    "ingredients": [
      "pasta",
      "peas",
      "milk",
      "cheddar"
    ],
    "ingredientList": [
      "3 oz dry macaroni",
      "⅓ cup frozen peas",
      "¼ cup milk",
      "¼ cup shredded cheddar"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry macaroni"
      },
      {
        "key": "peas",
        "label": "⅓ cup frozen peas"
      },
      {
        "key": "milk",
        "label": "¼ cup milk"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook macaroni, adding peas for the final few minutes.",
      "Drain when both are tender.",
      "Return to low heat with milk, then remove from heat and stir in cheddar."
    ]
  },
  {
    "id": "lemon-tuna-pasta",
    "name": "Lemon Tuna Pasta",
    "ingredients": [
      "pasta",
      "tuna",
      "lemon juice",
      "oil",
      "black pepper"
    ],
    "ingredientList": [
      "3 oz dry pasta",
      "⅓ cup canned tuna",
      "2 tsp lemon juice",
      "1 tsp oil",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry pasta"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook pasta and reserve a splash of cooking water before draining.",
      "Toss warm pasta with flaked tuna, lemon, oil, pepper, and enough cooking water to coat."
    ]
  },
  {
    "id": "broccoli-garlic-pasta",
    "name": "Broccoli Garlic Pasta",
    "ingredients": [
      "pasta",
      "broccoli",
      "garlic",
      "butter"
    ],
    "ingredientList": [
      "3 oz dry pasta",
      "1 cup small broccoli florets",
      "1 garlic clove",
      "1 tbsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry pasta"
      },
      {
        "key": "broccoli",
        "label": "1 cup small broccoli florets"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "butter",
        "label": "1 tbsp butter"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook pasta and add broccoli for the last 3–4 minutes.",
      "Drain.",
      "Soften minced garlic in butter in the pot and toss with broccoli and pasta, crushing a few florets into the sauce."
    ]
  },
  {
    "id": "peanut-lime-ramen",
    "name": "Peanut Lime Ramen",
    "ingredients": [
      "instant ramen",
      "peanut butter",
      "soy sauce",
      "lime juice",
      "carrot"
    ],
    "ingredientList": [
      "1 block instant ramen",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "2 tsp lime juice",
      "½ carrot"
    ],
    "ingredientRequirements": [
      {
        "key": "instant ramen",
        "label": "1 block instant ramen"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "lime juice",
        "label": "2 tsp lime juice"
      },
      {
        "key": "carrot",
        "label": "½ carrot"
      }
    ],
    "timeMinutes": 10,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cut carrot into thin ribbons.",
      "Boil noodles and carrot according to noodle timing, without the seasoning packet.",
      "Thin peanut butter, soy sauce, and lime with cooking water, drain noodles, and toss."
    ]
  },
  {
    "id": "cabbage-and-egg-noodle-soup",
    "name": "Cabbage & Egg Noodle Soup",
    "ingredients": [
      "instant ramen",
      "cabbage",
      "egg",
      "soy sauce"
    ],
    "ingredientList": [
      "1 block instant ramen",
      "1 cup shredded cabbage",
      "1 egg",
      "1 tsp soy sauce"
    ],
    "ingredientRequirements": [
      {
        "key": "instant ramen",
        "label": "1 block instant ramen"
      },
      {
        "key": "cabbage",
        "label": "1 cup shredded cabbage"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      }
    ],
    "timeMinutes": 12,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer cabbage in 2 cups water for 3 minutes.",
      "Add noodles without the seasoning packet.",
      "When tender, drizzle in beaten egg while stirring.",
      "Cook until ribbons set and add soy sauce."
    ]
  },
  {
    "id": "quick-beef-pasta",
    "name": "Quick Beef Pasta",
    "ingredients": [
      "pasta",
      "ground beef",
      "tomato sauce",
      "onion",
      "oil"
    ],
    "ingredientList": [
      "3 oz dry pasta",
      "⅓ cup cooked ground beef",
      "½ cup tomato sauce",
      "¼ onion",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry pasta"
      },
      {
        "key": "ground beef",
        "label": "⅓ cup cooked ground beef"
      },
      {
        "key": "tomato sauce",
        "label": "½ cup tomato sauce"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 20,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook and drain pasta.",
      "In the same pot, soften finely diced onion in oil.",
      "Add beef and sauce and simmer until hot, then fold in pasta."
    ]
  },
  {
    "id": "chicken-spinach-yogurt-pasta",
    "name": "Chicken Spinach Yogurt Pasta",
    "ingredients": [
      "pasta",
      "chicken",
      "spinach",
      "yogurt",
      "lemon juice"
    ],
    "ingredientList": [
      "3 oz dry pasta",
      "½ cup cooked chicken",
      "1 cup spinach",
      "2 tbsp plain yogurt",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "pasta",
        "label": "3 oz dry pasta"
      },
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 20,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook pasta, reserve some water, and drain.",
      "Heat chicken and spinach with a splash of water until steaming.",
      "Off heat, stir yogurt and lemon into the pasta, then combine."
    ]
  },
  {
    "id": "chilled-cucumber-peanut-noodles",
    "name": "Chilled Cucumber Peanut Noodles",
    "ingredients": [
      "instant ramen",
      "cucumber",
      "peanut butter",
      "soy sauce",
      "lemon juice"
    ],
    "ingredientList": [
      "1 block instant ramen",
      "⅓ cucumber",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "instant ramen",
        "label": "1 block instant ramen"
      },
      {
        "key": "cucumber",
        "label": "⅓ cucumber"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cook noodles without the seasoning packet, rinse cold, and drain.",
      "Mix peanut butter, soy sauce, and lemon with a little water.",
      "Toss with noodles and thin cucumber strips."
    ]
  },
  {
    "id": "cheddar-potato",
    "name": "Cheddar Potato",
    "ingredients": [
      "potato",
      "cheddar",
      "yogurt"
    ],
    "ingredientList": [
      "1 medium potato",
      "¼ cup shredded cheddar",
      "1 tbsp plain yogurt"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 medium potato"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      }
    ],
    "timeMinutes": 12,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce potato and microwave for 5–8 minutes, turning halfway, until tender.",
      "Split, fluff the center, and add cheddar.",
      "Heat briefly to melt and top with yogurt."
    ]
  },
  {
    "id": "tuna-cucumber-potato",
    "name": "Tuna Cucumber Potato",
    "ingredients": [
      "potato",
      "tuna",
      "cucumber",
      "yogurt",
      "lemon juice"
    ],
    "ingredientList": [
      "1 medium potato",
      "⅓ cup canned tuna",
      "¼ cucumber",
      "1 tbsp plain yogurt",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 medium potato"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "cucumber",
        "label": "¼ cucumber"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce and microwave potato until tender.",
      "Mix tuna with diced cucumber, yogurt, and lemon.",
      "Split the hot potato and spoon the cool filling inside."
    ]
  },
  {
    "id": "sweet-potato-peanut-mash",
    "name": "Sweet Potato Peanut Mash",
    "ingredients": [
      "sweet potato",
      "peanut butter",
      "milk",
      "salt"
    ],
    "ingredientList": [
      "1 medium sweet potato",
      "1 tbsp peanut butter",
      "2 tbsp milk",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "sweet potato",
        "label": "1 medium sweet potato"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "milk",
        "label": "2 tbsp milk"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 12,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce and microwave sweet potato until soft, turning halfway.",
      "Scoop the flesh into a bowl and mash with peanut butter, milk, and salt."
    ]
  },
  {
    "id": "crispy-potato-and-onion-cakes",
    "name": "Crispy Potato & Onion Cakes",
    "ingredients": [
      "potato",
      "onion",
      "egg",
      "flour",
      "oil"
    ],
    "ingredientList": [
      "1 medium potato",
      "¼ onion",
      "1 egg",
      "1 tbsp flour",
      "2 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 medium potato"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "flour",
        "label": "1 tbsp flour"
      },
      {
        "key": "oil",
        "label": "2 tsp oil"
      }
    ],
    "timeMinutes": 20,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Coarsely grate potato and onion and squeeze dry.",
      "Mix with egg and flour.",
      "Flatten into four thin patties and fry over medium heat for 4–5 minutes per side until cooked through."
    ]
  },
  {
    "id": "broccoli-cheddar-stuffed-potato",
    "name": "Broccoli Cheddar Stuffed Potato",
    "ingredients": [
      "potato",
      "broccoli",
      "cheddar",
      "milk"
    ],
    "ingredientList": [
      "1 medium potato",
      "½ cup chopped broccoli",
      "¼ cup shredded cheddar",
      "1 tbsp milk"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 medium potato"
      },
      {
        "key": "broccoli",
        "label": "½ cup chopped broccoli"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "milk",
        "label": "1 tbsp milk"
      }
    ],
    "timeMinutes": 15,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce and microwave potato until tender.",
      "Separately steam broccoli in a loosely covered bowl with a splash of water.",
      "Mash potato flesh with milk, broccoli, and cheddar, refill the skin, and heat briefly."
    ]
  },
  {
    "id": "sweet-potato-and-chickpea-skillet",
    "name": "Sweet Potato & Chickpea Skillet",
    "ingredients": [
      "sweet potato",
      "chickpeas",
      "spinach",
      "oil",
      "lemon juice"
    ],
    "ingredientList": [
      "1 small sweet potato",
      "½ cup canned chickpeas",
      "1 cup spinach",
      "1 tsp oil",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "sweet potato",
        "label": "1 small sweet potato"
      },
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "requiredEquipment": [
      "microwave",
      "frying-pan"
    ],
    "equipmentLabel": "Microwave + frying pan",
    "steps": [
      "Dice sweet potato and microwave with a splash of water until tender.",
      "Drain and brown in oil with chickpeas.",
      "Fold in spinach until wilted and finish with lemon."
    ]
  },
  {
    "id": "garlic-mashed-potatoes",
    "name": "Garlic Mashed Potatoes",
    "ingredients": [
      "potato",
      "garlic",
      "milk",
      "butter",
      "salt"
    ],
    "ingredientList": [
      "1 large potato",
      "1 garlic clove",
      "2 tbsp milk",
      "1 tsp butter",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 large potato"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "milk",
        "label": "2 tbsp milk"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 22,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Cut potato into small cubes.",
      "Cover potato and peeled garlic with water and simmer until fork-tender.",
      "Drain well and mash together with milk, butter, and salt."
    ]
  },
  {
    "id": "cabbage-and-potato-mash",
    "name": "Cabbage & Potato Mash",
    "ingredients": [
      "potato",
      "cabbage",
      "milk",
      "butter",
      "black pepper"
    ],
    "ingredientList": [
      "1 medium potato",
      "1 cup finely shredded cabbage",
      "2 tbsp milk",
      "1 tsp butter",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 medium potato"
      },
      {
        "key": "cabbage",
        "label": "1 cup finely shredded cabbage"
      },
      {
        "key": "milk",
        "label": "2 tbsp milk"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 25,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Boil cubed potato until almost tender.",
      "Add cabbage for the last 4 minutes.",
      "Drain, mash roughly with milk and butter, and sprinkle with pepper."
    ]
  },
  {
    "id": "sweet-potato-yogurt-breakfast-boat",
    "name": "Sweet Potato Yogurt Breakfast Boat",
    "ingredients": [
      "sweet potato",
      "yogurt",
      "blueberries",
      "peanut butter"
    ],
    "ingredientList": [
      "1 small sweet potato",
      "¼ cup plain yogurt",
      "¼ cup blueberries",
      "1 tsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "sweet potato",
        "label": "1 small sweet potato"
      },
      {
        "key": "yogurt",
        "label": "¼ cup plain yogurt"
      },
      {
        "key": "blueberries",
        "label": "¼ cup blueberries"
      },
      {
        "key": "peanut butter",
        "label": "1 tsp peanut butter"
      }
    ],
    "timeMinutes": 12,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Pierce and microwave sweet potato until soft.",
      "Split lengthwise and let cool slightly.",
      "Top with yogurt, berries, and small dollops of peanut butter."
    ]
  },
  {
    "id": "potato-and-corn-chowder",
    "name": "Potato & Corn Chowder",
    "ingredients": [
      "potato",
      "corn",
      "onion",
      "milk",
      "butter"
    ],
    "ingredientList": [
      "1 small potato",
      "½ cup frozen corn",
      "¼ onion",
      "½ cup milk",
      "1 tsp butter"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 small potato"
      },
      {
        "key": "corn",
        "label": "½ cup frozen corn"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "milk",
        "label": "½ cup milk"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      }
    ],
    "timeMinutes": 25,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften diced onion in butter.",
      "Add finely diced potato and ¾ cup water.",
      "Simmer until tender.",
      "Mash some potato in the pot, add corn and milk, and heat gently until corn is cooked."
    ]
  },
  {
    "id": "tomato-chickpea-stew",
    "name": "Tomato Chickpea Stew",
    "ingredients": [
      "chickpeas",
      "tomato sauce",
      "onion",
      "garlic",
      "oil"
    ],
    "ingredientList": [
      "½ cup canned chickpeas",
      "½ cup tomato sauce",
      "¼ onion",
      "1 garlic clove",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "tomato sauce",
        "label": "½ cup tomato sauce"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften chopped onion and garlic in oil.",
      "Add chickpeas, sauce, and ¼ cup water.",
      "Simmer 8 minutes and crush a few chickpeas to thicken."
    ]
  },
  {
    "id": "carrot-and-red-lentil-soup",
    "name": "Carrot & Red Lentil Soup",
    "ingredients": [
      "lentils",
      "carrot",
      "onion",
      "oil",
      "salt"
    ],
    "ingredientList": [
      "¼ cup dry red lentils",
      "1 carrot",
      "¼ onion",
      "1 tsp oil",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "lentils",
        "label": "¼ cup dry red lentils"
      },
      {
        "key": "carrot",
        "label": "1 carrot"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 25,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften chopped onion in oil.",
      "Add rinsed lentils, grated carrot, salt, and 1½ cups water.",
      "Simmer 15–20 minutes until lentils break down, adding water as needed."
    ]
  },
  {
    "id": "black-bean-and-corn-soup",
    "name": "Black Bean & Corn Soup",
    "ingredients": [
      "black beans",
      "corn",
      "tomato sauce",
      "lime juice"
    ],
    "ingredientList": [
      "½ cup canned black beans",
      "⅓ cup frozen corn",
      "⅓ cup tomato sauce",
      "2 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "black beans",
        "label": "½ cup canned black beans"
      },
      {
        "key": "corn",
        "label": "⅓ cup frozen corn"
      },
      {
        "key": "tomato sauce",
        "label": "⅓ cup tomato sauce"
      },
      {
        "key": "lime juice",
        "label": "2 tsp lime juice"
      }
    ],
    "timeMinutes": 15,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Mash half the beans in the pot.",
      "Add remaining beans, corn, tomato sauce, and ¾ cup water.",
      "Simmer until corn is tender and finish with lime."
    ]
  },
  {
    "id": "chicken-rice-soup",
    "name": "Chicken Rice Soup",
    "ingredients": [
      "chicken",
      "rice",
      "carrot",
      "onion",
      "soy sauce"
    ],
    "ingredientList": [
      "½ cup cooked chicken",
      "½ cup cooked rice",
      "½ carrot",
      "¼ onion",
      "1 tsp soy sauce"
    ],
    "ingredientRequirements": [
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "rice",
        "label": "½ cup cooked rice"
      },
      {
        "key": "carrot",
        "label": "½ carrot"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Thinly slice carrot and onion.",
      "Simmer in 1½ cups water with soy sauce until tender.",
      "Add shredded chicken and rice and simmer until steaming throughout."
    ]
  },
  {
    "id": "tomato-egg-drop-soup",
    "name": "Tomato Egg Drop Soup",
    "ingredients": [
      "tomato",
      "egg",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "1 tomato",
      "1 egg",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "tomato",
        "label": "1 tomato"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 12,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften chopped tomato in oil.",
      "Add 1¼ cups water and soy sauce and simmer for 4 minutes.",
      "Slowly pour in beaten egg while stirring gently and cook until set."
    ]
  },
  {
    "id": "chunky-broccoli-cheddar-soup",
    "name": "Chunky Broccoli Cheddar Soup",
    "ingredients": [
      "broccoli",
      "milk",
      "cheddar",
      "butter",
      "flour"
    ],
    "ingredientList": [
      "1 cup chopped broccoli",
      "½ cup milk",
      "¼ cup shredded cheddar",
      "1 tsp butter",
      "1 tsp flour"
    ],
    "ingredientRequirements": [
      {
        "key": "broccoli",
        "label": "1 cup chopped broccoli"
      },
      {
        "key": "milk",
        "label": "½ cup milk"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "flour",
        "label": "1 tsp flour"
      }
    ],
    "timeMinutes": 18,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer broccoli in ½ cup water until soft, then mash and set aside with its liquid.",
      "Stir flour into melted butter, gradually add milk, then return broccoli.",
      "Heat gently and stir in cheddar off heat."
    ]
  },
  {
    "id": "spinach-and-lentil-tomato-soup",
    "name": "Spinach & Lentil Tomato Soup",
    "ingredients": [
      "lentils",
      "tomato sauce",
      "spinach",
      "garlic",
      "oil"
    ],
    "ingredientList": [
      "½ cup cooked lentils",
      "½ cup tomato sauce",
      "1 cup spinach",
      "1 garlic clove",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "lentils",
        "label": "½ cup cooked lentils"
      },
      {
        "key": "tomato sauce",
        "label": "½ cup tomato sauce"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften minced garlic in oil.",
      "Add lentils, sauce, and ¾ cup water and simmer for 8 minutes.",
      "Stir in spinach until wilted."
    ]
  },
  {
    "id": "tofu-and-cabbage-soup",
    "name": "Tofu & Cabbage Soup",
    "ingredients": [
      "tofu",
      "cabbage",
      "carrot",
      "soy sauce",
      "garlic"
    ],
    "ingredientList": [
      "4 oz firm tofu",
      "1 cup shredded cabbage",
      "½ carrot",
      "2 tsp soy sauce",
      "1 garlic clove"
    ],
    "ingredientRequirements": [
      {
        "key": "tofu",
        "label": "4 oz firm tofu"
      },
      {
        "key": "cabbage",
        "label": "1 cup shredded cabbage"
      },
      {
        "key": "carrot",
        "label": "½ carrot"
      },
      {
        "key": "soy sauce",
        "label": "2 tsp soy sauce"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      }
    ],
    "timeMinutes": 15,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Simmer thin carrot slices and minced garlic in 1½ cups water with soy sauce.",
      "Add cabbage and tofu cubes and simmer until vegetables are tender and tofu is hot."
    ]
  },
  {
    "id": "green-pea-and-potato-soup",
    "name": "Green Pea & Potato Soup",
    "ingredients": [
      "potato",
      "peas",
      "onion",
      "butter",
      "salt"
    ],
    "ingredientList": [
      "1 small potato",
      "½ cup frozen peas",
      "¼ onion",
      "1 tsp butter",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "potato",
        "label": "1 small potato"
      },
      {
        "key": "peas",
        "label": "½ cup frozen peas"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 22,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften chopped onion in butter.",
      "Add finely diced potato, salt, and 1 cup water.",
      "Simmer until tender, add peas and cook through, then mash roughly."
    ]
  },
  {
    "id": "tomato-bread-soup",
    "name": "Tomato Bread Soup",
    "ingredients": [
      "tomato",
      "tomato sauce",
      "bread",
      "garlic",
      "oil"
    ],
    "ingredientList": [
      "1 tomato",
      "⅓ cup tomato sauce",
      "1 thick slice bread",
      "1 garlic clove",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "tomato",
        "label": "1 tomato"
      },
      {
        "key": "tomato sauce",
        "label": "⅓ cup tomato sauce"
      },
      {
        "key": "bread",
        "label": "1 thick slice bread"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "saucepan",
    "equipmentLabel": "Pot / Saucepan",
    "steps": [
      "Soften minced garlic and chopped tomato in oil.",
      "Add sauce and ½ cup water and simmer for 5 minutes.",
      "Tear in bread and stir over low heat until thick and spoonable."
    ]
  },
  {
    "id": "tomato-skillet-eggs",
    "name": "Tomato Skillet Eggs",
    "ingredients": [
      "egg",
      "tomato sauce",
      "bell pepper",
      "onion",
      "oil"
    ],
    "ingredientList": [
      "2 eggs",
      "½ cup tomato sauce",
      "¼ bell pepper",
      "¼ onion",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "tomato sauce",
        "label": "½ cup tomato sauce"
      },
      {
        "key": "bell pepper",
        "label": "¼ bell pepper"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "panNote": "Uses frying pan with lid",
    "steps": [
      "Soften diced pepper and onion in oil.",
      "Add sauce and a splash of water.",
      "Make two wells, crack in eggs, cover, and simmer gently until whites and yolks are set."
    ]
  },
  {
    "id": "golden-tofu-and-peppers",
    "name": "Golden Tofu & Peppers",
    "ingredients": [
      "tofu",
      "bell pepper",
      "onion",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "5 oz firm tofu",
      "½ bell pepper",
      "¼ onion",
      "2 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "tofu",
        "label": "5 oz firm tofu"
      },
      {
        "key": "bell pepper",
        "label": "½ bell pepper"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "soy sauce",
        "label": "2 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Pat tofu dry, cube, and brown in oil.",
      "Add sliced pepper and onion and stir-fry until tender.",
      "Toss with soy sauce and a splash of water."
    ]
  },
  {
    "id": "garlicky-chicken-and-broccoli",
    "name": "Garlicky Chicken & Broccoli",
    "ingredients": [
      "chicken",
      "broccoli",
      "garlic",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "½ cup cooked chicken",
      "1 cup small broccoli florets",
      "1 garlic clove",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "broccoli",
        "label": "1 cup small broccoli florets"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "panNote": "Uses frying pan with lid",
    "steps": [
      "Soften minced garlic in oil.",
      "Add broccoli and 2 tbsp water, cover, and steam until tender.",
      "Add sliced chicken and soy sauce and stir until steaming."
    ]
  },
  {
    "id": "carrot-and-cabbage-egg-skillet",
    "name": "Carrot & Cabbage Egg Skillet",
    "ingredients": [
      "cabbage",
      "carrot",
      "egg",
      "oil",
      "soy sauce"
    ],
    "ingredientList": [
      "1 cup shredded cabbage",
      "½ carrot",
      "2 eggs",
      "1 tsp oil",
      "1 tsp soy sauce"
    ],
    "ingredientRequirements": [
      {
        "key": "cabbage",
        "label": "1 cup shredded cabbage"
      },
      {
        "key": "carrot",
        "label": "½ carrot"
      },
      {
        "key": "egg",
        "label": "2 eggs"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Stir-fry cabbage and grated carrot in oil until softened.",
      "Push aside and scramble eggs until set.",
      "Fold together with soy sauce."
    ]
  },
  {
    "id": "beef-and-black-bean-taco-skillet",
    "name": "Beef & Black Bean Taco Skillet",
    "ingredients": [
      "ground beef",
      "black beans",
      "tomato",
      "cheddar",
      "lime juice"
    ],
    "ingredientList": [
      "⅓ cup cooked ground beef",
      "½ cup canned black beans",
      "½ tomato",
      "¼ cup shredded cheddar",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "ground beef",
        "label": "⅓ cup cooked ground beef"
      },
      {
        "key": "black beans",
        "label": "½ cup canned black beans"
      },
      {
        "key": "tomato",
        "label": "½ tomato"
      },
      {
        "key": "cheddar",
        "label": "¼ cup shredded cheddar"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cook diced tomato with a splash of water until juicy.",
      "Stir in beef and beans until steaming.",
      "Sprinkle with cheddar, let it melt, and squeeze over lime."
    ]
  },
  {
    "id": "cheesy-corn-fritters",
    "name": "Cheesy Corn Fritters",
    "ingredients": [
      "corn",
      "egg",
      "flour",
      "cheddar",
      "oil"
    ],
    "ingredientList": [
      "½ cup frozen corn",
      "1 egg",
      "2 tbsp flour",
      "2 tbsp shredded cheddar",
      "2 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "corn",
        "label": "½ cup frozen corn"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "flour",
        "label": "2 tbsp flour"
      },
      {
        "key": "cheddar",
        "label": "2 tbsp shredded cheddar"
      },
      {
        "key": "oil",
        "label": "2 tsp oil"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cook corn with a splash of water until hot, then drain and cool slightly.",
      "Mix with egg, flour, and cheddar.",
      "Fry small flattened spoonfuls in oil for 3–4 minutes per side until set."
    ]
  },
  {
    "id": "lemon-chickpea-and-spinach-saut",
    "name": "Lemon Chickpea & Spinach Sauté",
    "ingredients": [
      "chickpeas",
      "spinach",
      "garlic",
      "lemon juice",
      "oil"
    ],
    "ingredientList": [
      "¾ cup canned chickpeas",
      "2 cups spinach",
      "1 garlic clove",
      "2 tsp lemon juice",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "chickpeas",
        "label": "¾ cup canned chickpeas"
      },
      {
        "key": "spinach",
        "label": "2 cups spinach"
      },
      {
        "key": "garlic",
        "label": "1 garlic clove"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Brown drained chickpeas in oil.",
      "Add minced garlic and stir briefly.",
      "Fold in spinach with a splash of water, cook until wilted, and finish with lemon."
    ]
  },
  {
    "id": "cabbage-pancake",
    "name": "Cabbage Pancake",
    "ingredients": [
      "cabbage",
      "egg",
      "flour",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "1 cup finely shredded cabbage",
      "1 egg",
      "3 tbsp flour",
      "1 tsp soy sauce",
      "2 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "cabbage",
        "label": "1 cup finely shredded cabbage"
      },
      {
        "key": "egg",
        "label": "1 egg"
      },
      {
        "key": "flour",
        "label": "3 tbsp flour"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "2 tsp oil"
      }
    ],
    "timeMinutes": 18,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Whisk egg, flour, soy sauce, and 1 tbsp water.",
      "Stir in cabbage.",
      "Divide into two thin pancakes and fry over medium-low heat for 4–5 minutes per side until set."
    ]
  },
  {
    "id": "peanut-lime-chicken-and-carrots",
    "name": "Peanut Lime Chicken & Carrots",
    "ingredients": [
      "chicken",
      "carrot",
      "peanut butter",
      "soy sauce",
      "lime juice",
      "oil"
    ],
    "ingredientList": [
      "½ cup cooked chicken",
      "1 carrot",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "1 tsp lime juice",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "chicken",
        "label": "½ cup cooked chicken"
      },
      {
        "key": "carrot",
        "label": "1 carrot"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cut carrot into thin ribbons and sauté in oil.",
      "Mix peanut butter, soy sauce, lime, and 2 tbsp water.",
      "Add chicken and sauce to the pan and stir until hot, thinning as needed."
    ]
  },
  {
    "id": "broccoli-tofu-scramble",
    "name": "Broccoli Tofu Scramble",
    "ingredients": [
      "tofu",
      "broccoli",
      "onion",
      "soy sauce",
      "oil"
    ],
    "ingredientList": [
      "5 oz firm tofu",
      "¾ cup finely chopped broccoli",
      "¼ onion",
      "1 tsp soy sauce",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "tofu",
        "label": "5 oz firm tofu"
      },
      {
        "key": "broccoli",
        "label": "¾ cup finely chopped broccoli"
      },
      {
        "key": "onion",
        "label": "¼ onion"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 15,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Soften diced onion in oil.",
      "Add broccoli and a splash of water and cook until tender.",
      "Crumble in tofu, add soy sauce, and stir-fry until the excess liquid cooks off."
    ]
  },
  {
    "id": "chickpea-cucumber-tomato-salad",
    "name": "Chickpea Cucumber Tomato Salad",
    "ingredients": [
      "chickpeas",
      "cucumber",
      "tomato",
      "lemon juice",
      "oil"
    ],
    "ingredientList": [
      "½ cup canned chickpeas",
      "⅓ cucumber",
      "1 tomato",
      "2 tsp lemon juice",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "cucumber",
        "label": "⅓ cucumber"
      },
      {
        "key": "tomato",
        "label": "1 tomato"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Dice cucumber and tomato.",
      "Toss with chickpeas, lemon juice, and oil, spooning the tomato juices into the dressing."
    ]
  },
  {
    "id": "apple-carrot-slaw",
    "name": "Apple Carrot Slaw",
    "ingredients": [
      "apple",
      "carrot",
      "cabbage",
      "yogurt",
      "lemon juice"
    ],
    "ingredientList": [
      "½ apple",
      "1 carrot",
      "½ cup shredded cabbage",
      "2 tbsp plain yogurt",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "apple",
        "label": "½ apple"
      },
      {
        "key": "carrot",
        "label": "1 carrot"
      },
      {
        "key": "cabbage",
        "label": "½ cup shredded cabbage"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Grater + bowl · No heat",
    "steps": [
      "Grate apple and carrot.",
      "Mix yogurt and lemon, then toss with the grated produce and cabbage."
    ]
  },
  {
    "id": "tuna-and-white-rice-salad",
    "name": "Tuna & White Rice Salad",
    "ingredients": [
      "rice",
      "tuna",
      "cucumber",
      "yogurt",
      "lemon juice"
    ],
    "ingredientList": [
      "½ cup chilled cooked rice",
      "⅓ cup canned tuna",
      "⅓ cucumber",
      "2 tbsp plain yogurt",
      "1 tsp lemon juice"
    ],
    "ingredientRequirements": [
      {
        "key": "rice",
        "label": "½ cup chilled cooked rice"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "cucumber",
        "label": "⅓ cucumber"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Dice cucumber and flake tuna.",
      "Loosen yogurt with lemon juice and toss everything together, separating any clumps of rice."
    ]
  },
  {
    "id": "black-bean-avocado-salad",
    "name": "Black Bean Avocado Salad",
    "ingredients": [
      "black beans",
      "avocado",
      "tomato",
      "lime juice",
      "salt"
    ],
    "ingredientList": [
      "½ cup canned black beans",
      "½ avocado",
      "½ tomato",
      "2 tsp lime juice",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "black beans",
        "label": "½ cup canned black beans"
      },
      {
        "key": "avocado",
        "label": "½ avocado"
      },
      {
        "key": "tomato",
        "label": "½ tomato"
      },
      {
        "key": "lime juice",
        "label": "2 tsp lime juice"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 7,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Dice avocado and tomato.",
      "Toss beans and tomato with lime and salt, then gently fold in avocado."
    ]
  },
  {
    "id": "grape-and-chicken-yogurt-salad",
    "name": "Grape & Chicken Yogurt Salad",
    "ingredients": [
      "chicken",
      "grapes",
      "yogurt",
      "lemon juice",
      "black pepper"
    ],
    "ingredientList": [
      "½ cup chilled cooked chicken",
      "⅓ cup grapes",
      "2 tbsp plain yogurt",
      "1 tsp lemon juice",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "chicken",
        "label": "½ cup chilled cooked chicken"
      },
      {
        "key": "grapes",
        "label": "⅓ cup grapes"
      },
      {
        "key": "yogurt",
        "label": "2 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Halve grapes and dice chicken.",
      "Stir yogurt, lemon, and pepper together, then fold in chicken and grapes."
    ]
  },
  {
    "id": "cucumber-peanut-slaw",
    "name": "Cucumber Peanut Slaw",
    "ingredients": [
      "cucumber",
      "cabbage",
      "peanut butter",
      "soy sauce",
      "lime juice"
    ],
    "ingredientList": [
      "½ cucumber",
      "¾ cup shredded cabbage",
      "1 tbsp peanut butter",
      "1 tsp soy sauce",
      "1 tsp lime juice"
    ],
    "ingredientRequirements": [
      {
        "key": "cucumber",
        "label": "½ cucumber"
      },
      {
        "key": "cabbage",
        "label": "¾ cup shredded cabbage"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "label": "1 tsp soy sauce"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Cut cucumber into matchsticks.",
      "Whisk peanut butter, soy sauce, and lime with warm water until pourable.",
      "Toss with cucumber and cabbage."
    ]
  },
  {
    "id": "lentil-and-bell-pepper-salad",
    "name": "Lentil & Bell Pepper Salad",
    "ingredients": [
      "lentils",
      "bell pepper",
      "cucumber",
      "lemon juice",
      "oil"
    ],
    "ingredientList": [
      "¾ cup cooked lentils",
      "½ bell pepper",
      "¼ cucumber",
      "2 tsp lemon juice",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "lentils",
        "label": "¾ cup cooked lentils"
      },
      {
        "key": "bell pepper",
        "label": "½ bell pepper"
      },
      {
        "key": "cucumber",
        "label": "¼ cucumber"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Finely dice pepper and cucumber.",
      "Toss with lentils, lemon juice, and oil.",
      "Let stand a couple of minutes so the lentils absorb the dressing."
    ]
  },
  {
    "id": "tomato-mozzarella-salad",
    "name": "Tomato Mozzarella Salad",
    "ingredients": [
      "tomato",
      "mozzarella",
      "oil",
      "lemon juice",
      "black pepper"
    ],
    "ingredientList": [
      "1 tomato",
      "2 oz mozzarella",
      "1 tsp oil",
      "1 tsp lemon juice",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "tomato",
        "label": "1 tomato"
      },
      {
        "key": "mozzarella",
        "label": "2 oz mozzarella"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 6,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Cut tomato and mozzarella into bite-size pieces.",
      "Gently toss with oil and lemon.",
      "Finish with pepper and the juices from the cutting board."
    ]
  },
  {
    "id": "spinach-orange-and-avocado-salad",
    "name": "Spinach, Orange & Avocado Salad",
    "ingredients": [
      "spinach",
      "orange",
      "avocado",
      "oil"
    ],
    "ingredientList": [
      "2 cups spinach",
      "1 orange",
      "½ avocado",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "spinach",
        "label": "2 cups spinach"
      },
      {
        "key": "orange",
        "label": "1 orange"
      },
      {
        "key": "avocado",
        "label": "½ avocado"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Peel and segment the orange over a bowl to catch the juice.",
      "Whisk the juice with oil.",
      "Toss with spinach, orange segments, and sliced avocado."
    ]
  },
  {
    "id": "pear-cheddar-and-chickpea-salad",
    "name": "Pear, Cheddar & Chickpea Salad",
    "ingredients": [
      "pear",
      "cheddar",
      "chickpeas",
      "spinach",
      "lemon juice",
      "oil"
    ],
    "ingredientList": [
      "½ pear",
      "1 oz cheddar",
      "⅓ cup canned chickpeas",
      "1 cup spinach",
      "1 tsp lemon juice",
      "1 tsp oil"
    ],
    "ingredientRequirements": [
      {
        "key": "pear",
        "label": "½ pear"
      },
      {
        "key": "cheddar",
        "label": "1 oz cheddar"
      },
      {
        "key": "chickpeas",
        "label": "⅓ cup canned chickpeas"
      },
      {
        "key": "spinach",
        "label": "1 cup spinach"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      }
    ],
    "timeMinutes": 8,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Thinly slice pear and cube cheddar.",
      "Toss spinach and chickpeas with lemon and oil.",
      "Scatter pear and cheddar over the top."
    ]
  },
  {
    "id": "warm-apple-oat-crumble-cup",
    "name": "Warm Apple Oat Crumble Cup",
    "ingredients": [
      "apple",
      "oats",
      "butter",
      "peanut butter"
    ],
    "ingredientList": [
      "1 apple",
      "2 tbsp rolled oats",
      "1 tsp butter",
      "1 tbsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "apple",
        "label": "1 apple"
      },
      {
        "key": "oats",
        "label": "2 tbsp rolled oats"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      }
    ],
    "timeMinutes": 8,
    "equipment": "microwave",
    "equipmentLabel": "Microwave",
    "steps": [
      "Dice apple and microwave loosely covered with a splash of water until soft.",
      "Mix oats, melted butter, and peanut butter.",
      "Spoon over the apple and microwave another 30 seconds for a soft topping."
    ]
  },
  {
    "id": "strawberry-banana-smoothie",
    "name": "Strawberry Banana Smoothie",
    "ingredients": [
      "banana",
      "strawberries",
      "milk",
      "yogurt"
    ],
    "ingredientList": [
      "1 banana",
      "½ cup strawberries",
      "½ cup milk",
      "¼ cup plain yogurt"
    ],
    "ingredientRequirements": [
      {
        "key": "banana",
        "label": "1 banana"
      },
      {
        "key": "strawberries",
        "label": "½ cup strawberries"
      },
      {
        "key": "milk",
        "label": "½ cup milk"
      },
      {
        "key": "yogurt",
        "label": "¼ cup plain yogurt"
      }
    ],
    "timeMinutes": 5,
    "equipment": "blender",
    "equipmentLabel": "Blender",
    "steps": [
      "Add milk and yogurt to the blender, then the fruit.",
      "Blend until smooth, adding a splash of water if needed."
    ]
  },
  {
    "id": "blueberry-peanut-butter-smoothie",
    "name": "Blueberry Peanut Butter Smoothie",
    "ingredients": [
      "blueberries",
      "banana",
      "peanut butter",
      "milk"
    ],
    "ingredientList": [
      "½ cup blueberries",
      "½ banana",
      "1 tbsp peanut butter",
      "¾ cup milk"
    ],
    "ingredientRequirements": [
      {
        "key": "blueberries",
        "label": "½ cup blueberries"
      },
      {
        "key": "banana",
        "label": "½ banana"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      },
      {
        "key": "milk",
        "label": "¾ cup milk"
      }
    ],
    "timeMinutes": 5,
    "equipment": "blender",
    "equipmentLabel": "Blender",
    "steps": [
      "Blend milk and peanut butter first.",
      "Add berries and banana and blend until smooth."
    ]
  },
  {
    "id": "orange-cream-yogurt-cup",
    "name": "Orange Cream Yogurt Cup",
    "ingredients": [
      "orange",
      "yogurt",
      "banana"
    ],
    "ingredientList": [
      "1 orange",
      "½ cup plain yogurt",
      "½ banana"
    ],
    "ingredientRequirements": [
      {
        "key": "orange",
        "label": "1 orange"
      },
      {
        "key": "yogurt",
        "label": "½ cup plain yogurt"
      },
      {
        "key": "banana",
        "label": "½ banana"
      }
    ],
    "timeMinutes": 6,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Mash banana into yogurt.",
      "Peel and chop the orange over the bowl to catch its juice, then fold the pieces into the yogurt."
    ]
  },
  {
    "id": "pan-softened-pears-with-yogurt",
    "name": "Pan-Softened Pears with Yogurt",
    "ingredients": [
      "pear",
      "butter",
      "yogurt"
    ],
    "ingredientList": [
      "1 pear",
      "1 tsp butter",
      "⅓ cup plain yogurt"
    ],
    "ingredientRequirements": [
      {
        "key": "pear",
        "label": "1 pear"
      },
      {
        "key": "butter",
        "label": "1 tsp butter"
      },
      {
        "key": "yogurt",
        "label": "⅓ cup plain yogurt"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Slice pear thinly and cook in butter over medium-low heat.",
      "Add a splash of water and cook until soft and golden.",
      "Spoon over cool yogurt."
    ]
  },
  {
    "id": "banana-oat-cookies",
    "name": "Banana Oat Cookies",
    "ingredients": [
      "banana",
      "oats",
      "peanut butter"
    ],
    "ingredientList": [
      "1 ripe banana",
      "½ cup rolled oats",
      "1 tbsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "banana",
        "label": "1 ripe banana"
      },
      {
        "key": "oats",
        "label": "½ cup rolled oats"
      },
      {
        "key": "peanut butter",
        "label": "1 tbsp peanut butter"
      }
    ],
    "timeMinutes": 22,
    "equipment": "oven",
    "equipmentLabel": "Oven",
    "steps": [
      "Heat oven to 350°F.",
      "Mash all ingredients together and shape into four flat cookies on a lined baking sheet.",
      "Bake for 12–15 minutes until firm at the edges."
    ]
  },
  {
    "id": "skillet-tortilla-chips-and-avocado-dip",
    "name": "Skillet Tortilla Chips & Avocado Dip",
    "ingredients": [
      "tortilla",
      "avocado",
      "lime juice",
      "oil",
      "salt"
    ],
    "ingredientList": [
      "1 tortilla",
      "½ avocado",
      "1 tsp lime juice",
      "1 tsp oil",
      "1 pinch salt"
    ],
    "ingredientRequirements": [
      {
        "key": "tortilla",
        "label": "1 tortilla"
      },
      {
        "key": "avocado",
        "label": "½ avocado"
      },
      {
        "key": "lime juice",
        "label": "1 tsp lime juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "salt",
        "label": "1 pinch salt"
      }
    ],
    "timeMinutes": 12,
    "equipment": "frying-pan",
    "equipmentLabel": "One frying pan",
    "steps": [
      "Cut tortilla into wedges and toast in oil on both sides until crisp.",
      "Mash avocado with lime and salt.",
      "Serve the warm chips alongside."
    ]
  },
  {
    "id": "lemon-chickpea-dip-and-carrot-sticks",
    "name": "Lemon Chickpea Dip & Carrot Sticks",
    "ingredients": [
      "chickpeas",
      "yogurt",
      "lemon juice",
      "oil",
      "carrot"
    ],
    "ingredientList": [
      "½ cup canned chickpeas",
      "1 tbsp plain yogurt",
      "2 tsp lemon juice",
      "1 tsp oil",
      "1 carrot"
    ],
    "ingredientRequirements": [
      {
        "key": "chickpeas",
        "label": "½ cup canned chickpeas"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "2 tsp lemon juice"
      },
      {
        "key": "oil",
        "label": "1 tsp oil"
      },
      {
        "key": "carrot",
        "label": "1 carrot"
      }
    ],
    "timeMinutes": 10,
    "equipment": "none",
    "equipmentLabel": "Bowl · No heat needed",
    "steps": [
      "Mash chickpeas thoroughly with yogurt, lemon, and oil.",
      "Add water a teaspoon at a time until scoopable.",
      "Cut carrot into sticks for dipping."
    ]
  },
  {
    "id": "mini-cucumber-tuna-boats",
    "name": "Mini Cucumber Tuna Boats",
    "ingredients": [
      "cucumber",
      "tuna",
      "yogurt",
      "lemon juice",
      "black pepper"
    ],
    "ingredientList": [
      "½ cucumber",
      "⅓ cup canned tuna",
      "1 tbsp plain yogurt",
      "1 tsp lemon juice",
      "1 pinch black pepper"
    ],
    "ingredientRequirements": [
      {
        "key": "cucumber",
        "label": "½ cucumber"
      },
      {
        "key": "tuna",
        "label": "⅓ cup canned tuna"
      },
      {
        "key": "yogurt",
        "label": "1 tbsp plain yogurt"
      },
      {
        "key": "lemon juice",
        "label": "1 tsp lemon juice"
      },
      {
        "key": "black pepper",
        "label": "1 pinch black pepper"
      }
    ],
    "timeMinutes": 7,
    "equipment": "none",
    "equipmentLabel": "No heat needed",
    "steps": [
      "Halve cucumber lengthwise and scoop out the seeds.",
      "Mix tuna, yogurt, lemon, and pepper.",
      "Fill the halves and cut into short boats."
    ]
  },
  {
    "id": "strawberry-frozen-yogurt-bark",
    "name": "Strawberry Frozen Yogurt Bark",
    "ingredients": [
      "yogurt",
      "banana",
      "strawberries",
      "peanut butter"
    ],
    "ingredientList": [
      "½ cup thick plain yogurt",
      "½ ripe banana",
      "¼ cup strawberries",
      "1 tsp peanut butter"
    ],
    "ingredientRequirements": [
      {
        "key": "yogurt",
        "label": "½ cup thick plain yogurt"
      },
      {
        "key": "banana",
        "label": "½ ripe banana"
      },
      {
        "key": "strawberries",
        "label": "¼ cup strawberries"
      },
      {
        "key": "peanut butter",
        "label": "1 tsp peanut butter"
      }
    ],
    "timeMinutes": 5,
    "equipment": "none",
    "equipmentLabel": "Freezer",
    "panNote": "5 min prep + 3 hr freezing",
    "steps": [
      "Mash banana into yogurt and spread thinly on a lined freezer-safe plate.",
      "Add thin strawberry slices and dots of peanut butter.",
      "Freeze until firm, about 3 hours, then break into pieces."
    ]
  }
];
