import api from './api'

const get = () => api.get('/version')

export default {
  get
}
