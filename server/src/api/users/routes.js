import express from 'express'
import model from './model'
import { getErrorResponse } from '../errors'

const handle = async (req, res, handler) => {
  try {
    return res.json(await handler())
  } catch (err) {
    const { status, data } = getErrorResponse(err)
    return res.status(status).json(data)
  }
}

export default () => {
  const api = express.Router()

  api.get('/', (req, res) => handle(req, res, () => model({ logger: req.logger }).getAll(req.query.q, req.query.sorted)))

  api.post('/', (req, res) => handle(req, res, () => model({ logger: req.logger }).add(req.body)))

  // api.post('/all', (req, res) => handle(req, res,
  // () => model({ logger: req.logger }).addAll(req.body)))

  api.get('/:id', (req, res) => handle(req, res, () => model({ logger: req.logger }).getById(req.params.id)))

  api.put('/:id', (req, res) => handle(req, res, () => model({ logger: req.logger }).update(req.params.id, req.body)))

  api.delete('/:id', (req, res) => handle(req, res, () => model({ logger: req.logger }).deleteById(req.params.id)))

  return api
}
