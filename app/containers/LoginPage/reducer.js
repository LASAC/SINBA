/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable'
import { DEFAULT_ACTION, CHANGE_EMAIL, CHANGE_PASSWORD } from './constants'

export const initialState = fromJS({
  email: '',
  password: '',
})

function loginPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state
    case CHANGE_EMAIL:
      return state.set('email', payload.email)
    case CHANGE_PASSWORD:
      return state.set('password', payload.password)
    default:
      return state
  }
}

export default loginPageReducer
