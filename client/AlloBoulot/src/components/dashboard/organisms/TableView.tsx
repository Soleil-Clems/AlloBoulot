import React, { useState, useMemo, useEffect, useRef } from "react";
import { StatusBadge } from "../atoms/StatusBadge";
import { useQuery } from "@tanstack/react-query";
import { GetMyApplicationRequest } from "@/request/jobapplicationRequest";
import { StatsSection } from "./StatsSection";
import { ChevronDown, Settings, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const TableView: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const myApplicationQuery = useQuery({
    queryKey: ["myapplication"],
    queryFn: () => GetMyApplicationRequest(),
  });

  const applications = myApplicationQuery.data || [];

  const statusbadges = {
    pending: { label: "En attente", icon: Clock },
    accepted: { label: "Accepté", icon: CheckCircle },
    rejected: { label: "Refusé", icon: XCircle },
    interview: { label: "Entretien", icon: AlertCircle },
    test: { label: "Test", icon: Settings },
  };

  const filteredApps = useMemo(() => {
    if (selectedStatus === "all") return applications;
    return applications.filter((app) => app.status === selectedStatus);
  }, [applications, selectedStatus]);

  // 🔹 Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (myApplicationQuery.isPending) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement des candidatures...</p>
        </div>
      </div>
    );
  }

  if (myApplicationQuery.error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700 font-medium">Erreur lors du chargement</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <StatsSection applications={applications} />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800">
          Tableau récapitulatif
        </h2>

        <div className="relative inline-block text-left" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex justify-between items-center w-56 px-4 py-2.5 bg-white border border-slate-300 rounded-xl shadow-sm text-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            {selectedStatus === "all" ? (
              "Tous les statuts"
            ) : (
              <>
                {React.createElement(statusbadges[selectedStatus].icon, { className: "mr-2 h-4 w-4 text-slate-700" })}
                {statusbadges[selectedStatus].label}
              </>
            )}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden animate-fadeIn">
              <ul className="py-2 text-sm text-slate-700 max-h-60 overflow-auto">
                <li>
                  <button
                    onClick={() => {
                      setSelectedStatus("all");
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 ${selectedStatus === "all" ? "bg-slate-100 font-semibold" : ""}`}
                  >
                    Tous les statuts
                  </button>
                </li>
                {Object.entries(statusbadges).map(([key, badge]) => (
                  <li key={key}>
                    <button
                      onClick={() => {
                        setSelectedStatus(key);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-100 flex items-center gap-2 ${selectedStatus === key ? "bg-slate-100 font-semibold" : ""}`}
                    >
                      {React.createElement(badge.icon, { className: "h-4 w-4 text-slate-700" })}
                      {badge.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4">
        {filteredApps.length} candidature{filteredApps.length > 1 ? "s" : ""}
      </p>
      {filteredApps.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center animate-fadeIn">
          <p className="text-slate-600 text-lg">Aucun résultat trouvé</p>
          <p className="text-slate-500 text-sm mt-2">
            Essayez de sélectionner un autre statut
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fadeIn">
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-sm sm:text-base">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Entreprise</th>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Poste</th>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Catégorie</th>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Date</th>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap font-medium text-slate-800 truncate">{app.offer.company.name}</td>
                    <td className="px-3 sm:px-6 py-4 font-medium text-slate-800 truncate max-w-xs">{app.offer.title}</td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">{app.offer.category?.name ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{app.offer.category.name}</span> : <span className="text-slate-400 text-xs">Non catégorisé</span>}</td>
                    <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-slate-600 whitespace-nowrap">{new Date(app.created_at).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap"><StatusBadge status={app.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
