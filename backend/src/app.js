import 'dotenv/config'
import express from 'express'
import unitsRoutes from './routes/index.js'
import { corsMiddleware } from './middleware/cors.js'

const app = express()
app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/api', unitsRoutes)

export default app
