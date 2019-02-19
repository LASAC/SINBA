import uuidV4 from 'uuid/v4'
import createLogger from './createLogger'

const loggerMiddleware = (options = {}) => (req, res, next) => {
  // generates requestId
  req.requestId = uuidV4()

  req.logger = createLogger({
    ...options,
    prefix: `${req.requestId} > `
  })
  next()
}

export default loggerMiddleware
