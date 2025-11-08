import Header from "@/components/header/Header";
import PostedAtMark from "@/components/main/SectionJob/PostedAtMark";
import CompanyLogo from "@/components/main/SectionJob/CompanyLogo";
import OfferTitle from "@/components/main/SectionJob/OfferTitle";
import CompanyName from "@/components/main/SectionJob/CompanyName";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";
import { FaUser } from "react-icons/fa";
import { FaBriefcase, FaRegClock, FaGraduationCap } from "react-icons/fa6";
import OfferAsideDetail from "@/components/main/SectionJob/OfferAsideDetail";
import OfferMainDetail from "@/components/main/SectionJob/OfferMainDetail";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { GetAnOfferRequest } from "@/request/offerRequest";
import { useEffect } from "react";

const OfferPage = () => {
  const { companyId, offerId } = useParams<{ companyId: string; offerId: string }>();

  const companyIdNum = Number(companyId);
  const offerIdNum = Number(offerId);


  const GetAnOfferQuery = useQuery({
    queryKey: ["offer", companyId, offerId],
    queryFn: () => GetAnOfferRequest(companyIdNum, offerIdNum),
  });


  if (GetAnOfferQuery.isPending) {
    return
  }

  if (GetAnOfferQuery.error) {
    return (
      <>
        <Header />
        <main className="p-6">
          Offre introuvable pour cette entreprise.
          <div className="mt-4">
            <Button asChild><Link to="/">Retour</Link></Button>
          </div>
        </main>
      </>
    );
  }



  const categoryName = GetAnOfferQuery.data.category?.name || "-";
  const categoryIcon = GetAnOfferQuery.data.category?.icon || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col justify-self-center mx-auto lg:grid lg:grid-cols-3 gap-5 w-full max-w-lg md:max-w-[70%] rounded-xl shadow-sm duration-100 m-5 p-5">
        <main className="col-span-2 flex flex-col gap-5 p-5">
          <PostedAtMark timestamp={GetAnOfferQuery.data.created_at}/>

          <div className="grid grid-cols-1 md:grid-cols-10 md:items-center gap-5 w-full">
            <CompanyLogo />
            <div className="flex flex-col md:col-span-9 gap-2">
              <OfferTitle title={GetAnOfferQuery.data.title} />
              <CompanyName name={GetAnOfferQuery.data.company.name ?? "Entreprise inconnue"} />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:gap-10">
              <OfferMainDetail icon={categoryIcon} value={categoryName} />
              <OfferMainDetail icon={"clock"} value={GetAnOfferQuery.data.contract_type} />
              <OfferMainDetail icon={"graduation-cap"} value={GetAnOfferQuery.data.study_level} />
            </div>

            <Button asChild className="flex md:justify-end lg:hidden">
              <Link to={`/jobAplication/company/${companyId}/offer/${offerId}`}>Postuler</Link>
            </Button>
          </div>

          <div className="mt-5">
            <p>{GetAnOfferQuery.data.description}</p>
          </div>
        </main>

        <aside>
          <Button asChild className="lg:flex w-full mt-35 mb-5 hidden">
            <Link to={`/jobAplication/company/${companyId}/offer/${offerId}`}>Postuler</Link>
          </Button>

          <section className="flex flex-col gap-5 w-full bg-primary/10 rounded-2xl p-5">
            <h2 className="text-xl font-semibold">Aperçu du poste</h2>
            <ul className="flex flex-col gap-5">
              <OfferAsideDetail Icon={FaUser} label="Nom de poste" value={GetAnOfferQuery.data.title} />
              <OfferAsideDetail Icon={FaBriefcase} label="Catégorie" value={categoryName} />
              <OfferAsideDetail Icon={FaRegClock} label="Type de contrat" value={GetAnOfferQuery.data.contract_type} />
              <OfferAsideDetail Icon={FaGraduationCap} label="Type de diplôme" value={GetAnOfferQuery.data.study_level} />
            </ul>
          </section>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default OfferPage;
