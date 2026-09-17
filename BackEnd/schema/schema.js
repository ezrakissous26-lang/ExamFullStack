import { z } from 'zod'

export const registerInfo = z.object({
    username: z.string(),
    email: z.email(),
    password: z.string()
})

export const loginInfo = z.object({
    email: z.email(),
    password: z.string()
})