import { create } from 'zustand'

export const myStore = create((set) => ({

    token: localStorage.getItem("token") || null,
    setToken: (token: string) => {
        localStorage.setItem("token", token)
        set({ token })
    }
}))

export const usernameStore = create((set) => ({
    username: localStorage.getItem("username") || null,
    setUsername: (username: string) => {
        localStorage.setItem("username", username)
        set({ username })
    }
}))