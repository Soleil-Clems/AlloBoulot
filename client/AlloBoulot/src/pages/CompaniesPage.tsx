import { useState } from "react";
import { Link } from "react-router";
import { useCompanies } from "@/hooks/useCompanies";
import CompanyCreateForm from "@/components/dashboard/atoms/CompanyCreateForm";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "lucide-react"
import type { CompanyRow} from "@app/db";
import { useQuery } from "@tanstack/react-query";
import { getAllMyCompanies } from "@/request/companyRequest";

const CompaniesPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["mycompanies"],
    queryFn: getAllMyCompanies,
  });
  
  const [showForm, setShowForm] = useState(false);


  return (
    <section className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">Mes Sociétés</h1>
        <Button onClick={() => setShowForm(true)}>+ Nouvelle Société</Button>
      </div>


      {isPending && <p className="text-slate-500">Chargement des sociétés...</p>}


      {isError && <p className="text-red-500">Erreur lors du chargement.</p>}


      {!isPending && !isError && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.length > 0 ? (
            data.map((company: CompanyRow) => {
              const logo = company.logo

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all group"
                >
                  {/* Logo */}
                  <div className="h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
                    {logo ?
                      <img
                        src={logo}
                        alt={company.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/default-logo.png";
                        }}
                        className="object-contain h-24 w-auto group-hover:scale-105 transition-transform duration-300"
                      /> :
                      <div className="h-24 lg:h-40 w-24 lg:w-40 rounded-full flex items-center justify-center border bg-gray-50 text-gray-500">
                        <Image size={50} />
                      </div>
                    }
                  </div>

                  {/* Infos */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-slate-800 mb-1 line-clamp-1">
                      {company.name}
                    </h2>

                    {company.address && (
                      <p className="text-sm text-slate-500 mb-2 line-clamp-1">
                        {company.address}
                      </p>
                    )}

                    <p className="text-sm text-slate-600 line-clamp-3 mb-3">
                      {company.description || "Aucune description disponible."}
                    </p>

                    <Link
                      to={`/company/${company.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      Voir plus →
                    </Link>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-slate-500">Aucune société pour le moment.</p>
          )}
        </div>
      )}

      {/* Modal formulaire */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg max-w-lg w-full mx-4"
            >
              <CompanyCreateForm
                onClose={() => setShowForm(false)}
                onCreated={() => setShowForm(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompaniesPage;