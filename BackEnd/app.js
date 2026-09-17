import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes/routes.js'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})