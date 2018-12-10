import express from 'express'
import { version } from '../../package.json'
import users from './users/routes'

export default () => {
  const api = express.Router()

  api.get('/version', (req, res) => res.json({ version }))
  api.use('/users', users())

  return api
}
