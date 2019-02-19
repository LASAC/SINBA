import express from 'express'
import auth from './auth'
import { version } from '../../package.json'
import users from './users/routes'
import encryptPassword from './encryptPassword'

export default ({
  logger, secret, expiresIn, bcryptRounds
}) => {
  const { authentication, authenticate } = auth({ logger, secret, expiresIn })
  const api = express.Router()

  //
  // Public Routes
  //

  api.get('/ping', (req, res) => {
    req.logger.debug('ping > Hello From Logger!')
    res.json('pong')
  })

  api.get('/version', (req, res) => res.json({ version }))

  api.use(
    '/users',
    users({
      encryptPassword: encryptPassword({ bcryptRounds })
    })
  )

  api.post('/login', authenticate())

  //
  // Protected Routes
  //

  api.use(authentication())

  api.get('/protected', (req, res, next) => res.status(200).json({ message: 'Yay! this is a protected route' }))

  return api
}
