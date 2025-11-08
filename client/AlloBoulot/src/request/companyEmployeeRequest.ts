import axios from "axios";
import { customaxios } from "@/lib/customaxios";
import type { ID, CompanyRow, UserRow } from "@app/db";

/** User returned inside company payload with pivot role */
export type UserWithPivot = UserRow & {
  pivot?: {
    company_id: number;
    user_id: number;
    role: string;
    created_at?: string | null;
    updated_at?: string | null;
  };
};

/** Company payload that embeds people (creators + employees) */
export type CompanyWithPeople = CompanyRow & {
  creators?: UserWithPivot[];
  employees?: UserWithPivot[];
};

/** Minimal row shape your CompanyUsersTable expects */
export type CompanyEmployeeRow = {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  role: string;
};

/** GET /companies/:id – with embedded creators/employees */
export async function getCompanyWithPeople(id: ID): Promise<CompanyWithPeople> {
  try {
    const { data } = await customaxios.get<CompanyWithPeople>(`/companies/${id}`);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data as any)?.message ?? err.message);
    throw err;
  }
}

/** Helper: map embedded people to the table rows */
export function mapCompanyPeopleToRows(company?: CompanyWithPeople): CompanyEmployeeRow[] {
  if (!company) return [];
  const pack = [...(company.employees ?? []), ...(company.creators ?? [])];
  return pack.map((u) => ({
    id: u.id,
    user_id: u.id,
    first_name: u.first_name,
    last_name: u.last_name,
    role: u.pivot?.role ?? u.role,
  }));
}

/**
* PATCH /companies/:companyId/change-role
* Body: { user_id: number, role: string }
*/
export async function updateCompanyMemberRole(companyId: ID, userId: ID, role: string) {
  try {
    const response = await customaxios.patch(`/companies/${companyId}/change-role`, {
      user_id: userId,
      role,
    });

    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (error.response?.data as any) || error.message;
    }
    throw error;
  }
}

/**
* DELETE /companies/:companyId/remove-employee
* Body: { user_id: number }
* Note: axios.delete sends a body via the `data` field in the config.
*/
export async function removeCompanyMember(companyId: ID, userId: ID) {
  try {
    const response = await customaxios.delete(`/companies/${companyId}/remove-employee`, {
      data: { user_id: userId },
    });

    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (error.response?.data as any) || error.message;
    }
    throw error;
  }
}