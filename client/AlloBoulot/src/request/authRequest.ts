import { customaxios } from "@/lib/customaxios";
import { type LoginInput } from "@/schemas/login.schema";
import { type SignupInput } from "@/schemas/signup.schema";
import axios from "axios";

export const loginRequest = async (body: LoginInput) => {
  try {
    const response = await customaxios.post("login", body)
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

export const RegisterRequest = async (body: SignupInput) => {
  try {
    const response = await customaxios.post("register", body)
    console.log(response);

    if (response.statusText !== "OK" && response.statusText !== "Created") {
      throw new Error("Une erreur est survenue");

    }

    return response.data
  } catch (error) {
    console.log(response);

    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message
    }
    throw error

  }
}

export const LogoutRequest = async (body = {}) => {
  try {
    const response = await customaxios.post("logout", body)
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