/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */

import { defineMessages } from 'react-intl'
import globalMessages from '../../messages'

export default defineMessages({
  ...globalMessages,
  header: {
    id: 'app.containers.LoginPage.header',
    defaultMessage: 'This is LoginPage container !'
  }
})
