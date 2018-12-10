import 'babel-core/register'
import 'babel-polyfill'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import dbConnect from './db'
import api from './api'

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dbConnect()

// routes
app.get('/', (req, res) => {
  return res.send('Hello From SINBA API!')
})

app.use('/api', api())

console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)

export default app
