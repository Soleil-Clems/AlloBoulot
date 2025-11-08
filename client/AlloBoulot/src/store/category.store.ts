import { createStore } from "zustand/vanilla";
import type { CategoryRow, ID } from "@app/db";

type CategoryStore = {
  items: CategoryRow[];
  setItems: (items: CategoryRow[]) => void;
  upsertOne: (row: CategoryRow) => void;
  updateById: (id: ID, patch: Partial<CategoryRow>) => void;
  removeById: (id: ID) => void;
};

export const categoryStore = createStore<CategoryStore>()((set, get) => ({
  items: [],
  setItems: (items) => set({ items }),
  upsertOne: (row) =>
    set({
      items: (() => {
        const list = get().items;
        const idx = list.findIndex((x) => x.id === row.id);
        if (idx === -1) return [row, ...list];
        const copy = list.slice();
        copy[idx] = { ...copy[idx], ...row };
        return copy;
      })(),
    }),
  updateById: (id, patch) =>
    set({ items: get().items.map((x) => (x.id === id ? { ...x, ...patch } : x)) }),
  removeById: (id) => set({ items: get().items.filter((x) => x.id !== id) }),
}));
