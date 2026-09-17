import express from 'express'
import { checkValidBodyRegister } from '../middleware/middleware.js'
import { registerControllers } from '../controllers/controllers.js'

export const router = express.Router()

router.post('/register', checkValidBodyRegister, registerControllers)

// router.post('login')

// router.post('/login/post')

// router.get('/login/post')
