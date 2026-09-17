import { create } from 'zustand'

export const tokenStore = create((set) => ({

    token: localStorage.getItem("token") || null,
    setToken: (token: string) => {
        localStorage.setItem("token", token)
        set({ token })
    }
}))