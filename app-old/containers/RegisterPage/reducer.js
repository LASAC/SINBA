/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable'
import { DEFAULT_ACTION, UPDATE_FIELD } from './constants'

export const initialState = fromJS({
  fields: {
    name: { value: '', valid: true },
    lastName: { value: '', valid: true },
    birthDate: { value: '', valid: true },
    cpf: { value: '', valid: true },
    rg: { value: '', valid: true },
    address: { value: '', valid: true },
    telephone: { value: '', valid: true },
    cellphone: { value: '', valid: true },
    profession: { value: '', valid: true },
    institution: { value: '', valid: true },
    justification: { value: '', valid: true },
    email: { value: '', valid: true },
    password: { value: '', valid: true },
    confirmPassword: { value: '', valid: true },
  },
})

const validate = ({ name, value, shouldValidate }) => {
  console.log('TODO: implement validation:', { name, value, shouldValidate })
  switch (name) {
    default: {
      return { value, valid: !shouldValidate }
    }
  }
}

function registerPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state
    case UPDATE_FIELD: {
      const field = validate(payload)
      const fields = state.get('fields')
      const newFields = fields.set(
        payload.name,
        fields.get(payload.name).merge(field),
      )
      return state.set('fields', newFields)
    }
    default:
      return state
  }
}

export default registerPageReducer
