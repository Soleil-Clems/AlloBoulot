import { customaxios } from "@/lib/customaxios";
import { type UpdateProfileInput, type UserProfile } from "@/schemas/profile.schema";
import axios from "axios";

export const getProfileRequest = async (): Promise<UserProfile> => {
  try {
    const response = await customaxios.get("user");
    
    if (response.statusText !== "OK") {
      throw new Error("Erreur lors de la récupération du profil");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};

// Mettre à jour le profil
export const updateProfileRequest = async (body: UpdateProfileInput): Promise<UserProfile> => {
  try {
    const response = await customaxios.get("user");
    const userId = response.data.id;

    // Nettoyer les données - ne pas envoyer cv et letter au backend
    const cleanData: any = { ...body };
    delete cleanData.passwordConfirm;
    delete cleanData.cv;
    delete cleanData.letter;
    
    // Supprimer le password s'il est vide
    if (!cleanData.password || cleanData.password === '') {
      delete cleanData.password;
    }

    const updateResponse = await customaxios.put(`users/${userId}`, cleanData);

    if (updateResponse.statusText !== "OK") {
      throw new Error("Erreur lors de la mise à jour du profil");
    }

    return updateResponse.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};