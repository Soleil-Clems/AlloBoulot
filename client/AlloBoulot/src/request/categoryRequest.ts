import { customaxios } from "@/lib/customaxios";
import axios from "axios";
import type { CategoryRow, ID } from "@app/db";

export const GetAllCategoriesRequest = async () => {
  try {
    const response = await customaxios.get("/categories")


    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }

    return response.data

  } catch (error) {
    console.log(error);

    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error
  }
}



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

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function extractMessage(v: unknown): string | undefined {
  if (isRecord(v) && typeof v.message === "string") return v.message;
  return undefined;
}

function unpackList<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[];

  if (isRecord(payload) && isRecord(payload.data)) {
    const inner = payload.data.data;
    if (Array.isArray(inner)) return inner as T[];

    if (Array.isArray(payload.data)) return payload.data as T[];
  }
  return [];
}

function unpackItem<T>(payload: unknown): T {
  if (isRecord(payload) && "data" in payload) {
    const d = (payload as { data: unknown }).data;
    return d as T;
  }
  return payload as T;
}

function toError(err: unknown): Error {
  const ax = err as AxiosError<unknown>;
  if (axios.isAxiosError(ax)) {
    const msg = extractMessage(ax.response?.data) ?? ax.message;
    return new Error(msg);
  }
  return err instanceof Error ? err : new Error(String(err));
}

// ---- CRUD ----
export async function getCategories(): Promise<CategoryRow[]> {
  try {
    const { data } = await customaxios.get<ApiListResponse<CategoryRow> | CategoryRow[]>("/categories");
    return unpackList<CategoryRow>(data);
  } catch (err) {
    throw toError(err);
  }
}

export type CreateCategoryInput = Pick<CategoryRow, "name" | "icon">;

export async function createCategory(input: CreateCategoryInput): Promise<CategoryRow> {
  try {
    const { data } = await customaxios.post<ApiItemResponse<CategoryRow>>("/categories", input);
    return unpackItem<CategoryRow>(data);
  } catch (err) {
    throw toError(err);
  }
}

export type UpdateCategoryInput = Partial<Pick<CategoryRow, "name" | "icon">>;

export async function updateCategory(id: ID, patch: UpdateCategoryInput): Promise<CategoryRow> {
  try {
    const { data } = await customaxios.put<ApiItemResponse<CategoryRow>>(`/categories/${id}`, patch);
    return unpackItem<CategoryRow>(data);
  } catch (err) {
    throw toError(err);
  }
}

export async function deleteCategory(id: ID): Promise<void> {
  try {
    await customaxios.delete<void>(`/categories/${id}`);
  } catch (err) {
    throw toError(err);
  }
}

