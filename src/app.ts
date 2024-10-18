import errormiddlewar from './middlewares/error.middlewares'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './routes'
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(errormiddlewar)

export default app;