import { useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyHeader from "@/components/main/DashboardCompany/CompanyHeader";
import OfferForm from "@/components/form/OfferForm";
import { categoriesById } from "@/data/categoriesById";

import type { OfferData } from "@/schemas/offer.schema";
import Footer from "@/components/Footer";
import { GetAnOfferOfACompanyRequest, UpdateofferRequest } from "@/request/offerRequest"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const CompanyModifyOfferPage = () => {
  const queryClient = useQueryClient()
  const { companyId, offerId } = useParams<{ companyId: string; offerId: string }>();
  const id = Number(companyId);
  const oid = Number(offerId);
  const navigate = useNavigate();


  const getAnOfferOfACompanyQuery = useQuery({
    queryKey: ["anofferofacompany", id, oid],
    queryFn: () => GetAnOfferOfACompanyRequest(id, oid),
  });


  const updateOfferMutation = useMutation({
    mutationFn: UpdateofferRequest,
    onSuccess() {

      toast("Modification de l'offre reussie", {
        position: "top-center",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      queryClient.invalidateQueries({queryKey:["allofferofcompany"]})
      navigate(`/company/${id}/offers`); 
    },
    onError(error) {


      toast(error.message, {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    },
  })

  if (getAnOfferOfACompanyQuery.isPending) {
    return;
  }




  const offer = getAnOfferOfACompanyQuery.data;


  const handleUpdate = (data: OfferData) => {
    const payload = { ...data, id: oid, company_id: id, end_at: data.end_at ? data.end_at.split("T")[0] : null,  };
    console.log("PATCH /job_offers/" + oid, payload);
    console.log(data);
    
    updateOfferMutation.mutate({id:id.toString(), offerId:oid.toString(), body:payload})
    // await api.patch(`/job_offers/${oid}`, payload)
  };

  if (!offer) {
    return (
      <>
        <Header />
        <main className="p-6">Offre introuvable.</main>
      </>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <div className="relative min-h-[90vh] p-5 md:px-10 bg-primary/10">
        <CompanyHeader id={id} name={offer.company.name} logo={offer.company.logo} />
        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center"></h2>
              <OfferForm
                title="Modifier l'offre"
                categoriesById={categoriesById}
                companyId={id}
                initialValues={{
                  title: offer.title,
                  description: offer.description,
                  contract_type: offer.contract_type,
                  study_level: offer.study_level,
                  category_id: offer.category_id,
                  // type date as a string 
                  end_at: (offer.end_at ?? "").slice(0, 10),
                }}
                onSubmit={handleUpdate}
                submitLabel="Enregistrer"
              />
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyModifyOfferPage;
