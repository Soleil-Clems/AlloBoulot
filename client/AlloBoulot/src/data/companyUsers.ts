import type { EmployeeRow, UserRow, ID } from "@app/db";
import { users } from "@/data/users";
import { employees } from "@/data/employees";
import { companiesById } from "@/data/companiesById";

export type EmployeeWithUser = EmployeeRow & {
  user: Pick<UserRow, "id" | "first_name" | "last_name">;
};

export function getCompanyUsers(companyId: ID): EmployeeWithUser[] {
  const company = companiesById[companyId];
  if (!company?.employee_id) return [];
  const emp = employees.find((e) => e.id === company.employee_id);
  if (!emp) return [];
  const user = users.find((u) => u.id === emp.user_id);
  if (!user) return [];
  return [{ ...emp, user: { id: user.id, first_name: user.first_name, last_name: user.last_name } }];
}
