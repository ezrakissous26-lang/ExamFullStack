import express from 'express'
import { registerRepo } from '../repo/repo.js'

export const router = express.Router()

router.post('/test', async (req, res) => {
    // try {
    //     const result = await registerRepo(req.body)
    //     return res.status(201).json({message: `Succesfully register id : ${result.insertedId}`})
    // } catch (error) {
    //     return res.status(500).json({error: error.message})
    // }
})

// router.post('/register')

// router.post('login')

// router.post('/login/post')

// router.get('/login/post')
