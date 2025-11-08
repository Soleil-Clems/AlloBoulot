import * as React from "react";
import { useStore } from "zustand";
import { companyStore } from "@/store/company.store";
import { getCompanies, deleteCompany } from "@/request/companyRequest";
import CompaniesFormTable from "@/components/tables/CompaniesFormTable";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import DashboardNavbar from "@/components/main/DashboardAdmin/DashboardNavbar";
import { Button } from "@/components/ui/button";

export default function AdminCompanyPage() {
  const items = useStore(companyStore, (s) => s.items);
  const setItems = useStore(companyStore, (s) => s.setItems);
  const removeById = useStore(companyStore, (s) => s.removeById);

  const [err, setErr] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        setErr(null);
        setItems(await getCompanies());
      } catch (e) {
        setErr((e as Error).message);
      }
    })();
  }, [setItems]);

  const handleDelete = async (id: number) => {
    const prev = items;
    removeById(id);
    try {
      await deleteCompany(id);
    } catch (e) {
      setItems(prev);
      alert((e as Error).message);
    }
  };

  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter((c) => c.name?.toLowerCase().includes(q))
    : items;

  if (err) return <div className="p-6 text-red-600">Error: {err}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 space-y-4 bg-primary/10 p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Companies</h1>
            <DashboardNavbar />
          </div>
        <div className="flex flex-col gap-2 md:justify-end sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher le nom,…"
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

        <CompaniesFormTable items={filtered} onDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
}
