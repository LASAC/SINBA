const express = require('express')
const { resolve } = require('path')

const setup = require('./middlewares/frontendMiddleware')
const createApi = require('./api')

const app = express()

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
const api = createApi({ debug: true })
app.use('/api', api)

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
})

module.exports = app
