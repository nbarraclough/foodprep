// Recipe data ported from the original page. Edited during the September 2026 audit; see AUDIT.md.
import type { Recipe, Rule, Salad, CookDay, Store, ReheatRow } from "./types";

export const SNACKS: Recipe[] = [
 {
  "id": "scones",
  "name": "Savoury scones, two ways",
  "yield": "24: 12 cheese & chive, 12 bacon & chive (dairy-free)",
  "day": 1,
  "tags": [
   "hand",
   "nz"
  ],
  "pre": [
   "Line 2 trays. Oven 200 °C / 400 °F."
  ],
  "ings": [
   "6 cups (750 g) all-purpose flour",
   "4 Tbsp baking powder",
   "2 tsp salt, 1 tsp black pepper",
   "220 g (2 sticks) cold plant butter, cubed",
   "½ cup chopped chives",
   "Bowl A: 1½ cups (150 g) grated sharp cheddar, 1 tsp mustard powder",
   "Bowl B: 6 slices bacon, cooked and chopped, 1 tsp smoked paprika, 2 scallions, sliced",
   "2½ cups (600 ml) oat milk + 2 tsp vinegar"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      2
     ],
     "t": "whisk"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "rub in until crumbly"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "add chives, split into 2 bowls; cheese in A, bacon in B"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "300 ml milk per bowl, stir with a knife until just combined"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "pat 3 cm thick, cut 12 squares per bowl"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "bake 15–18 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cool on rack"
    }
   ]
  ],
  "freeze": "12 per gallon bag, mark C or NC. 3 months. Or freeze half unbaked on a tray and bake from frozen at 200 °C for 20–22 min.",
  "mw": "30–40 s, wrapped in a paper towel.",
  "af": "160 °C / 325 °F, 5–6 min. Better.",
  "notes": [
   [
    "df",
    "Bowl B is dairy-free. Vinegar in the oat milk does what buttermilk does."
   ]
  ],
  "source": {
   "name": "Edmonds cheese scones",
   "url": "https://edmondscooking.co.nz/recipes/scones-and-scrolls/cheese-scones",
   "note": "doubled, with plant butter and oat milk"
  },
  "audit": [
   "Baking powder doubled to 4 Tbsp (2 tsp per cup of flour, the Edmonds ratio). 2 Tbsp would have given flat scones."
  ]
 },
 {
  "id": "datescones",
  "name": "Date scones",
  "yield": "12",
  "day": 1,
  "tags": [
   "hand",
   "nz",
   "df"
  ],
  "pre": [
   "Line a tray. Oven 200 °C / 400 °F."
  ],
  "ings": [
   "3 cups (375 g) all-purpose flour",
   "2 Tbsp baking powder",
   "2 Tbsp sugar, ½ tsp salt, 1 tsp cinnamon",
   "110 g (1 stick) cold plant butter, cubed",
   "1 cup (150 g) pitted dates, chopped",
   "1¼ cups (300 ml) oat milk + 1 tsp vinegar"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      2
     ],
     "t": "whisk"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "rub in until crumbly"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "stir in"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "stir with a knife until just combined"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "pat 3 cm, cut 12"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "bake 15 min"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "cool on rack"
    }
   ]
  ],
  "freeze": "12 per bag. 3 months.",
  "mw": "30–40 s. Split, plant butter or jam.",
  "af": "160 °C / 325 °F, 5 min.",
  "notes": [],
  "source": {
   "name": "Edmonds date scones",
   "url": "https://edmondscooking.co.nz/recipes/scones-and-scrolls/date-scones",
   "note": "plant butter and oat milk"
  },
  "audit": [
   "Baking powder doubled to 2 Tbsp for the same reason as the savoury scones."
  ]
 },
 {
  "id": "banana",
  "name": "Banana oat muffins",
  "yield": "12",
  "day": 1,
  "tags": [
   "hand",
   "df"
  ],
  "pre": [
   "Line a 12-hole muffin tin. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "3 very ripe bananas (1½ cups mashed)",
   "2 eggs",
   "⅓ cup (80 ml) neutral oil",
   "½ cup (100 g) brown sugar",
   "¼ cup oat milk, 1 tsp vanilla",
   "1½ cups (190 g) all-purpose flour",
   "¾ cup (70 g) rolled oats",
   "1 tsp each baking soda, baking powder, cinnamon; ½ tsp salt",
   "½ cup walnuts or dairy-free choc chips (optional)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "mash"
    },
    {
     "r": [
      5,
      7
     ],
     "t": "whisk"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "whisk"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "stir until just combined"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "fold in"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "fill liners ¾"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "bake 20–22 min"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "cool on rack"
    }
   ]
  ],
  "freeze": "12 per bag. 3 months.",
  "mw": "30–45 s.",
  "af": "150 °C / 300 °F, 5 min.",
  "notes": [
   [
    "tip",
    "Buy the bananas a week early so they are brown-spotted by Day 1."
   ]
  ]
 },
 {
  "id": "cornmuff",
  "name": "Corn, bacon and chive muffins",
  "yield": "12 (cheese in 6)",
  "day": 1,
  "tags": [
   "hand",
   "df"
  ],
  "pre": [
   "Line a 12-hole muffin tin. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "2 cups (250 g) all-purpose flour",
   "1 Tbsp baking powder",
   "1 tsp salt, 1 tsp smoked paprika, ½ tsp pepper",
   "2 eggs",
   "1 cup (240 ml) oat milk",
   "⅓ cup (80 ml) olive oil",
   "1 cup frozen corn, thawed, patted dry",
   "6 slices bacon, cooked, chopped",
   "3 Tbsp chives, 1 scallion, sliced",
   "½ cup grated cheddar (optional, for 6)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      2
     ],
     "t": "whisk"
    },
    {
     "r": [
      3,
      5
     ],
     "t": "whisk"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "combine"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "fold in"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "fill 6 liners"
    },
    {
     "r": [
      9,
      9
     ],
     "t": "stir into the rest, fill 6 more, top with 3 corn kernels"
    }
   ],
   [
    {
     "r": [
      0,
      9
     ],
     "t": "bake 20–22 min"
    }
   ],
   [
    {
     "r": [
      0,
      9
     ],
     "t": "cool on rack"
    }
   ]
  ],
  "freeze": "Bag C and NC separately. 3 months.",
  "mw": "40 s.",
  "af": "160 °C / 325 °F, 5 min.",
  "notes": []
 },
 {
  "id": "bfsand",
  "name": "Breakfast sandwiches",
  "yield": "12 (cheese in 6)",
  "day": 3,
  "tags": [
   "hand"
  ],
  "pre": [
   "Oil a 9×13 in (23×33 cm) pan. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "12 eggs",
   "½ cup oat milk, 1 tsp salt, pepper, 2 Tbsp chives",
   "12 English muffins",
   "12 cooked breakfast sausage patties",
   "6 slices cheddar (optional, for 6)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "whisk, pour into pan"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "split, toast lightly"
    },
    {
     "r": [
      3,
      3
     ],
     "t": "heat per packet"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "bake 20–25 min until set; cool 15 min; cut 12"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "stack: bottom, egg, patty, cheese on 6, top"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "cool 30 min on rack"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "wrap in parchment then foil; write C or NC; bag"
    }
   ]
  ],
  "freeze": "1–2 months.",
  "mw": "Unwrap, put on a paper towel: 60 s, flip, 30–45 s.",
  "af": "175 °C / 350 °F: 8 min in foil, 3–4 min unwrapped.",
  "notes": [
   [
    "tip",
    "Toasting the muffin first and the paper towel under it in the microwave are what stop it going soggy."
   ]
  ],
  "source": {
   "name": "The Kitchn's freezer breakfast sandwiches",
   "url": "https://www.thekitchn.com/how-to-make-freezerfriendly-breakfast-sandwiches-cooking-lessons-from-the-kitchn-215888",
   "note": "sheet-pan egg method; 12 eggs cut into squares instead of 10 eggs cut into rounds"
  }
 },
 {
  "id": "burritos",
  "name": "Breakfast burritos, taco size",
  "yield": "12 (cheese in 6)",
  "day": 3,
  "tags": [
   "hand"
  ],
  "pre": [
   "Sweet potato is roasted on Day 2 with the other roasting. Buy the rotisserie chicken on Saturday 20; it keeps 3–4 days."
  ],
  "ings": [
   "1 large sweet potato, 1 cm dice, 1 Tbsp oil, ½ tsp cumin",
   "1 red bell pepper + 1 onion, diced, 1 Tbsp oil",
   "8 eggs + 2 Tbsp oat milk",
   "2 cups shredded rotisserie chicken",
   "1 can black beans, drained and rinsed",
   "½ cup mild salsa, drained in a sieve",
   "1 tsp cumin, 1 tsp mild chili powder, ½ tsp salt, handful cilantro",
   "¾ cup grated cheddar (optional, for 6)",
   "12 taco-size (8 in) tortillas"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "roast 200 °C / 400 °F 25 min"
    },
    {
     "r": [
      1,
      1
     ],
     "t": "fry 8 min"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "soft scramble"
    },
    {
     "r": [
      8,
      8
     ],
     "t": "microwave 20 s so they roll"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "cool completely"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "mix"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "⅔ cup filling each, cheese on 6, fold ends, roll tight"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "wrap in foil, write C or NC, bag in twos"
    }
   ]
  ],
  "freeze": "2 months.",
  "mw": "Take off foil, wrap in a damp paper towel, 2–3 min, turn once.",
  "af": "180 °C / 350 °F: 12–15 min in foil, 3 min unwrapped. Best.",
  "notes": [
   [
    "tip",
    "Wet filling makes a soggy burrito. Drain the salsa and cool everything first."
   ]
  ],
  "audit": [
   "Eggs cut from 12 to 8. The old filling came to about 10 cups for 12 tortillas that hold 8.",
   "Rotisserie chicken: buy it Saturday 20, since the Day 3 plan has no shopping slot."
  ]
 },
 {
  "id": "meatballs",
  "name": "Pork and fennel meatballs",
  "yield": "About 60 small. 24 go in the pasta bake.",
  "day": 2,
  "tags": [
   "hand",
   "df"
  ],
  "pre": [
   "Line 2 trays. Oven 200 °C / 400 °F."
  ],
  "ings": [
   "1 cup panko + ½ cup oat milk",
   "1.5 kg (3.3 lb) ground pork",
   "2 eggs",
   "1 onion, grated (keep the juice)",
   "4 garlic cloves, minced",
   "2 tsp fennel seed, toasted 1 min, crushed",
   "1 Tbsp dried oregano, 1 Tbsp fine salt, 1 tsp pepper",
   "1 Tbsp Dijon, zest of 1 lemon, ¼ cup chopped parsley"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "soak 5 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "mix by hand; fry a teaspoon to check salt"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "roll 30 g balls (golf-ball size), ~60"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "roast 18–20 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cool on trays; 24 to fridge for pasta bake; rest freeze loose on a tray, then bag"
    }
   ]
  ],
  "freeze": "Loose in a gallon bag. 3 months.",
  "mw": "5 meatballs, covered, 90 s.",
  "af": "180 °C / 350 °F, 8 min.",
  "notes": [
   [
    "df",
    "Panko soaked in oat milk replaces the usual parmesan and milk. Dip in warm bolognese, or split a roll and make a sub."
   ]
  ],
  "audit": [
   "Salt raised from 2 tsp to 1 Tbsp fine salt, about 1% of the meat and binder. Still fry a teaspoon to check."
  ]
 },
 {
  "id": "sausagerolls",
  "name": "Sausage rolls",
  "yield": "24 pieces: bake 12, freeze 12 raw",
  "day": 1,
  "tags": [
   "hand",
   "nz",
   "df"
  ],
  "pre": [
   "Pastry goes into the fridge on Friday night; it needs about 4 h to thaw. Line a tray. Oven 200 °C / 400 °F."
  ],
  "ings": [
   "1 onion + 1 carrot, grated, squeezed dry in a tea towel",
   "800 g mild Italian sausage, casings removed",
   "200 g ground beef",
   "½ cup panko",
   "1 egg",
   "2 Tbsp ketchup, 1 Tbsp Worcestershire, 1 tsp dried thyme, 1 tsp salt, ½ tsp pepper",
   "4 sheets (2 boxes) puff pastry",
   "1 egg, beaten; sesame seeds"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      5
     ],
     "t": "mix well"
    },
    {
     "r": [
      6,
      6
     ],
     "t": "cut each sheet in half lengthwise (8 strips)"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "3 cm log of filling down each strip; egg-wash one long edge; roll, seam down"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cut each roll in 3; brush tops, sprinkle seeds"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "bake 12 for 30–35 min; freeze the other 12 raw on a tray, then bag"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cool on rack; bag"
    }
   ]
  ],
  "freeze": "Baked 3 months. Raw 2 months: bake from frozen 200 °C / 400 °F, 40–45 min, until 71 °C / 160 °F in the middle.",
  "mw": "No. Goes soft.",
  "af": "180 °C / 350 °F, 8–10 min.",
  "notes": [
   [
    "nz",
    "Serve with ketchup. Watties is on Amazon; Heinz is fine."
   ]
  ],
  "source": {
   "name": "The Kiwi Country Girl's sausage rolls",
   "url": "https://www.thekiwicountrygirl.com/homemade-sausage-rolls/",
   "note": "scaled to 4 sheets, with grated onion and carrot, panko and egg"
  },
  "audit": [
   "Pastry now thaws in the fridge from Friday night. The old plan bought it Saturday morning and rolled it 80 minutes later; it needs about 4 h.",
   "Raw-from-frozen bake raised to 40–45 min with a 71 °C / 160 °F centre.",
   "Kirkland Italian sausage has fennel and paprika. For a plainer NZ-style roll, use Jimmy Dean bulk pork sausage."
  ]
 },
 {
  "id": "mincepies",
  "name": "Mini mince and cheese pies",
  "yield": "12 (cheese in 6)",
  "day": 2,
  "tags": [
   "hand",
   "nz"
  ],
  "pre": [
   "Grease a 12-hole muffin tin. Oven 200 °C / 400 °F. Mince must be cold."
  ],
  "ings": [
   "3 cups savoury mince, chilled (Day 2 batch)",
   "2 boxes (4) refrigerated pie crusts",
   "2 sheets (1 box) puff pastry",
   "6 Tbsp grated sharp cheddar (optional, for 6)",
   "1 egg, beaten"
  ],
  "cols": [
   [
    {
     "r": [
      1,
      1
     ],
     "t": "cut 12 × 12 cm (4¾ in) circles, re-rolling scraps; press into tin"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "cut 12 × 8 cm (3 in) circles"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "¼ cup mince in each"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "1 Tbsp cheese on 6"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "lids on, press to seal, egg-wash; 1 vent plain, 2 vents cheese"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "bake 25–28 min"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "cool 10 min in tin, then rack"
    }
   ]
  ],
  "freeze": "Wrap each in foil, bag. 3 months.",
  "mw": "2 min, then 3 min in the air fryer.",
  "af": "170 °C / 340 °F, 15–18 min from frozen.",
  "notes": [
   [
    "nz",
    "One vent = plain mince. Two vents = cheese. No label needed."
   ]
  ],
  "source": {
   "name": "Dished by Kate's mince and cheese pies",
   "url": "https://dishedbykate.com/mince-and-cheese-pies/",
   "note": "muffin-tin method; filling is the Day 2 savoury mince",
   "also": {
    "name": "The Kiwi Country Girl",
    "url": "https://www.thekiwicountrygirl.com/mince-and-cheese-pie/"
   }
  },
  "audit": [
   "Pie crust doubled to 2 boxes. One box (two 9 in rounds) cuts 8 bases at most, not 12.",
   "Bases cut at 12 cm instead of 11 cm so there is a lip to seal the lid to."
  ]
 },
 {
  "id": "anzac",
  "name": "Anzac biscuits",
  "yield": "30",
  "day": 1,
  "tags": [
   "hand",
   "nz",
   "df"
  ],
  "pre": [
   "Line 2 trays. Oven 170 °C / 340 °F."
  ],
  "ings": [
   "1 cup (125 g) all-purpose flour",
   "1 cup (90 g) rolled oats",
   "1 cup (85 g) unsweetened shredded coconut",
   "¾ cup (165 g) brown sugar",
   "125 g plant butter",
   "2 Tbsp golden syrup (or honey)",
   "1 tsp baking soda",
   "2 Tbsp boiling water"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      3
     ],
     "t": "mix"
    },
    {
     "r": [
      4,
      5
     ],
     "t": "melt"
    },
    {
     "r": [
      6,
      7
     ],
     "t": "dissolve"
    }
   ],
   [
    {
     "r": [
      4,
      7
     ],
     "t": "combine (froths)"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "stir together"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "roll Tbsp balls, flatten, 5 cm apart"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "bake 12–14 min chewy, 16 crunchy"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cool on trays"
    }
   ]
  ],
  "freeze": "Stack with parchment between. 3 months. Eat from frozen.",
  "mw": "10 s, or none.",
  "af": "—",
  "notes": [
   [
    "nz",
    "Golden syrup: World Market, the British aisle at Jewel, or Amazon (Lyle's)."
   ]
  ],
  "source": {
   "name": "the traditional Anzac proportions (1 cup each of flour, oats and coconut)",
   "url": ""
  },
  "audit": [
   "Flour corrected to 125 g per cup. 150 g was a fifth too much and would have made a dry biscuit."
  ]
 },
 {
  "id": "bites",
  "name": "Oat and peanut butter bites",
  "yield": "30",
  "day": 1,
  "tags": [
   "hand",
   "df"
  ],
  "pre": [
   "No oven."
  ],
  "ings": [
   "2 cups rolled oats",
   "½ cup ground flaxseed",
   "1 cup natural peanut butter",
   "½ cup honey or maple syrup",
   "½ cup dairy-free mini choc chips, 1 tsp vanilla, pinch salt",
   "3 Tbsp brewer's yeast (optional)",
   "1–2 Tbsp oat milk only if the mix will not hold together"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      6
     ],
     "t": "stir"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "chill 20 min"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "roll 30 balls"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "freeze on a tray, then bag"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "None. Eat from frozen after 5 min.",
  "af": "—",
  "notes": [],
  "source": {
   "name": "The BakerMama's no-bake lactation bites",
   "url": "https://thebakermama.com/recipes/no-bake-lactation-bites/",
   "note": "dairy-free chips, 30 smaller balls"
  },
  "audit": [
   "Honey raised from ⅓ to ½ cup so the balls hold together without extra milk."
  ]
 }
];

export const MEALS: Recipe[] = [
 {
  "id": "bolognese",
  "name": "Bolognese",
  "yield": "About 3.8 L: 2.2 L for lasagne, 1 L for the pasta bake, the rest in a flat bag",
  "day": 2,
  "tags": [
   "df"
  ],
  "pre": [
   "Largest pot, at least 7 qt / 6.5 L. First thing on the stove on Day 2."
  ],
  "ings": [
   "4 Tbsp olive oil",
   "2 onions, 2 carrots, 2 celery stalks, fine dice",
   "6 garlic cloves, minced",
   "1 kg ground beef",
   "500 g mild Italian sausage, casings removed",
   "¼ cup tomato paste",
   "1 cup dry red wine (optional)",
   "3 × 28 oz cans crushed tomatoes",
   "2 cups beef stock",
   "2 bay leaves, 2 tsp dried oregano, 1 Tbsp Worcestershire, 1 tsp sugar",
   "salt, pepper, ½ cup chopped basil"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "sweat 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "brown 10 min, breaking up"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "2 min"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "boil 2 min"
    }
   ],
   [
    {
     "r": [
      0,
      9
     ],
     "t": "simmer 2 h, lid ajar"
    }
   ],
   [
    {
     "r": [
      0,
      10
     ],
     "t": "season, cool"
    }
   ],
   [
    {
     "r": [
      0,
      10
     ],
     "t": "ice-bath the pot 20 min; 2.2 L into two shallow tubs and 1 L into a third, all to the fridge; the rest in a flat bag, freeze"
    }
   ]
  ],
  "freeze": "Bag: 3 months.",
  "mw": "Bag in warm water 5 min, then 4 min, stir, 2–3 min more.",
  "af": "—",
  "notes": [
   [
    "df",
    "The sausage adds fat and fennel so the sauce does not miss cheese."
   ]
  ],
  "audit": [
   "Yield corrected from 3 L to about 3.8 L. That surplus now becomes the pasta bake sauce.",
   "Pot size stated (7 qt or larger) and a 20-minute ice bath added before the fridge. 2.2 L in one deep tub takes over 4 h to cool."
  ]
 },
 {
  "id": "lasagne",
  "name": "Lasagne, 8 loaf pans",
  "yield": "8 pans, 1 dinner each (cheese on some)",
  "day": 3,
  "tags": [
   "df"
  ],
  "pre": [
   "8 foil loaf pans (8½×4½ in) with lids. Oven 180 °C / 350 °F.",
   "Warm the oat milk in the microwave first, or the sauce goes lumpy."
  ],
  "ings": [
   "½ cup (120 ml) olive oil",
   "¾ cup + 1 Tbsp (100 g) all-purpose flour",
   "6 cups (1.4 L) oat milk, warm",
   "1 tsp salt, 1 Tbsp Dijon, ½ tsp nutmeg, ½ tsp white pepper, 3 Tbsp nutritional yeast (optional)",
   "2.2 L bolognese (Day 2)",
   "2 boxes oven-ready lasagne sheets, snapped to fit the pans",
   "2 cups mozzarella + ½ cup parmesan (optional, C pans only)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "whisk, cook 2 min"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "whisk in slowly, simmer 5 min until it coats a spoon"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "season"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "each pan: thin white sauce, sheet, ⅓ cup bolognese, 3 Tbsp white sauce; 3 layers; white sauce on top"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "cheese on C pans; write C or NC on lids"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "bake covered 40 min, uncovered 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "cool completely, lid, freeze"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "Tip into a bowl: 4 min at 50%, then 3–4 min full, rest 2 min. Or thaw overnight, 4 min.",
  "af": "Thawed, in the pan: 170 °C / 340 °F, 15 min.",
  "notes": [
   [
    "df",
    "Olive oil, oat milk, Dijon and nutritional yeast make a white sauce that tastes savoury on its own."
   ],
   [
    "tip",
    "Loaf pans fit the narrow shelves and each one is one dinner."
   ]
  ],
  "audit": [
   "White sauce raised to 6 cups oat milk and 100 g flour. 5 cups was about a quarter short for 8 pans with the layers as written."
  ]
 },
 {
  "id": "pastabake",
  "name": "Meatball and roast vegetable pasta bake",
  "yield": "6 portions in two 8×8 pans. If room.",
  "day": 3,
  "tags": [
   "df",
   "opt"
  ],
  "pre": [
   "Vegetables are roasted on Day 2. The sauce is 1 L of Day 2 bolognese. Two 8×8 foil pans. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "2 zucchini, 2 red bell peppers, 1 red onion, 2 cm chunks, 2 Tbsp oil, salt",
   "1 L bolognese (Day 2), 1 tsp dried oregano",
   "350 g rigatoni",
   "24 meatballs, halved",
   "150 g baby spinach, ½ cup basil",
   "1 cup mozzarella (optional, one pan)",
   "1 cup panko, 3 Tbsp olive oil, zest of 1 lemon, ¼ cup parsley"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "roast 200 °C / 400 °F 25 min (Day 2); fridge overnight"
    },
    {
     "r": [
      1,
      1
     ],
     "t": "warm in the microwave"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "boil 2 min under packet time, drain"
    },
    {
     "r": [
      6,
      6
     ],
     "t": "mix"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "toss together; into 2 pans"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "tuck cheese into one pan; mark it"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "scatter over both"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "bake 25–30 min"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "cool; 6 tubs"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "6–8 min covered, stir halfway.",
  "af": "Thawed: 170 °C / 340 °F, 15 min.",
  "notes": [
   [
    "tip",
    "Skip this if the freezer is full. Bolognese already covers Italian."
   ]
  ],
  "audit": [
   "Cut to 350 g rigatoni and 1 L of Day 2 bolognese, instead of 500 g pasta and a separate two-can tomato sauce. The old amounts came to about 5 L for two pans that hold 4 L, and the extra sauce pot put five pans on four burners on Day 3."
  ]
 },
 {
  "id": "enchiladas",
  "name": "Chicken enchiladas, mild",
  "yield": "12 in two 8×8 pans = 6 portions (cheese on one pan)",
  "day": 3,
  "tags": [],
  "pre": [
   "Thaw the shredded chicken overnight. Two 8×8 foil pans. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "Sauce: 3 Tbsp oil + 3 Tbsp all-purpose flour",
   "3 Tbsp mild chili powder (blend, not cayenne), 1 tsp cumin, 1 tsp garlic powder, ½ tsp oregano, 1 Tbsp tomato paste",
   "3 cups chicken stock, 1 tsp cocoa, salt",
   "Filling: 1 Tbsp oil, 1 onion diced, 3 garlic",
   "1 kg sous-vide chicken thighs, shredded (Day 1)",
   "1 can black beans, rinsed; 1½ cups frozen corn",
   "1 tsp cumin, 1 tsp oregano, ½ tsp salt",
   "12 taco-size tortillas",
   "1½ cups shredded cheddar or jack (optional, one pan)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "cook 1 min"
    },
    {
     "r": [
      3,
      3
     ],
     "t": "fry 5 min"
    },
    {
     "r": [
      7,
      7
     ],
     "t": "microwave 30 s"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "whisk in, 30 s"
    },
    {
     "r": [
      3,
      6
     ],
     "t": "stir in with ½ cup sauce; cool 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "whisk in; simmer 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "thin sauce in pans; fill and roll, 6 per pan seam down; rest of sauce over"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "cheese on one pan; mark it"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "bake 25 min"
    }
   ],
   [
    {
     "r": [
      0,
      8
     ],
     "t": "cool, lid, freeze"
    }
   ]
  ],
  "freeze": "3 months. Freeze whole pans, or wrap pairs in foil so you can pull out two at a time.",
  "mw": "2 enchiladas on a plate, covered, 4–5 min.",
  "af": "Whole pan: thaw overnight, oven 180 °C / 350 °F, 25 min.",
  "notes": [
   [
    "tip",
    "Or use 2 cans of mild red enchilada sauce (Old El Paso mild, or Siete) instead of making it. Serve with avocado, cilantro, lime. Rolled 8 in tortillas are a bit long for an 8×8 pan: tuck the ends under, or use 9×9 pans."
   ]
  ],
  "source": {
   "name": "Cookie and Kate's enchilada sauce",
   "url": "https://cookieandkate.com/enchilada-sauce-recipe/",
   "note": "sauce scaled up 1.5×, plus cocoa; the filling is a house recipe"
  },
  "audit": [
   "Added a way to eat two at a time (wrap pairs) and a note that 8 in tortillas are a bit long for an 8×8 pan."
  ]
 },
 {
  "id": "strog",
  "name": "Beef stroganoff",
  "yield": "6 portions. Cream goes in at the table.",
  "day": 2,
  "tags": [
   "df"
  ],
  "pre": [
   "Dutch oven. Salt the beef 20 min ahead, pat dry."
  ],
  "ings": [
   "1.5 kg chuck roast, 3 cm cubes",
   "2 Tbsp oil",
   "2 onions, sliced",
   "750 g mushrooms, sliced",
   "4 garlic cloves, minced",
   "2 Tbsp sweet paprika, 3 Tbsp all-purpose flour, 2 Tbsp tomato paste",
   "2 Tbsp Dijon, 2 Tbsp Worcestershire, 3 cups beef stock, 1 bay leaf, 2 tsp thyme",
   "At the table, per portion: 2–3 Tbsp sour cream or dairy-free sour cream, parsley"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "brown hard in 3 batches; set aside"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "soften 8 min"
    }
   ],
   [
    {
     "r": [
      2,
      3
     ],
     "t": "cook until the liquid is gone"
    }
   ],
   [
    {
     "r": [
      2,
      4
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      2,
      5
     ],
     "t": "stir, 1 min"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "beef back in, cover"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "braise 160 °C / 325 °F, 2½ h"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "cool; 6 flat bags"
    },
    {
     "r": [
      7,
      7
     ],
     "t": "stir in after reheating"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "Bag in warm water 5 min, then 4–5 min covered. Stir in the cream.",
  "af": "—",
  "notes": [
   [
    "df",
    "Sour cream splits in the freezer anyway. Kite Hill or Forager dairy-free sour cream (Whole Foods, Mariano's) works, or coconut yoghurt with a squeeze of lemon. Serve over frozen rice or egg noodles."
   ]
  ]
 },
 {
  "id": "savmince",
  "name": "Savoury mince",
  "yield": "About 8 cups: 3 for pies, 2½ for shepherd's pie, 2 bags for mince on toast",
  "day": 2,
  "tags": [
   "nz",
   "df"
  ],
  "pre": [
   "Second big pot, 30 min after the bolognese goes on."
  ],
  "ings": [
   "2 Tbsp oil, 1.5 kg ground beef",
   "2 onions, diced; 2 carrots, grated; 4 garlic cloves",
   "3 Tbsp tomato paste",
   "2 Tbsp all-purpose flour",
   "2 Tbsp Worcestershire, 1 Tbsp soy sauce, 2 Tbsp ketchup, 2 tsp dried thyme",
   "2 cups beef stock",
   "1 cup frozen peas",
   "1½ tsp salt, pepper; 2 Tbsp Bisto gravy powder (optional)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "brown hard, break up"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "soften 8 min"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      0,
      5
     ],
     "t": "simmer 35–40 min until a spoon leaves a trench"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "last 5 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "season"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "3 cups spread on a tray and into the freezer for 20 min (pies); 2½ cups in a tub (shepherd's pie); rest in 2 flat bags"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "Bag: 3 min, stir, 1 min. Onto toast.",
  "af": "—",
  "notes": [
   [
    "nz",
    "Mince on toast: plant-buttered toast, hot mince, pepper. Four minutes, one hand."
   ]
  ],
  "audit": [
   "Salt given as 1½ tsp instead of “salt”.",
   "The pie portion chills in the freezer for 20 min, not the fridge, so it is cold in time for the pies."
  ]
 },
 {
  "id": "shepherd",
  "name": "Shepherd's pie with sweet potato mash",
  "yield": "One 8×8 pan = 4 portions (cheese on half)",
  "day": 3,
  "tags": [
   "nz",
   "df"
  ],
  "pre": [
   "8×8 foil pan. Oven 180 °C / 350 °F."
  ],
  "ings": [
   "800 g sweet potato + 400 g Yukon gold potatoes, peeled, chunked",
   "3 Tbsp olive oil or plant butter, ¼ cup oat milk, salt, pinch nutmeg",
   "2½ cups savoury mince (Day 2)",
   "½ cup grated cheddar (optional, one half)"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "boil 15 min, drain"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "spread in pan"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "mash"
    }
   ],
   [
    {
     "r": [
      0,
      2
     ],
     "t": "spread over mince, rough up with a fork"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "cheese on half; mark"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "bake 30 min"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "cool; cut in 4; wrap or lid"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "6–8 min covered.",
  "af": "Thawed: 170 °C / 340 °F, 15 min.",
  "notes": [
   [
    "nz",
    "Kumara mash. The Yukon gold stops it going watery."
   ]
  ],
  "audit": [
   "Microwave time raised to 6–8 min; a 425 g frozen block needs it."
  ]
 },
 {
  "id": "butterchicken",
  "name": "Butter chicken, coconut, mild",
  "yield": "6 portions",
  "day": 3,
  "tags": [
   "df"
  ],
  "pre": [
   "Marinate first thing on Day 3, or overnight."
  ],
  "ings": [
   "1.2 kg boneless chicken thighs, 3 cm pieces",
   "1 cup coconut yoghurt, 1 Tbsp garam masala, 1 tsp turmeric, 1 Tbsp lemon juice, 2 tsp salt, 2 garlic, 1 Tbsp grated ginger",
   "3 Tbsp plant butter or oil; 2 onions, finely chopped",
   "6 garlic cloves + 2 Tbsp ginger, minced",
   "2 Tbsp garam masala; 1 tsp each turmeric, ground coriander, cumin, sweet paprika",
   "1 × 28 oz can crushed tomatoes, 1 Tbsp honey",
   "1 can (400 ml) coconut cream; 1 tsp kasuri methi (optional)",
   "salt; cilantro"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "marinate 1 h+"
    },
    {
     "r": [
      2,
      2
     ],
     "t": "soften 10 min until golden"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "sear in a hot skillet in 3 batches; set aside"
    },
    {
     "r": [
      2,
      3
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      2,
      4
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      2,
      5
     ],
     "t": "simmer 15 min; blend if you want it smooth"
    }
   ],
   [
    {
     "r": [
      0,
      6
     ],
     "t": "chicken in; simmer 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "season"
    }
   ],
   [
    {
     "r": [
      0,
      7
     ],
     "t": "cool; 6 flat bags"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "5–6 min covered, stir halfway. Rice and naan (check naan label for dairy; Trader Joe's garlic naan is dairy-free).",
  "af": "—",
  "notes": [
   [
    "df",
    "Coconut yoghurt and coconut cream replace the yoghurt, butter and cream. Kasuri methi and garam masala: Patel Brothers on Devon Ave, or the international aisle at Mariano's."
   ]
  ],
  "audit": [
   "Sear in 3 batches, not 2, so the chicken browns instead of steaming.",
   "Microwave time raised to 5–6 min for a 400 ml frozen bag."
  ]
 },
 {
  "id": "soup",
  "name": "Pumpkin soup",
  "yield": "6 × 500 ml",
  "day": 2,
  "tags": [
   "nz",
   "df",
   "hand"
  ],
  "pre": [
   "Roasts at 200 °C / 400 °F with the Day 2 vegetables."
  ],
  "ings": [
   "2 kg kabocha or butternut squash, seeded, in wedges, 2 Tbsp oil, salt",
   "1 Tbsp oil; 1 onion, chopped; 3 garlic",
   "1 Tbsp mild curry powder (or 2 tsp cumin)",
   "1.2 L (5 cups) chicken or vegetable stock",
   "1 can (400 ml) coconut cream, 1 tsp salt, pinch nutmeg"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      0
     ],
     "t": "roast 35–40 min; scoop flesh from skins"
    },
    {
     "r": [
      1,
      1
     ],
     "t": "soften 8 min"
    }
   ],
   [
    {
     "r": [
      1,
      2
     ],
     "t": "1 min"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "simmer 10 min"
    }
   ],
   [
    {
     "r": [
      0,
      3
     ],
     "t": "blend smooth"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "stir in; season"
    }
   ],
   [
    {
     "r": [
      0,
      4
     ],
     "t": "cool; 6 × 500 ml flat bags"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "In a big mug: 3 min, break up, 3 min.",
  "af": "—",
  "notes": [
   [
    "nz",
    "Kabocha is the closest thing to NZ pumpkin. Mariano's, Whole Foods and H Mart have it; butternut is everywhere and fine. Soup in a mug plus a scone is a one-handed dinner."
   ]
  ],
  "audit": [
   "Microwave time now 3 min, break up, 3 min. A 500 ml frozen block needs about 6 min at 1000–1200 W."
  ]
 },
 {
  "id": "rice",
  "name": "Freezer rice",
  "yield": "8 portions of 1½ cups",
  "day": 3,
  "tags": [
   "df"
  ],
  "pre": [
   "Rice cooker. Start it first on Day 3."
  ],
  "ings": [
   "4 cups basmati rice, rinsed until clear",
   "6 cups water, 1 tsp salt"
  ],
  "cols": [
   [
    {
     "r": [
      0,
      1
     ],
     "t": "cook"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "spread on a tray 15 min"
    }
   ],
   [
    {
     "r": [
      0,
      1
     ],
     "t": "1½ cups per quart bag, flatten, freeze"
    }
   ]
  ],
  "freeze": "3 months.",
  "mw": "Tear a corner, splash of water, 2–3 min. Fluff.",
  "af": "—",
  "notes": []
 }
];

export const RULES: Rule[] = [
 [
  "Cool food completely before it goes in the freezer.",
  "Warm food steams inside the bag. That steam becomes ice, and ice makes bread and pastry soggy. Rack, then fridge, then freezer."
 ],
 [
  "Freeze sauces and soups flat in zip bags.",
  "Press the air out, freeze flat on a tray, then stand them up like files in the door bins. They thaw fast and take little room."
 ],
 [
  "Label everything: name, date, portions, how to reheat.",
  "Write C if it has cheese and NC if it does not. Sharpie on freezer tape or on the foil."
 ],
 [
  "Cheese is optional in every recipe.",
  "Each recipe is seasoned to be good without it. Add cheese to half the batch and mark those. If the baby reacts to dairy, nothing is wasted."
 ],
 [
  "Microwave is the default. Air fryer for anything with pastry, bread or a crust.",
  "Both times are on every card and in the reheat guide."
 ],
 [
  "Keep a snack bin at eye level.",
  "Things you can eat straight from the freezer or after 30 seconds in the microwave, in one bin, at the front."
 ]
];

export const SALADS: Salad[] = [
 {
  "name": "Sundried tomato and white bean",
  "beans": "1 can chickpeas + 1 can cannellini",
  "protein": "200 g diced sous-vide chicken, or 150 g salami",
  "veg": "1 red bell pepper, ½ red onion, 2 celery stalks",
  "briny": "½ cup sundried tomatoes in oil, ½ cup artichoke hearts, ¼ cup roasted red pepper",
  "herbs": "Big handful basil and parsley",
  "dressing": "3 Tbsp oil from the sundried tomato jar, 2 Tbsp olive oil, 2 Tbsp red wine vinegar, 1 Tbsp lemon, 1 tsp Dijon, 1 tsp Italian seasoning, 1 garlic clove, salt",
  "cheese": "Mozzarella or feta cubes, per bowl"
 },
 {
  "name": "Chicken Caesar chickpea",
  "beans": "2 cans chickpeas",
  "protein": "300 g shredded sous-vide or rotisserie chicken",
  "veg": "2 Persian cucumbers, 3 celery stalks, ½ red onion",
  "briny": "2 Tbsp capers, ¼ cup chopped mild pickled peppers",
  "herbs": "Bunch of dill and parsley",
  "dressing": "¼ cup olive oil, 2 Tbsp lemon, 1 Tbsp Dijon, 1 tsp Worcestershire, 1 garlic clove, black pepper, salt",
  "cheese": "Shaved parmesan per bowl. Toasted panko for crunch either way."
 },
 {
  "name": "Black bean, corn and lime",
  "beans": "2 cans black beans",
  "protein": "300 g rotisserie chicken, or 4 chopped hard-boiled eggs",
  "veg": "1½ cups corn (charred in a dry pan), 1 red bell pepper, ½ red onion, 1 cup cherry tomatoes",
  "briny": "¼ cup pickled red onion",
  "herbs": "Bunch of cilantro, 2 scallions",
  "dressing": "¼ cup olive oil, juice of 2 limes, 1 tsp cumin, ½ tsp mild chili powder, 1 tsp honey, salt",
  "cheese": "Cotija or cheddar per bowl. Avocado for everyone."
 },
 {
  "name": "Greek lentil and chickpea",
  "beans": "1 can chickpeas + 1 pack (250 g) cooked lentils (Trader Joe's)",
  "protein": "200 g diced chicken, or 4 hard-boiled eggs",
  "veg": "2 Persian cucumbers, 1 cup cherry tomatoes, ½ red onion, 1 green bell pepper",
  "briny": "½ cup Kalamata olives, ¼ cup chopped sundried tomatoes",
  "herbs": "Bunch of parsley, 1 tsp dried oregano",
  "dressing": "¼ cup olive oil, 3 Tbsp red wine vinegar, 1 Tbsp lemon, 1 garlic clove, 1 tsp dried oregano, ½ tsp honey, salt",
  "cheese": "Feta per bowl. Without it, the olives carry the salt."
 }
];

export const DAYS: CookDay[] = [
 {
  "n": 1,
  "title": "Bakery and sous vide",
  "when": "Saturday 13 September · about 5 h after shopping",
  "goal": "All the hot baking and all the snacks. Chicken for the enchiladas and this week's salad cooks in the sous vide. Oven goes 200 → 180 → 170 and never back up.",
  "steps": [
   [
    "Fri pm",
    "Move 2 boxes of puff pastry from the freezer to the fridge",
    "It needs about 4 h to thaw. Leave the third box frozen and move it to the fridge on Friday 19 for the Day 2 pie lids."
   ],
   [
    "08:30",
    "Costco and grocery run",
    "Pastry is already thawing in the fridge."
   ],
   [
    "10:15",
    "Sous vide on, 74 °C / 165 °F, 2 h",
    "Bags in a single layer, no thicker than 3 cm (use 3 bags if needed): 1 kg thighs marked 'enchiladas', 800 g marked 'salad'. Salt, garlic powder, lemon zest."
   ],
   [
    "10:20",
    "Oven 200 °C / 400 °F. Bacon on a tray, 12 slices, 15 min",
    "6 for scones, 6 for muffins. Mix the savoury scone dough."
   ],
   [
    "10:40",
    "Savoury scones in, 2 trays, 15–18 min",
    "Make the date scone dough."
   ],
   [
    "11:00",
    "Date scones in, 15 min",
    "Mix the sausage roll filling."
   ],
   [
    "11:20",
    "Roll sausage rolls. 12 in the oven, 30–35 min. 12 raw onto a tray in the freezer",
    "Mix both muffin batters."
   ],
   [
    "11:55",
    "Oven down to 180 °C / 350 °F. Both muffin tins in, 20–22 min",
    "Sausage rolls cool on a rack."
   ],
   [
    "12:20",
    "Oven down to 170 °C / 340 °F. Anzacs in, 2 trays, 12–14 min",
    "Roll the PB bites. Fridge."
   ],
   [
    "12:40",
    "Chicken out, ice bath 10 min",
    "Shred the 1 kg bag, bag flat, label 'enchiladas, Day 3', freeze. Dice the salad chicken."
   ],
   [
    "13:00",
    "Make bean salad 1 (sundried tomato)",
    "20 min. Two tubs."
   ],
   [
    "13:30",
    "Lunch. Everything cools on racks at least 1 h",
    ""
   ],
   [
    "14:30",
    "Bag, label, freeze",
    "Scones C / NC / date. Muffins C / NC / banana. Rolls. Anzacs. Bites. Raw sausage rolls off the tray into a bag. Egg bites to the middle shelf."
   ]
  ]
 },
 {
  "n": 2,
  "title": "Mince, sauces and roasting",
  "when": "Saturday 20 September · about 6 h",
  "goal": "Bolognese and savoury mince on the stove, everything that roasts at 200 °C in the oven, then the pies, then the oven drops to 160 °C for the stroganoff. Three pots: big pot, second pot, Dutch oven.",
  "steps": [
   [
    "09:00",
    "Bolognese on, big pot",
    "Simmer 2 h, lid ajar."
   ],
   [
    "09:15",
    "Oven 200 °C / 400 °F. Two roasting trays in",
    "Three trays over two racks: pumpkin wedges 40 min; diced sweet potato (burritos) 25 min; zucchini, peppers and red onion (pasta bake) 25 min. Spread out or they steam. Swap racks at 20 min."
   ],
   [
    "09:40",
    "Savoury mince on, second pot",
    "Simmer 35–40 min until very thick."
   ],
   [
    "09:45",
    "Roll meatballs, 2 trays",
    "Vegetable trays come out at 09:40: sweet potato and roast vegetables into tubs, then the fridge."
   ],
   [
    "10:00",
    "Meatballs in, 18–20 min",
    "Pumpkin out at 09:55. Blend the soup. Cool."
   ],
   [
    "10:30",
    "Stroganoff: brown beef, build the braise in the Dutch oven",
    "Keep it at a low simmer on the stove until the oven is free."
   ],
   [
    "10:45",
    "Savoury mince off. 3 cups spread on a tray and into the freezer for 20 min",
    "2½ cups to a tub, rest into 2 flat bags. Browning 1.5 kg plus the simmer takes about an hour, so it finishes later than the old plan said."
   ],
   [
    "11:15",
    "Cut pastry, line the muffin tin, fill and lid 12 pies",
    "Mince is cold now. 1 vent plain, 2 vents cheese."
   ],
   [
    "11:30",
    "Pies in, 25–28 min",
    "Bolognese off about now. Add basil. Cool."
   ],
   [
    "12:00",
    "Pies out. Oven down to 160 °C / 325 °F. Stroganoff in, covered, 2½ h",
    "Lunch. Fridge the 24 pasta-bake meatballs now; the rest onto a tray in the freezer."
   ],
   [
    "13:00",
    "Bag round one",
    "Soup: 6 flat bags. Bolognese: ice-bath the pot 20 min, then 2.2 L into two shallow tubs and 1 L into a third for the pasta bake, all to the fridge; the rest into a flat bag for the freezer. Meatballs off the freezer tray into a bag. Mince bags flat."
   ],
   [
    "14:30",
    "Stroganoff out. Cool 45 min. 6 flat bags",
    "Move the enchilada chicken bag from freezer to fridge to thaw overnight."
   ]
  ]
 },
 {
  "n": 3,
  "title": "Assembly",
  "when": "Sunday 21 September · about 5 h · oven at 180 °C / 350 °F all day",
  "goal": "Yesterday's sauces become finished dishes. One oven temperature all day.",
  "steps": [
   [
    "09:00",
    "Rice cooker on, 4 cups. Marinate the butter chicken. Oven 180 °C / 350 °F",
    ""
   ],
   [
    "09:10",
    "Egg sheet in, 9×13 pan, 20–25 min",
    "Make the white sauce. Toast 12 English muffins."
   ],
   [
    "09:35",
    "Egg out to cool. Build 8 lasagne pans",
    "White sauce, sheet, ⅓ cup bolognese, white sauce, 3 layers. Cheese on the C pans."
   ],
   [
    "10:00",
    "Lasagnes in, foil on, 40 min, then 10 min uncovered",
    "Scramble 12 eggs, cool. Fry pepper and onion. Build and wrap 12 breakfast sandwiches."
   ],
   [
    "10:30",
    "Roll and wrap 12 burritos",
    "Foil, C / NC, bag in twos."
   ],
   [
    "10:50",
    "Lasagnes out. Enchilada sauce first, then the filling",
    "Boil the shepherd's pie potatoes. Rigatoni on last. Warm the pasta bake bolognese in the microwave, not on the stove."
   ],
   [
    "11:20",
    "Roll enchiladas into 2 pans. Build the pasta bake. Mash and top the shepherd's pie",
    "Cheese on one enchilada pan, half the bake, half the pie. Mark all."
   ],
   [
    "11:40",
    "Enchiladas and pasta bake in, 25–30 min",
    "Butter chicken: sear, start the sauce."
   ],
   [
    "12:10",
    "Shepherd's pie in, 30 min",
    "Finish butter chicken. Portion rice into 8 bags."
   ],
   [
    "12:40",
    "All out. Lunch",
    ""
   ],
   [
    "13:30",
    "Cool, lid, label, freeze",
    "Lasagne and 8×8 pans to the bottom shelf. Butter chicken and rice bags to the door. Sandwiches and burritos to the middle shelf."
   ]
  ]
 }
];

export const SHOP: Store[] = [
 {
  "store": "Costco",
  "where": "One trip, Friday 12 or Saturday 13 morning",
  "groups": [
   {
    "h": "Meat and eggs",
    "items": [
     [
      "Ground beef 88/12",
      "~6 lb (2.7 kg)",
      "Bolognese 1 kg, savoury mince 1.5 kg, sausage rolls 200 g"
     ],
     [
      "Kirkland mild Italian sausage",
      "~3 lb (1.4 kg)",
      "Sausage rolls 800 g (or Jimmy Dean bulk pork for a plainer NZ-style roll), bolognese 500 g"
     ],
     [
      "Ground pork",
      "3.3 lb (1.5 kg)",
      "Meatballs"
     ],
     [
      "Boneless skinless chicken thighs",
      "~6.5 lb (3 kg)",
      "Enchiladas 1 kg, butter chicken 1.2 kg, salad 800 g"
     ],
     [
      "Chuck roast",
      "3.3 lb (1.5 kg)",
      "Stroganoff"
     ],
     [
      "Bacon",
      "1 lb",
      "Scones 6 slices, muffins 6 slices"
     ],
     [
      "Cooked breakfast sausage patties (Jimmy Dean)",
      "12",
      "Breakfast sandwiches"
     ],
     [
      "Rotisserie chicken",
      "1, buy Saturday 20",
      "Burritos 2 cups, salad. Keeps 3–4 days, so Saturday is fine for Sunday's burritos."
     ],
     [
      "Eggs",
      "4 dozen",
      "Sandwiches 12, burritos 8, muffins 4, meatballs 2, sausage rolls 2, egg wash 2"
     ]
    ]
   },
   {
    "h": "Fridge and bakery",
    "items": [
     [
      "English muffins",
      "12-pack",
      "Breakfast sandwiches"
     ],
     [
      "Kirkland egg bites",
      "2 boxes",
      "Snack. These contain cheese; keep them with the C food."
     ],
     [
      "Taco-size (8 in) flour tortillas",
      "30-pack",
      "Burritos 12, enchiladas 12, a few for salads"
     ],
     [
      "Oat milk (Kirkland or Oatly)",
      "4 × 32 oz (~3.8 L)",
      "White sauce 1.4 L, scones 900 ml, muffins, sandwiches and mash 500 ml"
     ],
     [
      "Sharp cheddar block",
      "1",
      "All optional C portions"
     ],
     [
      "Shredded mozzarella",
      "1 bag",
      "Lasagne, pasta bake C halves (optional)"
     ],
     [
      "Parmesan",
      "small wedge, optional",
      "Lasagne C pans, Caesar bean salad"
     ],
     [
      "Puff pastry, Pepperidge Farm (2 sheets/box)",
      "3 boxes",
      "Sausage rolls 4 sheets, pie lids 2. Costco does not always have it; Jewel does."
     ],
     [
      "Refrigerated pie crust, Pillsbury (2/box)",
      "2 boxes (4 crusts)",
      "Pie bases: 12 × 12 cm circles need 4 crusts. Jewel if not at Costco."
     ]
    ]
   },
   {
    "h": "Pantry",
    "items": [
     [
      "Crushed tomatoes, 28 oz",
      "4 cans",
      "Bolognese 3, butter chicken 1"
     ],
     [
      "Black beans",
      "4 cans",
      "Burritos 1, enchiladas 1, black bean salad 2"
     ],
     [
      "Chickpeas",
      "4 cans",
      "Salads"
     ],
     [
      "Cannellini beans",
      "2 cans",
      "Salads"
     ],
     [
      "Chicken stock",
      "3 × 32 oz",
      "Enchilada sauce 3 cups, soup 5 cups. The third carton is the buffer."
     ],
     [
      "Beef stock",
      "2 × 32 oz",
      "Bolognese 2 cups, stroganoff 3 cups, savoury mince 2 cups"
     ],
     [
      "Coconut cream, 400 ml",
      "2 cans",
      "Butter chicken, soup. Jewel or Trader Joe's if not at Costco."
     ],
     [
      "Basmati rice",
      "4 cups (check)",
      "Freezer rice"
     ],
     [
      "Rigatoni",
      "350 g",
      "Pasta bake"
     ],
     [
      "Barilla oven-ready lasagne",
      "2 boxes",
      "Lasagne: 8 pans × 3 sheets = 24; a box has about 15. Jewel if not at Costco."
     ],
     [
      "Panko",
      "1 large box",
      "Meatballs 1 cup, sausage rolls ½, bake top 1"
     ],
     [
      "Rolled oats",
      "~4 cups",
      "Banana muffins, Anzacs, PB bites"
     ],
     [
      "Natural peanut butter",
      "1 cup",
      "PB bites"
     ],
     [
      "Olive oil, neutral oil",
      "check",
      "White sauce alone uses ½ cup"
     ],
     [
      "All-purpose flour",
      "5 lb",
      "Scones 1.1 kg, muffins 440 g, Anzacs 150 g, sauces"
     ],
     [
      "Brown sugar",
      "1 bag",
      "Muffins, Anzacs"
     ]
    ]
   },
   {
    "h": "Produce and frozen",
    "items": [
     [
      "Onions",
      "5 lb (~14 used)",
      "Nearly everything"
     ],
     [
      "Garlic",
      "4 heads, or a jar of peeled",
      "~35 cloves"
     ],
     [
      "Carrots",
      "2 lb",
      "Bolognese, savoury mince, sausage rolls"
     ],
     [
      "Celery",
      "1 bunch",
      "Bolognese 2 stalks, salads"
     ],
     [
      "Red bell peppers",
      "6",
      "Pasta bake 2, burritos 1, salads 2"
     ],
     [
      "Sweet potatoes",
      "5 lb",
      "Shepherd's pie 800 g, burritos 1 large"
     ],
     [
      "Butternut or kabocha squash",
      "~4.5 lb (2 kg)",
      "Soup"
     ],
     [
      "Mushrooms",
      "1.5 lb (750 g)",
      "Stroganoff"
     ],
     [
      "Bananas",
      "3, buy a week early",
      "Banana muffins"
     ],
     [
      "Lemons",
      "6",
      "Meatballs, bake top, salads, butter chicken"
     ],
     [
      "Frozen corn",
      "1 bag (2 lb or more)",
      "Muffins 1 cup, enchiladas 1½, salads"
     ],
     [
      "Frozen peas",
      "1 bag",
      "Savoury mince 1 cup"
     ],
     [
      "Baby spinach",
      "150 g",
      "Pasta bake"
     ]
    ]
   },
   {
    "h": "Freezer kit",
    "items": [
     [
      "Foil loaf pans 8½×4½ in, with lids",
      "8",
      "Lasagne"
     ],
     [
      "Foil 8×8 pans with lids",
      "6",
      "Enchiladas 2, pasta bake 2, shepherd's pie 1, spare"
     ],
     [
      "Gallon zip bags",
      "2 boxes",
      "Snacks"
     ],
     [
      "Quart zip bags",
      "Costco pack (30+ bags)",
      "Stroganoff 6, butter chicken 6, soup 6, rice 8, mince 2, bolognese 1, chicken 1"
     ],
     [
      "Heavy foil, parchment",
      "1 roll each",
      "Sandwiches, burritos, pies"
     ],
     [
      "Freezer tubs with lids, 1 L and 500 ml",
      "about 12",
      "Pasta bake 6, salads 2, bolognese 3, roast vegetables 2"
     ],
     [
      "Muffin liners",
      "24",
      "Banana and corn muffins"
     ],
     [
      "Sharpie, freezer tape",
      "—",
      "Labels"
     ]
    ]
   }
  ]
 },
 {
  "store": "Jewel-Osco or Mariano's",
  "where": "Regular grocery. Top up fresh herbs and salad vegetables again before Day 2.",
  "groups": [
   {
    "h": "Dairy-free",
    "items": [
     [
      "Plant butter sticks (Country Crock Plant Butter)",
      "2 packs (8 sticks)",
      "Scones 330 g, Anzacs 125 g, shepherd's pie, butter chicken. Miyoko's at Whole Foods also works."
     ],
     [
      "Coconut yoghurt, plain (So Delicious or Culina)",
      "1 cup",
      "Butter chicken marinade"
     ],
     [
      "Dairy-free sour cream (Kite Hill or Forager)",
      "1, buy when you first eat stroganoff",
      "Stroganoff. Whole Foods or Mariano's."
     ],
     [
      "Dairy-free mini choc chips (Enjoy Life)",
      "½ cup",
      "PB bites. Jewel or Target."
     ],
     [
      "Nutritional yeast (Bragg)",
      "small tub",
      "White sauce, optional"
     ]
    ]
   },
   {
    "h": "Spices to check",
    "items": [
     [
      "Sweet paprika, smoked paprika",
      "",
      "Stroganoff, scones, muffins, butter chicken"
     ],
     [
      "Mild chili powder (McCormick blend, not cayenne)",
      "3 Tbsp + 1 tsp",
      "Enchilada sauce, burritos"
     ],
     [
      "Cumin, ground coriander, turmeric, garam masala",
      "",
      "Enchiladas, burritos, butter chicken"
     ],
     [
      "Mild curry powder",
      "1 jar",
      "Soup"
     ],
     [
      "Dried oregano, thyme, bay leaves, fennel seed, nutmeg, cinnamon",
      "",
      "Bolognese, meatballs, soup, bakes"
     ],
     [
      "Baking powder, baking soda, mustard powder, vanilla, sesame seeds",
      "",
      "Scones, muffins, Anzacs, rolls"
     ]
    ]
   },
   {
    "h": "Jars and tins",
    "items": [
     [
      "Tomato paste",
      "2 tubes, or one 6 oz can",
      "Bolognese 4 Tbsp, savoury mince 3, stroganoff 2, enchilada sauce 1. A 4.5 oz tube holds about 8 Tbsp."
     ],
     [
      "Worcestershire sauce",
      "1",
      "Bolognese, savoury mince, stroganoff, rolls. Lea & Perrins contains anchovy; Annie's or The Wizard's are fish-free."
     ],
     [
      "Dijon mustard",
      "1",
      "White sauce, meatballs, stroganoff, dressings"
     ],
     [
      "Soy sauce, ketchup",
      "check",
      "Savoury mince, sausage rolls"
     ],
     [
      "Cocoa powder",
      "1 tsp",
      "Enchilada sauce"
     ],
     [
      "White vinegar, sugar, white pepper",
      "check",
      "Scone and muffin milk, bolognese, white sauce"
     ],
     [
      "Mild salsa",
      "1 jar",
      "Burritos"
     ],
     [
      "Mild red enchilada sauce (Old El Paso mild)",
      "2 cans, only if not making it",
      "Enchiladas"
     ],
     [
      "Dry red wine",
      "1 cup, optional",
      "Bolognese"
     ],
     [
      "Honey or maple syrup",
      "",
      "PB bites, butter chicken, dressings"
     ],
     [
      "Ground flaxseed",
      "½ cup",
      "PB bites"
     ],
     [
      "Unsweetened shredded coconut (Bob's Red Mill)",
      "1 cup",
      "Anzacs"
     ],
     [
      "Pitted dates",
      "150 g",
      "Date scones"
     ]
    ]
   },
   {
    "h": "Fresh (weekly)",
    "items": [
     [
      "Chives",
      "2 bunches",
      "Scones, muffins, sandwiches"
     ],
     [
      "Scallions",
      "1 bunch",
      "Scones, muffins, salads"
     ],
     [
      "Parsley, basil, cilantro, dill",
      "1 bunch each",
      "Meatballs, bolognese, bakes, salads"
     ],
     [
      "Fresh ginger",
      "1 knob",
      "Butter chicken"
     ],
     [
      "Zucchini",
      "2",
      "Pasta bake"
     ],
     [
      "Green bell pepper",
      "1",
      "Greek bean salad"
     ],
     [
      "Red onion",
      "3",
      "Pasta bake 1, salads"
     ],
     [
      "Yukon gold potatoes",
      "400 g",
      "Shepherd's pie mash"
     ],
     [
      "Persian cucumbers, cherry tomatoes, limes, avocados",
      "for the week's salad",
      "Salads"
     ],
     [
      "Sundried tomatoes in oil, artichoke hearts, roasted red peppers, Kalamata olives, capers",
      "1 jar each",
      "Salads"
     ],
     [
      "Salami",
      "150 g",
      "Salad 1"
     ]
    ]
   }
  ]
 },
 {
  "store": "Trader Joe's, Whole Foods, specialty",
  "where": "Only what the big stores don't have",
  "groups": [
   {
    "h": "Trader Joe's",
    "items": [
     [
      "Cooked lentils (refrigerated)",
      "1 pack",
      "Greek salad"
     ],
     [
      "Garlic naan (dairy-free)",
      "1 pack, freeze",
      "Butter chicken"
     ],
     [
      "Kabocha squash",
      "if Jewel doesn't have it",
      "Soup"
     ]
    ]
   },
   {
    "h": "World Market (Lincoln Park, or Amazon)",
    "items": [
     [
      "Lyle's golden syrup",
      "1 tin",
      "Anzacs"
     ],
     [
      "Bisto gravy powder",
      "1, optional",
      "Savoury mince"
     ],
     [
      "Watties tomato sauce",
      "1, optional",
      "Sausage rolls, pies"
     ]
    ]
   },
   {
    "h": "Patel Brothers, Devon Ave (or Mariano's international aisle)",
    "items": [
     [
      "Kasuri methi (dried fenugreek leaves)",
      "1 small pack, optional",
      "Butter chicken"
     ],
     [
      "Garam masala",
      "if Jewel's is stale",
      "Butter chicken"
     ]
    ]
   },
   {
    "h": "Optional",
    "items": [
     [
      "Brewer's yeast",
      "3 Tbsp",
      "PB bites. Whole Foods or Amazon."
     ]
    ]
   }
  ]
 }
];

export const REHEAT: ReheatRow[] = [
 [
  "Any bag or block",
  "Stir halfway. Steaming hot in the middle before eating.",
  "—",
  "Times are for 1000–1200 W."
 ],
 [
  "Scones",
  "30–40 s, paper towel",
  "160 °C / 325 °F, 5–6 min",
  "Air fryer is better."
 ],
 [
  "Muffins",
  "30–45 s",
  "150 °C / 300 °F, 5 min",
  ""
 ],
 [
  "Breakfast sandwich",
  "Unwrap, paper towel: 60 s, flip, 30–45 s",
  "175 °C / 350 °F: 8 min in foil + 3 min open",
  ""
 ],
 [
  "Breakfast burrito",
  "Unwrap, damp paper towel: 2–3 min, turn once",
  "180 °C / 350 °F: 12–15 min in foil + 3 min open",
  "Air fryer is better."
 ],
 [
  "Sausage rolls, baked",
  "No",
  "180 °C / 350 °F, 8–10 min",
  "Raw: bake 200 °C / 400 °F, 35–40 min."
 ],
 [
  "Mini mince pies",
  "2 min, then 3 min air fryer",
  "170 °C / 340 °F, 15–18 min from frozen",
  "1 vent plain, 2 vents cheese."
 ],
 [
  "Meatballs, 5",
  "90 s covered",
  "180 °C / 350 °F, 8 min",
  ""
 ],
 [
  "Anzacs, PB bites",
  "10 s or none",
  "—",
  "Eat frozen."
 ],
 [
  "Lasagne, loaf pan",
  "Tip into a bowl: 4 min at 50% + 3–4 min full, rest 2",
  "Thawed: 170 °C / 340 °F, 15 min",
  "Or thaw overnight, 4 min."
 ],
 [
  "Pasta bake",
  "6–8 min covered, stir halfway",
  "Thawed: 170 °C / 340 °F, 15 min",
  ""
 ],
 [
  "Enchiladas, 2",
  "4–5 min covered",
  "—",
  "Wrapped in pairs: straight from frozen. Whole pan: thaw overnight, oven 180 °C, 25 min."
 ],
 [
  "Stroganoff",
  "Bag in warm water 5 min, then 4–5 min covered",
  "—",
  "Stir in sour cream. Over rice."
 ],
 [
  "Savoury mince, bag",
  "3 min, stir, 1 min",
  "—",
  "Onto toast."
 ],
 [
  "Shepherd's pie",
  "6–8 min covered",
  "Thawed: 170 °C / 340 °F, 15 min",
  ""
 ],
 [
  "Butter chicken",
  "5–6 min covered, stir halfway",
  "—",
  "Rice and naan."
 ],
 [
  "Pumpkin soup",
  "Mug: 3 min, break up, 3 min",
  "—",
  ""
 ],
 [
  "Rice",
  "Tear corner, splash of water, 2–3 min",
  "—",
  ""
 ],
 [
  "Bolognese, bag",
  "Warm water 5 min, then 4 min, stir, 2–3 min more",
  "—",
  "Over pasta or with meatballs."
 ]
];

