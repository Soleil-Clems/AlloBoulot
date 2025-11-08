import { customaxios } from "@/lib/customaxios";
import axios from "axios";

export const SearchOffersRequest = async (search:string="", categoryId:string="") => {
  try {
    const response = await customaxios.get(`job-offers/search?search=${search}&category=${categoryId}`)
    // console.log(response);
    
    if (response.statusText !== "OK") {
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

export const GetAnOfferRequest = async (companyId:string|number, offerId:string|number) => {
  try {
    const response = await customaxios.get(`companies/${companyId}/job-offers/${offerId}`)
    // console.log(response);
    
    if (response.statusText !== "OK") {
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

export const GetAllOfferOfACompanyRequest = async (companyId:string|number, ) => {
  try {
    const response = await customaxios.get(`companies/${companyId}/job-offers`)
    // console.log(response);
    
    if (response.statusText !== "OK") {
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

export const GetAnOfferOfACompanyRequest = async (companyId:string|number, offerId:string|number) => {
  try {
    const response = await customaxios.get(`companies/${companyId}/job-offers/${offerId}`)
    // console.log(response);
    
    if (response.statusText !== "OK") {
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


export const CreateofferRequest = async ({id, body}:{id:string, body:any}) => {
  try {
    
    const response = await customaxios.post(`companies/${id}/job-offers`, body)

    
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

export const UpdateofferRequest = async ({id, offerId, body}:{id:string, offerId:string, body:any}) => {
  try {
    
    const response = await customaxios.put(`companies/${id}/job-offers/${offerId}`, body)
    console.log(response);
    
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
