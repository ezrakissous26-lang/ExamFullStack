import { MongoClient } from 'mongodb'
import 'dotenv/config'

const MONGO_URI = process.env.MONGO_URI

export const client = new MongoClient(MONGO_URI)

export async function connect() {
    try {
        await client.connect()
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log(error.message)
        throw error
    }
}