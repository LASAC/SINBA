import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { version } from '../../package.json'
import users from './users/routes'

//
// strategies/jwt.js:
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'SECRET_KEY' // normally store this in process.env.secret
}

const jwtStrategy = new JwtStrategy(opts, (payload, done) => {
  if (payload.email === 'geraldo.landre+1@gmail.com') {
    return done(null, true)
  }
  return done(new Error('Authentication Failed'), false)
})

// end.

passport.use(jwtStrategy)

export default () => {
  const api = express.Router()

  api.get('/ping', (req, res) => {
    const { logger } = req
    logger.debug('ping > Hello From Logger!')
    res.json('pong')
  })
  api.get('/version', (req, res) => res.json({ version }))
  api.use('/users', users())

  api.post('/login', (req, res) => {
    console.log('req.body:', req.body)
    const { email, password } = req.body

    // TODO:
    // - increase expiration time
    // - retrieve user profile on auth middleware and inject it in the request

    if (email === 'geraldo.landre+1@gmail.com' && password === '11111111') {
      const opts = {
        expiresIn: 120 // token expires in 2min
      }

      const secret = 'SECRET_KEY' // normally stored in process.env.secret
      const token = jwt.sign({ email }, secret, opts)
      return res.status(200).json({
        token,
        message: 'Successfully authenticated'
      })
    }

    return res.status(401).json({ message: 'Authentication failed' })
  })

  // api.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => res.status(200).json({ message: 'Yay! this is a protected route' }))

  api.get('/protected', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      return res.status(200).json({ message: 'Yay! this is a protected route' })
    })(req, res, next)
  })

  return api
}
