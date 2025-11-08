import type { EmployeeRow } from "@app/db";
import { users } from "@/data/users";

export const employees: EmployeeRow[] = [
  {
    id: 1,
    user_id: users[0].id, // user with id 1 (Alice Durand from your users array)
    post_name: "RH",
    role: "rh",
    created_at: "2025-03-20T09:00:00Z",
    updated_at: "2025-03-20T09:00:00Z",
  },
  {
    id: 2,
    user_id: users[1].id, // user with id 2 (Benoît Martin from your users array)
    post_name: "RH",
    role: "rh",
    created_at: "2025-03-20T09:00:00Z",
    updated_at: "2025-03-20T09:00:00Z",
  },
];