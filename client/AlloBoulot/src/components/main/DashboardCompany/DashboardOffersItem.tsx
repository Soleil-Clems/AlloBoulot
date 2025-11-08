import { useState } from "react";
import type { JobOfferRow } from "@app/db";
import { Link } from "react-router";
import { Pencil } from "lucide-react";

type Props = {
  companyId: number;
  offer: JobOfferRow;
  categories: Record<number, string>;
};

function formatDate(d: string | null | undefined) {
  if (!d) return "—";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "—";
  return dt.toLocaleDateString("fr-FR", { dateStyle: "medium" });
}

function truncate(text: string, max = 180) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

const DashboardOffersItem = ({ companyId, offer, categories }: Props) => {
  const wasEdited = !!offer.updated_at && offer.updated_at !== offer.created_at;

  const [expanded, setExpanded] = useState(false);
  const MAX = 180;
  const isLong = (offer.description?.length ?? 0) > MAX;
  const textToShow = expanded
    ? offer.description
    : truncate(offer.description, MAX);

  const categoryName = categories?.name || "-";

  return (
    <li className="relative bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-4 right-4">
        <div className="flex gap-3">
          <Link
            to={`/company/${companyId}/modifyOffer/${offer.id}`}
            className=" border-black/50 border-2 rounded-full p-3 duration-300 hover:bg-primary/80 hover:border-transparent hover:text-white"
          >
            <Pencil size={15} />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold">{offer.title}</h3>
        {wasEdited && (
          <div className="text-xs text-gray-500">
            (Modifié le : {formatDate(offer.updated_at)})
          </div>
        )}
      </div>

      <div className="text-sm text-gray-600">
        Catégorie : <strong>{categoryName}</strong>
      </div>

      <div className="text-sm text-gray-600">
        Type de contrat : <strong>{offer.contract_type}</strong>
      </div>

      <div className="text-sm text-gray-600">
        Niveau d’étude : <strong>{offer.study_level}</strong>
      </div>

      <p className="text-sm leading-6 whitespace-pre-wrap">
        {textToShow}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-bold ml-3 cursor-pointer hover:underline"
            aria-expanded={expanded}
            aria-controls={`offer-desc-${offer.id}`}
          >
            {expanded ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </p>

      <div className="text-xs text-gray-500">
        Debut de candidature : {formatDate(offer.created_at)}
      </div>

      <div className="text-xs text-gray-500">
        Fin de candidature : {formatDate(offer.end_at)}
      </div>
    </li>
  );
};

export default DashboardOffersItem;
