import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { getByEmail, registerRepo } from '../repo/user.repo.js'
import { createPostRepo, getPost } from '../repo/post.repo.js'

const JWT_SECRET = process.env.JWT_SECRET

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
        const result = await registerRepo({username, email, password: hash})
        return result
    } catch (error) {
        throw error
    }
}

export async function loginService(userInfo) {

    const { email, password } = userInfo

    try {
        const isExist = await getByEmail(email)
        if (!isExist) {
            const err = new Error('This user dont have an account, please register first')
            err.status = 401
            throw err
        }
        const valid = await bcrypt.compare(password, isExist.password)
        if (!valid) {
            const err = new Error('Wrong password, try again')
            err.status = 403
            throw err
        }
        const token = jwt.sign({ email, username: isExist.username }, JWT_SECRET)
        return {
            token,
            username: isExist.username
        }
    } catch (error) {
        throw error
    }
}

export async function createPostService(data) {
    try {
        // const mytoken = jwt.decode(token)
        console.log(data)
        const result = await createPostRepo(data)
        return result
    } catch (error) {
        throw error
    }
}

export async function getPostService() {
    try {
        const result = await getPost()
        return result
    } catch (error) {
        throw error
    }
}