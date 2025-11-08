import { useStore } from "zustand";
import { companyStore } from "@/store/company.store";

export const useCompanies = <T,>(selector: (s: ReturnType<typeof companyStore.getState>) => T) =>
  useStore(companyStore, selector);
