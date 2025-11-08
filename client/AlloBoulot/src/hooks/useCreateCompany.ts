import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompanyRequest } from "@/request/companyRequest";

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompanyRequest,
    onSuccess: (data) => {

      
      queryClient.invalidateQueries({ queryKey: ["mycompanies"] });
      
    },
    onError: (error: any) => {
      
      console.error("Erreur lors de la création :", error);
    
    },
  });
};