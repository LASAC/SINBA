import express from 'express'
import handle from '../handleRequest'
import model from './model'

export default ({ encryptPassword }) => {
  const api = express.Router()

  api.get('/', (req, res) => handle(req, res, () => model({ logger: req.logger }).getAll(req.query.q, req.query.sorted)))

  api.post('/', encryptPassword, (req, res) => handle(req, res, () => model({ logger: req.logger }).add(req.body)))

  // api.post('/all', (req, res) => handle(req, res,
  // () => model({ logger: req.logger }).addAll(req.body)))

  api.get('/:id', (req, res) => handle(req, res, () => model({ logger: req.logger }).getById(req.params.id)))

  api.put('/:id', encryptPassword, (req, res) => handle(req, res, () => model({ logger: req.logger }).update(req.params.id, req.body)))

  api.delete('/:id', (req, res) => handle(req, res, () => model({ logger: req.logger }).deleteById(req.params.id)))

  return api
}
