import Header from "@/components/header/Header";
import { useParams, Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import ApplyForm from "@/components/form/ApplyForm";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { GetAnOfferRequest } from "@/request/offerRequest";
import { Briefcase, Building2, ArrowLeft, Loader2, MapPin, Clock, Euro } from "lucide-react";

const ApplyJobPage = () => {
  const { user } = useAuth();
  const { companyId, offerId } = useParams<{ companyId: string; offerId: string }>();

  const userId: number = user.id;
  const companyIdNum = Number(companyId);
  const offerIdNum = Number(offerId);

  const GetAnOfferQuery = useQuery({
    queryKey: ["offer"],
    queryFn: () => GetAnOfferRequest(companyIdNum, offerIdNum),
  });

  if (GetAnOfferQuery.isPending) {
    return (
      <>
        <Header />
        <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <p className="text-lg text-gray-600 font-medium">Chargement de l'offre...</p>
          </div>
        </div>
      </>
    );
  }

  if (GetAnOfferQuery.error) {
    return (
      <>
        <Header />
        <main className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Offre introuvable</h2>
              <p className="text-gray-600">Cette offre n'existe pas ou n'est plus disponible pour cette entreprise.</p>
              <Link
                to="/"
                className="mt-4 flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const offer = GetAnOfferQuery.data;
  const company = GetAnOfferQuery.data.company;

  return (
    <>
      <Header />
      <section className="min-h-[90vh] flex justify-center items-start p-5 py-12 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="w-full max-w-7xl">
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium group mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour aux offres</span>
          </Link>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-6">
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-6">
                <div className="flex flex-col gap-6">
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full self-start">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Offre d'emploi</span>
                  </div>

                
                  <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                      {offer.title}
                    </h1>
                  </div>

              
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Entreprise</p>
                      <p className="text-xl font-bold text-gray-800">{company.name}</p>
                    </div>
                  </div>

              
                  <div className="space-y-3 pt-4">
                    {offer.location && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{offer.location}</span>
                      </div>
                    )}
                    {offer.contractType && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-medium">{offer.contractType}</span>
                      </div>
                    )}
                    {offer.salary && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Euro className="w-5 h-5 text-primary" />
                        <span className="font-medium">{offer.salary}</span>
                      </div>
                    )}
                  </div>

                  {offer.description && (
                    <>
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-800">Description du poste</h3>
                        <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
            
              <div className="flex justify-center transform hover:scale-[1.01]transition-transform duration-300">
                <ApplyForm companyId={companyIdNum} offerId={offerIdNum} userId={userId} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyJobPage;