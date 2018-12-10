import api from './api'

const getAll = () => api.get('users')
const post = data => api.post('users', data)

export default {
  getAll,
  post
}
