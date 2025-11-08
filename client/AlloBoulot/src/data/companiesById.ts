import type { CompanyRow, ID } from "@app/db";

export const companiesById: Record<ID, Pick<CompanyRow, "id" | "name" | "logo" | "address" | "text" | "employee_id">> = {
  10: { id: 10, name: "Bauch, Schuppe and Schultz Co", logo: "", address: "Marseille, France", text: "", employee_id: 1 },
  11: { id: 11, name: "Forward Tech SAS", logo: "", address: "Paris, France", text: "", employee_id: 2 },
}; 