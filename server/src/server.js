import 'babel-core/register'
import 'babel-polyfill'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import createLogger from './logger/createLogger'
import api from './api'
import logger from './logger'

const defaultLogger = createLogger()

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger())

// routes
app.get('/', (req, res) => res.send('Hello From SINBA API!'))

const secret = process.env.SINBA_SECRET
if (!secret) {
  throw new Error('Missing API SECRET!')
}
// TODO: add support to refresh tokens
const expiresIn = 1200 // 2 hours
app.use('/api', api({ logger: defaultLogger, secret, expiresIn }))

defaultLogger.debug(`Environment: ${process.env.NODE_ENV || 'development'}`)

export default app
