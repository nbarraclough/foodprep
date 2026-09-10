import { DAYS, MEALS, REHEAT, RULES, SALADS, SHOP, SNACKS } from "./source-data";
import type { Recipe, Tag } from "./types";

export { DAYS, MEALS, REHEAT, RULES, SALADS, SHOP, SNACKS };

export const RECIPES: Recipe[] = [...SNACKS, ...MEALS];
export const byId = (id: string): Recipe | undefined => RECIPES.find((r) => r.id === id);

export const TAG_LABEL: Record<Tag, string> = {
  hand: "One-handed",
  nz: "NZ",
  df: "Dairy-free",
  opt: "If room",
};

export const kind = (r: Recipe): "snack" | "meal" => (SNACKS.includes(r) ? "snack" : "meal");

/** Keys are shared between devices, so they must be stable and match /^[a-z0-9][a-z0-9:-]*$/. */
export const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

export const madeKey = (id: string) => `r:${id}`;
export const ingKey = (id: string, i: number) => `i:${id}:${i}`;
export const ruleKey = (i: number) => `rule:${i}`;
export const stepKey = (day: number, time: string) => `d${day}:${slug(time)}`;
export const shopKey = (store: string, item: string) => `s:${slug(store)}:${slug(item)}`;

export const allShopKeys = (): string[] =>
  SHOP.flatMap((st) => st.groups.flatMap((g) => g.items.map((it) => shopKey(st.store, it[0]))));

export const storeShopKeys = (store: string): string[] => {
  const st = SHOP.find((s) => s.store === store);
  return st ? st.groups.flatMap((g) => g.items.map((it) => shopKey(store, it[0]))) : [];
};

export interface LinearStep {
  what: string;
  with: string[];
  all: boolean;
}

/** Turn the operations grid into an ordered list of steps for phone-sized screens and print. */
export function linearize(r: Recipe): LinearStep[] {
  const n = r.ings.length;
  const out: LinearStep[] = [];
  for (const col of r.cols) {
    const ops = [...col].sort((a, b) => a.r[0] - b.r[0]);
    for (const op of ops) {
      const all = op.r[0] === 0 && op.r[1] === n - 1;
      out.push({ what: op.t, with: all ? [] : r.ings.slice(op.r[0], op.r[1] + 1), all });
    }
  }
  return out;
}

export const PLAN = {
  title: "The October Freezer",
  lede:
    "Freezer plan for the baby due 4 October. Three cook days, about 48 dinners and 230 snacks. Everything reheats in the microwave or air fryer. Nothing is spicy, there is no fish, and every home-made recipe works without dairy. Cheese is optional and marked.",
  facts: [
    { k: "Cook days", v: "Sat 13 · Sat 20 · Sun 21 Sept", s: "26–27 Sept is a spare weekend." },
    { k: "Dinners", v: "~48 portions", s: "10 dishes. The pasta bake is marked “if room”." },
    { k: "Snacks", v: "~230 pieces", s: "11 kinds, all eaten with one hand." },
    { k: "Freezer", v: "~110 L of 255 L", s: "Frigidaire FRSS2623AS freezer side. Two shelves, four door bins, narrow." },
  ],
  freezer: [
    ["Top shelf", "Snack bin: scones, muffins, Anzacs, PB bites, meatballs."],
    ["Middle shelf", "Breakfast sandwiches, burritos, sausage rolls, mince pies, Costco egg bites (these contain cheese)."],
    ["Bottom shelf", "Lasagne loaf pans, enchilada pans, shepherd's pie, pasta bake tubs."],
    ["Door bins", "Flat bags standing up: bolognese, savoury mince, stroganoff, butter chicken, soup, rice."],
  ] as [string, string][],
  words: [
    ["Mince", "ground beef"],
    ["Kumara", "sweet potato"],
    ["Tomato sauce", "ketchup"],
    ["Cornflour", "cornstarch"],
    ["Spring onion", "scallion"],
    ["Tasty cheese", "sharp cheddar"],
    ["Pumpkin", "kabocha or butternut squash"],
    ["Shepherd's pie", "cottage pie, strictly, since it is beef"],
  ] as [string, string][],
};

/** Changes from the September 2026 audit that are not tied to one recipe card. */
export const AUDIT_NOTES: string[] = [
  "Shopping list: added 24 taco-size tortillas (they were missing), a fifth 8×8 foil pan, a second tube of tomato paste, a fourth can of black beans, muffin liners, cocoa, parmesan, freezer tubs and 30+ quart bags.",
  "Day 1: puff pastry now goes into the fridge on Friday night. It needs about 4 hours to thaw and the old plan gave it 80 minutes.",
  "Day 2: savoury mince finishes closer to 10:45 than 10:25, and the pie portion chills in the freezer, not the fridge, so it is cold by 11:15. Roast vegetables and meatballs go into the fridge at noon rather than sitting out until 13:00.",
  "Day 3: the pasta bake sauce is now surplus bolognese from Day 2, which takes a pot off the stove at 11:00 when four other things were already on.",
  "Reheat guide: microwave times for dense frozen blocks (pasta bake, shepherd's pie, butter chicken, soup, bolognese) went up. Always stir and check it is steaming hot in the middle.",
  "Bean salads keep 3–4 days with cooked chicken, not 4–5.",
  "Worcestershire sauce contains anchovy. If “no fish” is an allergy rather than a preference, buy an anchovy-free brand (Annie's or Wizard's).",
];

export const CREDITS =
  "Bean salad method: Violet Witchel. Mince pie method adapted from Dished by Kate and The Kiwi Country Girl; sausage rolls from The Kiwi Country Girl. Breakfast sandwich egg method: The Kitchn. Enchilada sauce adapted from Cookie and Kate. PB bites adapted from The BakerMama. Scones are Edmonds-style. Anzac biscuits use the traditional proportions. Sous vide times are safe holds; do not shorten them.";
