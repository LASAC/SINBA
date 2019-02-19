import bcrypt from 'bcrypt'
import { sendErrorResponse } from './handleRequest'

// will be used on /register
const encryptPassword = ({ bcryptRounds }) => async (req, res, next) => {
  const { logger } = req
  logger.debug('[encprypt-password middleware]')
  if (req.body && req.body.password) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, bcryptRounds)
      logger.debug('[encprypt-password middleware] - req.body.password:', req.body.password)
    } catch (err) {
      logger.error('[encprypt-password middleware] - err!')
      sendErrorResponse(req, res, err)
      return
    }
  }
  next()
}

export default encryptPassword
