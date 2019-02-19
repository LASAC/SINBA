import { getErrorResponse } from './errors'

export const sendErrorResponse = (req, res, err, defaultStatus) => {
  const { status, data } = getErrorResponse(err, defaultStatus)
  const { logger } = req
  logger.debug('Sending Error Response:', err)
  return res.status(status).json(data)
}

const handle = async (req, res, handler) => {
  try {
    return res.json(await handler())
  } catch (err) {
    return sendErrorResponse(req, res, err)
  }
}

export default handle
