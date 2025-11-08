import axios from "axios";
import { customaxios } from "@/lib/customaxios";
import type { CompanyRow, ID } from "@app/db";

export async function getCompanies(): Promise<CompanyRow[]> {
  try {
    const { data } = await customaxios.get<CompanyRow[]>("/companies");
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}

export async function getCompany(id: ID): Promise<CompanyRow> {
  try {
    const { data } = await customaxios.get<CompanyRow[]>(`/companies/${id}`);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}

export async function deleteCompany(id: ID): Promise<void> {
  try {
    const response = await customaxios.delete(`/companies/${id}`);


    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");
    }

    return response.data
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error((err.response?.data)?.message ?? err.message);
    throw err;
  }
}


export const getAllCompanies = async () => {
  try {
    const response = await customaxios.get("companies");


    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};

export const getAllMyCompanies = async () => {
  try {
    const response = await customaxios.get("companies/my");


    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};

export const createCompanyRequest = async (formData: FormData) => {
  try {
    console.log();
    
    const response = await customaxios.post("companies", formData);


    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};


export const updateCompanyRequest = async (body) => {
  try {
    const id = body.id
    
    const response = await customaxios.put(`companies/update/${id}`, body);

    
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    
    throw new Error("Une erreur est survenue");
  } catch (error) {
    console.error("Error details:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};