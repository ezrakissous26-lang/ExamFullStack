import express from 'express'
import { checkValidBodyLogin, checkValidBodyRegister } from '../middleware/middleware.js'
import { loginControllers, registerControllers } from '../controllers/controllers.js'

export const router = express.Router()

router.post('/register', checkValidBodyRegister, registerControllers)

router.post('/login', checkValidBodyLogin, loginControllers)

// router.post('/login/post')

// router.get('/login/post')
