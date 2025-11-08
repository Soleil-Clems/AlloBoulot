import * as React from "react";
import { useStore } from "zustand";
import { userStore } from "@/store/user.store";
import { getUsers, deleteUser, updateUserRole } from "@/request/userRequest";
import UsersRoleTable from "@/components/tables/UsersRoleTable";
import type { UserRole, UserRow } from "@app/db";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import DashboardNavbar from "@/components/main/DashboardAdmin/DashboardNavbar";

export default function AdminUsersPage() {
  const items = useStore(userStore, (s) => s.items);
  const removeById = useStore(userStore, (s) => s.removeById);
  const updateById = useStore(userStore, (s) => s.updateById);

  const [err, setErr] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setErr(null);
        const data = await getUsers();
        if (!mounted) return;
        userStore.setState({ items: Array.isArray(data) ? data : [] });
      } catch (e) {
        if (!mounted) return;
        setErr((e as Error).message);
      } 
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDelete = async (id: number) => {
    const prev = items as UserRow[];
    removeById(id);
    try {
      await deleteUser(id);
    } catch (e) {
      userStore.setState({ items: prev });
      alert((e as Error).message);
    }
  };

  const handleSaveRole = async (id: number, role: UserRole) => {
    const prev = items as UserRow[];
    updateById(id, { role });
    try {
      const updated = await updateUserRole(id, role);
      updateById(id, updated);
    } catch (e) {
      userStore.setState({ items: prev });
      alert((e as Error).message);
    }
  };

  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter(
        (u) =>
          u.first_name?.toLowerCase().includes(q) ||
          u.last_name?.toLowerCase().includes(q) ||
          u.email?.toLowerCase().includes(q)
      )
    : items;

  if (err) return <div className="p-6 text-red-600">Error: {err}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 space-y-4 bg-primary/10 p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Utilisateurs</h1>
            <DashboardNavbar />
          </div>
        <div className="flex flex-col gap-2 md:justify-end sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher le nom, email…"
              className="h-10 w-full md:w-65 rounded-2xl bg-white border px-3 text-sm outline-none focus:ring"
            />
            {query && (
              <Button
                onClick={() => setQuery("")}
                variant="outline"
                className="text-sm hover:bg-primary/70 hover:text-white"
              >
                Annuler
              </Button>
            )}
          </div>
        </div>

        <UsersRoleTable
          items={filtered ?? []}
          onDelete={handleDelete}
          onSaveRole={handleSaveRole}
        />
      </main>
      <Footer />
    </div>
  );
}
