import { loginInfo, registerInfo } from "../schema/schema.js";

export function checkValidBodyRegister(req, res, next) {
    try {
        const isValid = registerInfo.parse(req.body)
    } catch (error) {
        return res.status(400).json({error: (JSON.parse(error)).map((item) => item.path[0])})
    } next()
}

export function checkValidBodyLogin(req, res, next) {
    try {
        const isValid = loginInfo.parse(req.body)
    } catch (error) {
        return res.status(400).json({error: (JSON.parse(error)).map((item) => item.path[0])})
    } next()
}