/*
 * LandingPage Messages
 *
 * This contains all the text for the LandingPage component.
 */

import { defineMessages } from 'react-intl'
import globalMessages from '../../messages'

export default defineMessages({
  ...globalMessages,
  documentation: {
    id: 'app.containers.LandingPage.documentation',
    defaultMessage: 'Documentação'
  }
})
