export type Tag = "hand" | "nz" | "df" | "opt";

export interface Op {
  /** inclusive [firstRow, lastRow] of ingredient rows this operation spans */
  r: [number, number];
  t: string;
}

export interface Source {
  name: string;
  /** empty string when there is no single page to point at (traditional recipes) */
  url: string;
  /** how this version differs from the source */
  note?: string;
  /** a second source the method also draws on */
  also?: { name: string; url: string };
}

export interface Recipe {
  id: string;
  name: string;
  yield: string;
  day: 1 | 2 | 3;
  tags: Tag[];
  pre?: string[];
  ings: string[];
  cols: Op[][];
  freeze: string;
  mw: string;
  af: string;
  notes: [string, string][];
  source?: Source;
  /** changes made in the audit, shown on the card */
  audit?: string[];
}

export type Rule = [string, string];

export interface Salad {
  name: string;
  beans: string;
  protein: string;
  veg: string;
  briny: string;
  herbs: string;
  dressing: string;
  cheese: string;
}

export interface CookDay {
  n: number;
  title: string;
  when: string;
  goal: string;
  /** [time, action, detail] */
  steps: [string, string, string][];
}

export interface StoreGroup {
  h: string;
  /** [item, quantity, used for] */
  items: [string, string, string][];
}

export interface Store {
  store: string;
  where: string;
  groups: StoreGroup[];
}

/** [item, microwave, air fryer, notes] */
export type ReheatRow = [string, string, string, string];

export interface Tick {
  key: string;
  on: boolean;
  who: string | null;
  ts: number;
}
