import { useStore } from 'zustand'
import { authStore } from '@/store/auth.store'

export const useAuth = () => useStore(authStore)
