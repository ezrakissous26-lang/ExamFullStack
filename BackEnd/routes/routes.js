import express from 'express'
import { checkValidBodyLogin, checkValidBodyRegister } from '../middleware/middleware.js'
import { createPostController, getAllPostController, loginControllers, registerControllers } from '../controllers/controllers.js'
import { checkValidToken, checkValidTokenGet } from '../middleware/authentification.middleware.js'

export const router = express.Router()

router.post('/register', checkValidBodyRegister, registerControllers)

router.post('/login', checkValidBodyLogin, loginControllers)

router.post('/login/post', checkValidToken, createPostController)

router.get('/login/post', checkValidTokenGet, getAllPostController)
