import { createStore } from "zustand/vanilla";
import type { UserRow, ID } from "@app/db";

type UserStore = {
  items: UserRow[];
  setItems: (items: UserRow[]) => void;
  updateById: (id: ID, patch: Partial<UserRow>) => void;
  removeById: (id: ID) => void;
};

export const userStore = createStore<UserStore>()((set, get) => ({
  items: [],
  setItems: (items) => set({ items }),
  updateById: (id, patch) =>
    set({ items: get().items.map(u => (u.id === id ? { ...u, ...patch } : u)) }),
  removeById: (id) => set({ items: get().items.filter(u => u.id !== id) }),
}));
