import { useNavigate, useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyForm from "@/components/form/CompanyForm";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "@/request/companyRequest";

const CompanyModifyPage = () => {
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

  const navigate = useNavigate();

  const handleUpdate = async () => {
    
    
    navigate(`/company/${id}`, {
      replace: false,
      state: { from: "edit" },
    });
  };

  const {
    data: company,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompany(id),
    enabled: Number.isFinite(id),
  });

  if (isLoading) {
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
      <Header />
      <div className="relative min-h-[90vh] p-5 md:px-10 bg-primary/10">
        <div className="flex items-center justify-center gap-5 mb-5">
          {company.logo ? (
            <img
              src={company.logo}
              alt={`Logo de ${company.name}`}
              className="h-10 lg:h-15 w-10 lg:w-15 rounded-full object-cover border"
            />
          ) : (
            <></>
          )}
          <h1 className="text-3xl font-bold">{company.name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center"></h2>

              <CompanyForm
                id={id}
                title="Modifier la compagnie"
                initialValues={{
                  name: company?.name ?? "",
                  address: company?.address ?? "",
                  text: company?.description ?? "",
                }}
                submitLabel="Enregistrer"
                cancelTo={`/company/${id}`}
                onSubmit={handleUpdate}
              />
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyModifyPage;
