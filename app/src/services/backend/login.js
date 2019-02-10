import api from './api'

const post = data => api.post('/login', data)

const setToken = (token) => {
  api.setHeader('Authorization', `Bearer ${token}`)
}

const login = async ({ email, password }) => {
  const { ok, data } = await post({ email, password })
  if (ok) {
    // TODO: set header with token
    const { message, token } = data
    console.log(message, token)
    setToken(token)
  }
  console.log('ERROR:', { data })
  return data
}

export const testAuth = async () => {
  const { ok, data } = await api.get('/protected')
  console.log('login.testAuth > data:', data)
  return ok
}

export default login
