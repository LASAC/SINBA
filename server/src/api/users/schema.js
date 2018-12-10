import Joi from '../joi'
import mongoose from 'mongoose'

// User Roles:
export const UserRole = {
  ADMIN: 'ADMIN',
  SUPPORT: 'SUPPORT',
  CONTRIBUTOR: 'CONTRIBUTOR',
  READER: 'READER',
  INACTIVE: 'INACTIVE'
}

const joiSchema = updating =>
  updating
    ? Joi.object().keys({
      firstName: Joi.string()
        .min(3)
        .max(255),
      lastName: Joi.string()
        .min(3)
        .max(255),
      birthDate: Joi.string()
        .min(3)
        .max(255),
      cpf: Joi.string()
        .min(3)
        .max(255),
      rg: Joi.string()
        .min(3)
        .max(255),
      address: Joi.string()
        .min(3)
        .max(255),
      phone: Joi.string()
        .min(9)
        .max(15),
      cellphone: Joi.string()
        .min(9)
        .max(15),
      occupation: Joi.string()
        .min(3)
        .max(255),
      institution: Joi.string()
        .min(3)
        .max(255),
      justification: Joi.string()
        .min(3)
        .max(255),
      email: Joi.string()
        .min(3)
        .max(255),
      password: Joi.string()
        .min(3)
        .max(255),
      role: Joi.string()
        .min(3)
        .max(255)
    })
    : Joi.object().keys({
      firstName: Joi.string()
        .min(3)
        .max(255)
        .required(),
      lastName: Joi.string()
        .min(3)
        .max(255)
        .required(),
      birthDate: Joi.string()
        .min(3)
        .max(255)
        .required(),
      cpf: Joi.string()
        .min(3)
        .max(255)
        .required(),
      rg: Joi.string()
        .min(3)
        .max(255)
        .required(),
      address: Joi.string()
        .min(3)
        .max(255)
        .required(),
      phone: Joi.string()
        .min(9)
        .max(15)
        .required(),
      cellphone: Joi.string()
        .min(9)
        .max(15),
      occupation: Joi.string()
        .min(3)
        .max(255)
        .required(),
      institution: Joi.string()
        .min(3)
        .max(255)
        .required(),
      justification: Joi.string()
        .min(3)
        .max(255)
        .required(),
      email: Joi.string()
        .min(3)
        .max(255)
        .required(),
      password: Joi.string()
        .min(3)
        .max(255)
        .required(),
      role: Joi.string()
        .min(3)
        .max(255)
    })

export const validate = (data, updating = false) => {
  const { error } = Joi.validate(data, joiSchema(updating))
  if (error) {
    throw error
  }
}

export const schema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  phone: {
    type: String,
    minlength: 9,
    maxlength: 15,
    required: true
  },
  cellphone: {
    type: String,
    minlength: 9,
    maxlength: 15
  },
  occupation: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  institution: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  justification: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  role: {
    type: String,
    enum: {
      values: Object.keys(UserRole)
    },
    default: UserRole.INACTIVE
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true
  }
})
