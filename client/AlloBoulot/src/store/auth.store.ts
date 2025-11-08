import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import type { UserRow } from '@app/db'

type AuthStore = {
  user: UserRow | undefined
  accessToken: string | undefined
  isAuth: boolean,
  isAdmin: boolean,
  setUser: (user: UserRow | undefined) => void
  setToken: (token: string | undefined) => void
  logout: () => void
  setIsAuth:(user:UserRow)=>void,
  setIsAdmin: (user:UserRow)=>void ,
}


export const authStore = createStore<AuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      accessToken: undefined,
      isAuth: false,
      isAdmin: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ accessToken: token }),
      logout: () => set({ user: undefined, accessToken: undefined, isAuth: false, isAdmin: false }),
      setIsAuth: (user)=>{
        if (user) {
          set({
            isAuth: true,
          })
        }
      },
      setIsAdmin: (user)=>{
        if (user.role === "admin") {
          set({
            isAdmin: true,
          })
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)
