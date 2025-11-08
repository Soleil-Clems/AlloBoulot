import * as React from "react";
import { useStore } from "zustand";
import { userStore } from "@/store/user.store";
import {
  getUsers,
  deleteUser as apiDeleteUser,
  updateUserRole as apiUpdateUserRole,
} from "@/request/userRequest";
import type { UserRow, UserRole } from "@app/db";

export function useAdminUsers() {
  const items      = useStore(userStore, (s) => s.items);
  const setItems   = useStore(userStore, (s) => s.setItems);
  const removeById = useStore(userStore, (s) => s.removeById);
  const updateById = useStore(userStore, (s) => s.updateById);

  const [loading, setLoading] = React.useState(false);
  const [error,   setError]   = React.useState<string | null>(null);
  const [query,   setQuery]   = React.useState("");

  const refresh = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers(); 
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [setItems]);

  React.useEffect(() => { void refresh(); }, [refresh]);

  const deleteUser = React.useCallback(async (id: number) => {
    const prev = items as UserRow[];
    removeById(id);          
    try {
      await apiDeleteUser(id);
    } catch (e) {
      setItems(prev);
      throw e;
    }
  }, [items, removeById, setItems]);

  const saveRole = React.useCallback(async (id: number, role: UserRole) => {
    const prev = items as UserRow[];
    updateById(id, { role });
    try {
      const updated = await apiUpdateUserRole(id, role);
      updateById(id, updated);
    } catch (e) {
      setItems(prev);
      throw e;
    }
  }, [items, updateById, setItems]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (u) =>
        u.first_name?.toLowerCase().includes(q) ||
        u.last_name?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q)
    );
  }, [items, query]);

  return { items, filtered, loading, error, query, setQuery, refresh, deleteUser, saveRole };
}
