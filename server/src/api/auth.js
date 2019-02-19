import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import userModel from './users/model'

export default ({ logger: defaultLogger, secret, expiresIn }) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
  }

  const jwtStrategy = new JwtStrategy(opts, async (payload, done) => {
    defaultLogger.debug('jwtStrategy > payload:', payload)
    const { email } = payload
    const user = await userModel({ logger: defaultLogger }).getByEmail(email)
    if (user) {
      return done(null, user)
    }
    return done(new Error('Authentication Failed'), false)
  })

  passport.use(jwtStrategy)

  const authentication = () => (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      try {
        if (err) {
          next(err)
          return
        }
        if (!user) {
          res.status(401).json({ message: 'Unauthorized' })
          return
        }
        // attach user to request
        req.user = user

        next()
      } catch (error) {
        res.status(401).json({ message: error.message })
      }
    })(req, res, next)
  }

  const authenticate = () => async (req, res) => {
    try {
      req.logger.debug('/login started...')

      const user = await userModel({ logger: req.logger }).authenticate(req.body)
      req.logger.debug('/login > user:', user)

      if (user) {
        // if authentication is successful, attach user obj to the request
        req.user = user

        // add more fields if required.
        const token = jwt.sign({ email: user.email }, secret, { expiresIn })
        return res.status(200).json({
          token,
          expiresIn,
          message: 'Successfully authenticated'
        })
      }
      req.logger.debug('/login > no exception thrown, but user not found...')
    } catch (err) {
      req.logger.debug('/login > error caught:', err.message)
    }

    req.logger.debug('/login > default return statement...')
    return res.status(401).json({ message: 'Authentication failed' })
  }

  return {
    authentication,
    authenticate
  }
}
