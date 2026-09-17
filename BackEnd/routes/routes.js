import express from 'express'
import { checkValidBodyLogin, checkValidBodyRegister } from '../middleware/middleware.js'
import { loginControllers, registerControllers } from '../controllers/controllers.js'
import { checkValidToken } from '../middleware/authentification.middleware.js'

export const router = express.Router()

router.post('/register', checkValidBodyRegister, registerControllers)

router.post('/login', checkValidBodyLogin, loginControllers)

router.post('/login/post', checkValidToken, )

router.get('/login/post', checkValidToken, )
