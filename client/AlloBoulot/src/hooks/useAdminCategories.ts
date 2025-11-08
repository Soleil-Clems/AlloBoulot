import * as React from "react";
import { useStore } from "zustand";
import { categoryStore } from "@/store/category.store";
import {
  getCategories,
  createCategory as apiCreateCategory,
  updateCategory as apiUpdateCategory,
  deleteCategory as apiDeleteCategory,
  type CreateCategoryInput,
  type UpdateCategoryInput,
} from "@/request/categoryRequest";
import type { CategoryRow } from "@app/db";

export function useAdminCategories() {
  const items = useStore(categoryStore, (s) => s.items);
  const setItems = useStore(categoryStore, (s) => s.setItems);
  const upsertOne = useStore(categoryStore, (s) => s.upsertOne);
  const updateById = useStore(categoryStore, (s) => s.updateById);
  const removeById = useStore(categoryStore, (s) => s.removeById);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");

  const refresh = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCategories();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [setItems]);

  React.useEffect(() => { void refresh(); }, [refresh]);

  const createCategory = React.useCallback(async (input: CreateCategoryInput) => {
    const created = await apiCreateCategory(input);
    upsertOne(created);
    return created;
  }, [upsertOne]);

  const updateCategory = React.useCallback(async (id: number, patch: UpdateCategoryInput) => {
    const prev = items as CategoryRow[];
    updateById(id, patch);
    try {
      const updated = await apiUpdateCategory(id, patch);
      upsertOne(updated);
    } catch (e) {
      setItems(prev);
      throw e;
    }
  }, [items, updateById, upsertOne, setItems]);

  const deleteCategory = React.useCallback(async (id: number) => {
    const prev = items as CategoryRow[];
    removeById(id);
    try {
      await apiDeleteCategory(id);
    } catch (e) {
      setItems(prev);
      throw e;
    }
  }, [items, removeById, setItems]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((c) =>
      (c.name ?? "").toLowerCase().includes(q) ||
      (c.icon ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  return {
    items,
    filtered,
    loading,
    error,
    query,
    setQuery,
    refresh,
    createCategory,
    updateCategory,
    deleteCategory,
  };
}
