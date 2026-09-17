import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

export function checkValidToken(req, res, next) {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({error: 'Body required with post'})
    }
    const headerToken = req.headers.authorization
    if (!headerToken) {
        console.log(error)
        return res.status(400).json({error: 'Token required in header'})
    }
    const [ type, token ] = headerToken.split(' ')
    if(!token || type !== 'Bearer') {
        console.log(error)
        return res.status(400).json({error: 'token with type Bearer required'})
    } else {
        try {
            jwt.verify(token, JWT_SECRET)
            next()
        } catch (error) {
            console.log(error)
            return res.status(403).json({error: error.message})
        }
    }
}

export function checkValidTokenGet(req, res, next) {

    const headerToken = req.headers.authorization
    if (!headerToken) {
        return res.status(400).json({error: 'Token required in header'})
    }
    const [ type, token ] = headerToken.split(' ')
    if(!token || type !== 'Bearer') {
        console.log(error)
        return res.status(400).json({error: 'token with type Bearer required'})
    } else {
        try {
            jwt.verify(token, JWT_SECRET)
            next()
        } catch (error) {
            console.log(error)
            return res.status(403).json({error: error.message})
        }
    }
}


// export function returnToken(req, res, next) {
//     const headerToken = req.headers.authorization
//     const [ type, token ] = headerToken.split(' ')
//     return token
// }