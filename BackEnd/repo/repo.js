import { client } from "../config/connect.js";

const db = client.db('examFullStackDb')
const collection = db.collection('socialMedia')

export async function registerRepo(userInfo) {
    try {
        const result = await collection.insertOne(userInfo)
        console.log(result)
        return result
    } catch (error) {
        console.log('registerRepo',error)
        throw error
    }
}

export async function getByEmail(email) {
    try {
        const result = await collection.findOne({email: email})
        return result
    } catch (error) {
        console.log('loginRepo',error)
        throw error  
    }
}

// console.log(await getByEmail('e@mail.com'))