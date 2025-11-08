import { Link, useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import { Image, Pencil } from "lucide-react";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "@/request/companyRequest";

const CompanyPage = () => {
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative p-5 md:px-10 bg-primary/10">
        <div className="flex items-center justify-center gap-5 mb-5">
          <div className="flex items-start md:items-center md:justify-center">
            {company.logo ? (
              <img
                src={company.logo}
                alt={`Logo de ${company.name}`}
                className="h-10 lg:h-15 w-10 lg:w-15 rounded-full object-cover border"
              />
            ) : (
              <></>
            )}
          </div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={company.id} />

          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <div className="flex items-center justify-center gap-3">
                <h2 className="my-10 md:my-5 text-2xl font-bold">
                  Ma compagnie
                </h2>
              </div>

              {/* Info card */}
              <div className="relative bg-white rounded-2xl border p-5 grid grid-cols-1 md:grid-cols-4 gap-6">
                <Link
                  to={`/company/${id}/modify`}
                  className="absolute top-7 right-7 border-black/50 border-2 rounded-full p-3 duration-300 hover:bg-primary/80 hover:border-transparent hover:text-white"
                >
                  <Pencil />
                </Link>
                {/* Logo */}
                <div className="flex items-start md:items-center md:justify-center">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={`Logo de ${company.name}`}
                      className="h-24 lg:h-40 w-24 lg:w-40 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="h-24 lg:h-40 w-24 lg:w-40 rounded-full flex items-center justify-center border bg-gray-50 text-gray-500">
                      <Image size={50} />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="md:col-span-3 grid gap-10">
                  <div>
                    <div className="text-sm md:text-base lg:text-lg text-gray-500">
                      Nom
                    </div>
                    <div className="text-base md:text-lg lg:text-xl font-medium">
                      {company.name ?? "—"}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm md:text-base lg:text-lg text-gray-500">
                      Adresse
                    </div>
                    <div className="text-base md:text-lg lg:text-xl">
                      {company.address?.trim() ? company.address : "—"}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm md:text-base lg:text-lg text-gray-500">
                      Description
                    </div>
                    <p className="text-base md:text-lg lg:text-xl whitespace-pre-wrap">
                      {company.description?.trim() ? company.description : "—"}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyPage;
