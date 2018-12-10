import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './features/LandingPage'
import LanguageProvider from './features/LanguageProvider'
import { secureLocale } from './locale'

const { translationMessages, DEFAULT_LOCALE } = require('./i18n')

const defaultValue = {
  locale: DEFAULT_LOCALE,
  setLocale: () => {}
}

export const Context = React.createContext(defaultValue)

class App extends React.Component {
  setLocale = locale =>
    this.setState(state => ({
      locale: secureLocale(locale)
    }))

  state = {
    locale: DEFAULT_LOCALE,
    setLocale: this.setLocale
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        <LanguageProvider
          locale={this.state.locale}
          messages={translationMessages}
        >
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              {/* <Route exact path="/login" component={LoginPage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route component={NotFoundPage} /> */}
            </Switch>
          </Router>
        </LanguageProvider>
      </Context.Provider>
    )
  }
}

export default App
