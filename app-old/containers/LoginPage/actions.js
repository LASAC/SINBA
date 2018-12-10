/*
 *
 * LoginPage actions
 *
 */

import { CHANGE_EMAIL, CHANGE_PASSWORD } from './constants'

export function changeEmail(email) {
  console.log('changeEmail', { email })
  return {
    type: CHANGE_EMAIL,
    payload: { email },
  }
}

export function changePassword(password) {
  console.log('changePassword', { password })
  return {
    type: CHANGE_PASSWORD,
    payload: { password },
  }
}
