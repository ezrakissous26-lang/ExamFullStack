import { client } from "../config/connect.js";

const db = client.db('examFullStackDb')
const collection = db.collection('socialMedia')

export async function registerRepo() {
    try {
        const result = await collection.insertOne()
        console.log(result)
    } catch (error) {
        throw error
    }
}