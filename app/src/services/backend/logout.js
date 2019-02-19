import api from './api'

const unsetToken = () => {
  delete api.headers.Authorization
}

const logout = async () => {
  unsetToken()
}

export default logout
