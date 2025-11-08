import { createStore } from "zustand/vanilla";
import type { CompanyRow, ID } from "@app/db";

type CompanyStore = {
  items: CompanyRow[];
  setItems: (items: CompanyRow[]) => void;
  removeById: (id: ID) => void;
};

export const companyStore = createStore<CompanyStore>()((set, get) => ({
  items: [],
  setItems: (items) => set({ items }),
  removeById: (id) => set({ items: get().items.filter((c) => c.id !== id) }),
}));
