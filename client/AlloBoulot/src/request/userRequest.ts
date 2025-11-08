import axios from "axios";
import { customaxios } from "@/lib/customaxios";
import type { UserRow, ID, UserRole } from "@app/db";

type Paginated<T> = {
  current_page: number;
  data: T[];
  total: number;
  per_page: number;
};

type ApiListResponse<T> = {
  error: boolean;
  message: string;
  data: Paginated<T>;
};

type ApiItemResponse<T> = {
  error: boolean;
  message: string;
  data: T;
};

export async function getUsers(): Promise<UserRow[]> {
  try {
    const { data } = await customaxios.get<ApiListResponse<UserRow>>("/users");
    return Array.isArray(data?.data?.data) ? data.data.data : [];
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}

export async function deleteUser(id: ID): Promise<void> {
  try {
    await customaxios.delete<void>(`/users/${id}`);
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}

export async function updateUserRole(id: ID, role: UserRole): Promise<UserRow> {
  try {
    const { data } = await customaxios.put<ApiItemResponse<UserRow>>(`/users/${id}`, { role });
    return (data)?.data ?? ({} as UserRow);
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}
