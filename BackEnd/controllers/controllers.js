import { registerService } from "../services/services.js";

export async function registerControllers(req, res) {
    try {
        const result = await registerService(req.body)
        return res.status(201).json({message: `Succesfully register id : ${result.insertedId}`})
    } catch (error) {
        return res.status(error.status || 500).json({error: error.message})
    }
}
