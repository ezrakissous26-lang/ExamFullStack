import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes/routes.js'
import { connect } from './config/connect.js'

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    async function connection () {
        try {
            await connect()
            console.log(`Server running on http://localhost:${PORT}`)
        } catch (error) {
            console.log(error)
        }
    }
    connection()
})