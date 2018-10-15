/*
 *
 * RegisterPage actions
 *
 */

import { DEFAULT_ACTION, UPDATE_FIELD } from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  }
}

export function updateFieldAction(name, value, shouldValidate = false) {
  return {
    type: UPDATE_FIELD,
    payload: { name, value, shouldValidate },
  }
}
