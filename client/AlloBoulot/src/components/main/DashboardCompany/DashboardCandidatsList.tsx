import { offers } from "@/data/offers";
import { users } from "@/data/users";
import DashboardCandidatItem, { type CandidatCard } from "./DashboardCandidatItem";
import { useQuery } from "@tanstack/react-query";
import { GetAllCandidatureOfCompanyRequest } from "@/request/jobapplicationRequest"
import type { ApplicationRow } from "@/data/applications";

type Status = "pending" | "interview" | "accepted" | "rejected";
type Props = {
  companyId: number;
  searchTerm?: string;
  statusFilter?: Status | ""; 
};

const norm = (v: unknown) => String(v ?? "").toLowerCase();

function formatDateFR(iso: string) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
export default function DashboardCandidatsList({
  companyId,
  searchTerm = "",
  statusFilter = "",
}: Props) {
  
  const jobApplicationQuery = useQuery({
    queryKey: ["candidatureList", companyId],
    queryFn: () => GetAllCandidatureOfCompanyRequest(companyId),
    enabled: Number.isFinite(companyId),
  });

  if (jobApplicationQuery.isPending) {
    return <p className="text-muted-foreground text-center py-6">Chargement...</p>;
  }

  const applications: ApplicationRow[] = jobApplicationQuery.data ?? [];
  
  

  const cards: CandidatCard[] = applications
    .map((app) => {
    
      if (app.user && app.offer) {
        return {
          id: app.id,
          userName: `${app.user.first_name} ${app.user.last_name}`,
          userEmail: app.user.email,
          userPhone: app.user.phone,
          offerTitle: app.offer.title,
          contractType: app.offer.contract_type,
          studyLevel: app.offer.study_level,
          appliedAt: formatDateFR(app.created_at),
          message: app.message,
          cvUrl: app.resume_ref,
          motivationUrl: app.motivation_ref,
          status: (app.status ?? "pending") as Status,
        } satisfies CandidatCard;
      }
      
      const offer = offers.find((o) => o.id === app.job_offer_id);
      
      if (!offer || offer.company_id !== companyId) {
        console.log("Offer not found or wrong company");
        return null;
      }
      
      const user = users.find((u) => u.id === app.user_id);
      
      if (!user) {
        return null;
      }
      
      return {
        id: app.id,
        userName: `${user.first_name} ${user.last_name}`,
        userEmail: user.email,
        userPhone: user.phone,
        offerTitle: offer.title,
        contractType: offer.contract_type,
        studyLevel: offer.study_level,
        appliedAt: formatDateFR(app.created_at),
        message: app.message,
        cvUrl: app.cv_ref,
        motivationUrl: app.motivation_ref,
        status: (app.status ?? "pending") as Status,
      } satisfies CandidatCard;
    })
    .filter(Boolean) as CandidatCard[];


  if (!cards.length) {
    return (
      <p className="text-muted-foreground text-center py-6">
        Aucun candidat pour l'instant.
      </p>
    );
  }

  const q = searchTerm.trim().toLowerCase();
  const filtered = cards.filter((c) => {
    const matchStatus = statusFilter ? c.status === statusFilter : true;
    if (!q) return matchStatus;
    const hit =
      norm(c.userName).includes(q) ||
      norm(c.userEmail).includes(q) ||
      norm(c.userPhone).includes(q) ||
      norm(c.offerTitle).includes(q) ||
      norm(c.contractType).includes(q) ||
      norm(c.studyLevel).includes(q) ||
      norm(c.status).includes(q) ||
      norm(c.message).includes(q);
    return matchStatus && hit;
  });


  if (!filtered.length) {
    return (
      <p className="text-muted-foreground text-center py-6">
        Aucune correspondance{q ? ` pour « ${searchTerm} »` : ""}{statusFilter ? ` (statut: ${statusFilter})` : ""}.
      </p>
    );
  }

  return (
    <ul className="my-10 grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {filtered.map((c) => (
        <DashboardCandidatItem key={c.id} data={c} />
      ))}
    </ul>
  );
}