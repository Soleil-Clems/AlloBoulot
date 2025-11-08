
import { useState } from "react";
import { useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyHeader from "@/components/main/DashboardCompany/CompanyHeader";
import DashboardCandidatsList from "@/components/main/DashboardCompany/DashboardCandidatsList";
import Footer from "@/components/Footer";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


type Status = "pending" | "interview" | "accepted" | "rejected" | "test";
type StatusFilter = "all" | Status;

const STATUS_LABELS: Record<Status, string> = {
  pending: "En attente",
  interview: "Entretien",
  accepted: "Accepté",
  rejected: "Refusé",
  test: "Test",
};

export default function CompanyCandidatsPage() {
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status | undefined>(undefined);




  return (
    <>
      <Header />
      <div className="relative min-h-[90vh] p-5 md:px-10 bg-primary/10">

        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center">
                Liste de candidatures
              </h2>

              <div className="mx-auto mb-5 grid max-w-xl gap-3 sm:grid-cols-3">
                <input
                  id="search"
                  type="search"
                  placeholder="Rechercher (nom, prénom, email, ...)"
                  className="sm:col-span-2 text-sm w-full rounded-md border px-3 bg-white"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <Select
                  value={status}
                  onValueChange={(v) => setStatus(v as Status)}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a value" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tout sélectionner</SelectItem>
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <DashboardCandidatsList
                companyId={id}
                searchTerm={query}
                statusFilter={status === "all" ? "" : status}
              />
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
