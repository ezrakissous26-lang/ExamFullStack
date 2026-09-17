import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Server Connected'})
})

// router.post('/register')

// router.post('login')

// router.post('/login/post')

// router.get('/login/post')