import * as React from "react";
import { useParams } from "react-router";
import Header from "@/components/header/Header";
import DashboardNavBar from "@/components/main/DashboardCompany/DashboardNavBar";
import CompanyUsersTable, { type CompanyEmployeeRow } from "@/components/tables/CompanyUsersTable";
import Footer from "@/components/Footer";

import { useQuery } from "@tanstack/react-query";
import {
  getCompanyWithPeople,
  mapCompanyPeopleToRows,
  updateCompanyMemberRole,
  removeCompanyMember,
} from "@/request/companyEmployeeRequest";

const CompanyEmployeesPage = () => {
  const { companyId } = useParams<{ companyId?: string }>();
  const id = Number(companyId);

  const {
    data: company,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["company-with-people", id],
    queryFn: () => getCompanyWithPeople(id),
    enabled: Number.isFinite(id),
  });

  const rows: CompanyEmployeeRow[] = React.useMemo(
    () => mapCompanyPeopleToRows(company),
    [company]
  );

  const saveRole = async (userId: number, newRole: string) => {
    await updateCompanyMemberRole(id, userId, newRole);
    await refetch();
  };

  const removeEmployee = async (userId: number) => {
    await removeCompanyMember(id, userId);
    await refetch();
  };

  if (isPending) {
    return 
  }

  if (isError) {
    return (
      <>
        <Header />
        <div className="relative min-h-[90vh] p-5 md:px-10 bg-primary/10">
          <p>
            Impossible de charger la compagnie
            {error instanceof Error ? ` : ${error.message}` : "."}
          </p>
        </div>
        <Footer />
      </>
    );
  }

  if (!company) {
    return (
      <>
        <Header />
        <main className="p-6">Compagnie introuvable.</main>
        <Footer />
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
            ) : null}
          </div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 lg:grid-cols-10 my-10">
          <DashboardNavBar id={company.id} />
          <section className="col-span-9">
            <article className="w-full max-w-full overflow-x-auto">
              <h2 className="my-10 md:my-5 text-2xl font-bold text-center">
                Liste d'employés
              </h2>

              {rows.length ? (
                <>
                  <p className="my-5 text-md text-muted-foreground">Total: {rows.length}</p>
                  <CompanyUsersTable
                    data={rows}
                    onSaveRole={saveRole}
                    onRemove={removeEmployee}
                  />
                </>
              ) : (
                <p className="text-muted-foreground my-5 text-md">
                  Aucun employé associé.
                </p>
              )}
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyEmployeesPage;
