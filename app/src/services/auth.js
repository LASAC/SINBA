import backendLogin from './backend/login'
import backendLogout from './backend/logout'
import logger from './logger'

const AUTH_TOKEN = 'AUTH_TOKEN'

export const login = async ({ email, password }) => {
  const result = await backendLogin({ email, password })
  logger.debug('auth.login > result:', result)
  const { data, ok } = result
  if (ok) {
    localStorage.setItem(AUTH_TOKEN, data.token)
  }
  return result
}

export const logout = async () => {
  logger.debug('auth.logout...')
  await backendLogout()
  localStorage.removeItem(AUTH_TOKEN)
}

export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return !!token
}
