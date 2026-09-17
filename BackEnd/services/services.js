import bcrypt from 'bcrypt'
import { getByEmail, registerRepo } from '../repo/repo.js'

export async function registerService(userInfo) {
    
    const { username, email, password} = userInfo

    try {
        const isExist = await getByEmail(email)
        if (isExist) {
            const err = new Error('This user already have a account')
            err.status = 409
            throw err
        }
        const hash = await bcrypt.hash(password, 10)
        const result = registerRepo({username, email, hash})
        return result
    } catch (error) {
        throw error
    }
}

