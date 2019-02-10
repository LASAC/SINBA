import mongoose from 'mongoose'
import { schema, validate } from './schema'

export const Model = mongoose.model('users', schema)

export const getAll = (q = null, sorted = false) => {
  let query =
    q && (`${q}`).length > 0
      ? Model.find({
        name: {
          $regex: `.*${q}.*`,
          $options: 'i'
        }
      })
      : Model.find()

  if (sorted && (`${sorted}`).toLowerCase() === 'true') {
    query = query.sort('name')
  }
  return query
}

export const getById = id => Model.findById(id)

export const add = async (data) => {
  console.log('users/model/add > data received:', data)
  validate(data)
  const element = new Model(data)
  await element.save()
  return element
}

export const addAll = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Array of Models Expected!')
  }
  return Model.insertMany(array)
}

export const update = (id, data) => {
  validate(data, true)
  return Model.findByIdAndUpdate(id, { $set: data }, { new: true })
}

export const deleteById = id => Model.findByIdAndDelete(id)
