/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'

class LanguageProvider extends React.PureComponent {
  render () {
    const { locale, children, messages } = this.props
    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {React.Children.only(children)}
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.element.isRequired
}

export default LanguageProvider
