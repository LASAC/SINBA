import api from './api'
import logger from '../logger'

const post = data => api.post('/login', data)

const setToken = (token) => {
  api.setHeader('Authorization', `Bearer ${token}`)
}

const login = async ({ email, password }) => {
  const result = await post({ email, password })
  const { ok, data } = result
  if (ok) {
    const { message, token } = data
    logger.debug(message, token)
    setToken(token)
  }
  return result
}

export default login
