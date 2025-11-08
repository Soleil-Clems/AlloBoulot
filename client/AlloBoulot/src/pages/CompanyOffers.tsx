import { useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyHeader from "@/components/main/DashboardCompany/CompanyHeader";
import DashboardOffersList from "@/components/main/DashboardCompany/DashboardOffersList";
import { categoriesById } from "@/data/categoriesById";
import Footer from "@/components/Footer";
import { GetAllCategoriesRequest } from "@/request/categoryRequest";
import { GetAllOfferOfACompanyRequest } from "@/request/offerRequest"
import { useQuery } from "@tanstack/react-query";

const CompanyOffers = () => {
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

  const categoryQuery = useQuery({
    queryKey: ["categorieslist"],
    queryFn: () => GetAllCategoriesRequest(),
  });

  const getAllOfferOfACompanyQuery = useQuery({
    queryKey: ["allofferofcompany", id],
    queryFn: () => GetAllOfferOfACompanyRequest(id),
  });

  if (categoryQuery.isPending || getAllOfferOfACompanyQuery.isPending) {
    return;
  }



  return (
    <>
      <Header />
      <div className="relative min-h-[90vh] p-5 md:px-10 bg-primary/10">
        <CompanyHeader id={id} />
        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center">
                Liste de nos offres
              </h2>

              <DashboardOffersList companyId={id} offers={getAllOfferOfACompanyQuery.data} categories={categoriesById} />

            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyOffers;
