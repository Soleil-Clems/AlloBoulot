import { useQuery } from "@tanstack/react-query";
import { getAllMyCompanies } from "@/request/companyRequest";

export const useCompanies = () => {
  return useQuery({
    queryKey: ["mycompanies"],
    queryFn: getAllMyCompanies,
  });
};