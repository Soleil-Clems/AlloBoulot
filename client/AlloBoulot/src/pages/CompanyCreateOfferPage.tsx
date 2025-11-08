import { useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyHeader from "@/components/main/DashboardCompany/CompanyHeader";
import OfferForm from "@/components/form/OfferForm";
import { categoriesById } from "@/data/categoriesById";
import type { OfferData } from "@/schemas/offer.schema";
import Footer from "@/components/Footer";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getCompany } from "@/request/companyRequest";
import { ToastContainer, toast } from 'react-toastify';
import { CreateofferRequest } from "@/request/offerRequest";
import { useNavigate } from 'react-router';


const CompanyCreateOfferPage = () => {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

  const createOfferMutation = useMutation({
    mutationFn: CreateofferRequest,
    onSuccess(data) {

      toast("Création de l'offre réussie", {
        position: "top-center",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
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
      });
    },
  })

  const handleCreate = (data: OfferData) => {
    const payload = { ...data, end_at: data.end_at ? data.end_at.split("T")[0] : null, };
    createOfferMutation.mutate({ id: id.toString(), body: payload })
  };

  const {
    data: company,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompany(id),
    enabled: Number.isFinite(id),
  });

  if (isPending) {
    return;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative p-5 md:px-10 bg-primary/10">
          <p>
            Impossible de charger la compagnie
            {error instanceof Error ? ` : ${error.message}` : "."}
          </p>
        </main>
        <Footer />
      </div>
    );
  }




  if (!company) {
    return (
      <>
        <Header />
        <main className="p-6">Compagnie introuvable.</main>
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
        <CompanyHeader id={id} name={company.name} logo={company.logo} />
        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center"></h2>
              <OfferForm
                title="Créer une offre"
                categoriesById={categoriesById}
                companyId={id}
                onSubmit={handleCreate}
                submitLabel="Créer l'offre"
              />
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyCreateOfferPage;
