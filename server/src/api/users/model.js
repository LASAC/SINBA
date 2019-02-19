import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { schema, validate } from './schema'

const model = ({ logger }) => {
  const log = (msg, ...info) => logger.debug(`Users Model > ${msg}`, ...info)

  const Model = mongoose.model('users', schema)

  const getAll = (q = null, sorted = false) => {
    let query =
      q && `${q}`.length > 0
        ? Model.find({
          name: {
            $regex: `.*${q}.*`,
            $options: 'i'
          }
        })
        : Model.find()

    if (sorted && `${sorted}`.toLowerCase() === 'true') {
      query = query.sort('name')
    }
    return query
  }

  const getByEmail = email => Model.findOne({ email }).exec()

  const getById = id => Model.findById(id)

  const add = async (data) => {
    log('users/model/add > data received:', data)
    validate(data)
    const element = new Model(data)
    await element.save()
    return element
  }

  const addAll = (array) => {
    if (!Array.isArray(array)) {
      throw new Error('Array of Models Expected!')
    }
    return Model.insertMany(array)
  }

  const update = (id, data) => {
    validate(data, true)
    return Model.findByIdAndUpdate(id, { $set: data }, { new: true })
  }

  const deleteById = id => Model.findByIdAndDelete(id)

  const authenticate = async ({ email, password }) => {
    log('authenticate:', { email, password })
    const user = await Model.findOne({ email }).exec()

    log('authenticate > user found:', user || 'none')
    if (!user) {
      throw new Error('User not found!')
    }

    // check if password matches
    const same = await bcrypt.compare(password, user.password)
    log('authenticate > is password same?', same || 'nope...')

    if (!same) {
      throw new Error('Password mismatch')
    }

    return user
  }

  return {
    add,
    addAll,
    authenticate,
    deleteById,
    getAll,
    getByEmail,
    getById,
    Model,
    update
  }
}

export default model
