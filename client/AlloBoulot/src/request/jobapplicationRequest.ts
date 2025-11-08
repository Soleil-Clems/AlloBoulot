import { customaxios } from "@/lib/customaxios";
import axios from "axios";

export const ApplyRequest = async (body) => {
  try {
    const response = await customaxios.post("job-applications", body)
    
    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }


    return response.data

  } catch (error) {

    
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error
  }
}

export const UpdateStatusRequest = async ({id,body}:{id:string|number, body:any}) => {
  try {
    const response = await customaxios.put(`job-applications/${id}/status`, body)
    
    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }


    return response.data

  } catch (error) {

    
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error
  }
}

export const GetAllCandidatureOfCompanyRequest = async (companyId:string|number) => {
  try {
    const response = await customaxios.get("job-applications/company/"+companyId)
  
    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }


    return response.data

  } catch (error) {
  
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error
  }
}

export const GetMyApplicationRequest = async () => {
  try {
    const response = await customaxios.get("job-applications/my")
  
    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }


    return response.data

  } catch (error) {
  
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error
  }
}