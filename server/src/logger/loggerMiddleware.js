import createLogger from './createLogger'

const loggerMiddleware = (options) => (req, res, next) => {
  req.logger = createLogger(options)
  next()
}

export default loggerMiddleware
