import axios from "axios"
import { authStore } from "@/store/auth.store"
import { apiUrl } from "@/constant"

export const customaxios = axios.create({
  baseURL: apiUrl,
})

customaxios.interceptors.request.use((config) => {
  const { accessToken } = authStore.getState()

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json"
  }

  return config
})

customaxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = authStore.getState()

    if (error.response) {
      const status = error.response.status

      if (status === 401 ) {
        logout() 
      }
      if (status === 403) {
    
        window.location.href = "/" 
      }
    }

    return Promise.reject(error)
  }
)
