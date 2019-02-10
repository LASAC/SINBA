import 'babel-core/register'
import 'babel-polyfill'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import api from './api'
import logger from './logger'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger())

// routes
app.get('/', (req, res) => res.send('Hello From SINBA API!'))

app.use('/api', api())

console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)

export default app
