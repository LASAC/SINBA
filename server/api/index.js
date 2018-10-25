const { version } = require('../../package.json')
const { Router } = require('express')

const createApi = ({ config }) => {
  const api = Router()

  // methods
  api.get('/version', (req, res) => {
    res.json({ version, config })
  })

  return api
}

module.exports = createApi
