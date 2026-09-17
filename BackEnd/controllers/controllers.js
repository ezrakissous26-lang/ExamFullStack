import { createPostService, getPostService, loginService, registerService } from "../services/services.js";

export async function registerControllers(req, res) {
    try {
        const result = await registerService(req.body)
        return res.status(201).json({message: `Succesfully register id : ${result.insertedId}`})
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({error: error.message})
    }
}

export async function loginControllers(req, res) {
    try {
        const result = await loginService(req.body)
        return res.status(200).json({message: `Succesfully logIn, Welcome ${result.username}`, token:result.token, username: result.username})
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({error: error.message})
    }
}

export async function createPostController(req, res) {
    try {
        const result = await createPostService(req.body)
        return res.status(201).json({message: 'Succesfully Posted'})
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({error: error.message})
    }
}

export async function getAllPostController(req, res) {
    try {
        const result = await getPostService()
        return res.status(201).json(result)
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({error: error.message})
    }
}