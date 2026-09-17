import { client } from "../config/connect.js";

const db = client.db('examFullStackDb')
const collection = db.collection('socialMediaPost')

export async function createPostRepo(post) {
    try {
        const result = await collection.insertOne(post)
        return result
    } catch (error) {
        console.log('createPostRepo',error)
        throw error
    }
}

export async function getPost() {
    try {
        const result = await collection.find().toArray()
        return result
    } catch (error) {
        console.log('getPost',error)
        throw error  
    }
}