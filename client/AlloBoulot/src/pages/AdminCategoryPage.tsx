import { useAdminCategories } from "@/hooks/useAdminCategories";
import CreateCategoryForm from "@/components/form/CreateCategoryForm";
import CategoriesTable from "@/components/tables/CategoriesTable";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import DashboardNavbar from "@/components/main/DashboardAdmin/DashboardNavbar";

export default function AdminCategoriesPage() {
  const {
    filtered,
    error,
    query,
    setQuery,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useAdminCategories();

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 space-y-4 bg-primary/10 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Catégories</h1>
          <DashboardNavbar />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <CreateCategoryForm onCreate={createCategory} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher le nom, icon…"
            className="w-full mt-5 md:mt-0 h-10 md:w-65 rounded-2xl bg-white border px-3 text-sm outline-none focus:ring"
          />
        </div>

        <CategoriesTable
          items={filtered}
          onDelete={(id) => deleteCategory(id).catch((e) => alert(String(e)))}
          onSaveRow={(id, patch) =>
            updateCategory(id, patch).catch((e) => alert(String(e)))
          }
        />
      </main>
      <Footer />
    </div>
  );
}
