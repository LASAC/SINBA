/**
 *
 * LandingPage
 *
 */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Context } from '../../App'
import Background from './Background'
import CenteredNav from './CenteredNav'
import Footer from './Footer'
import H1 from './H1'
import messages from './messages'
import Page from './Page'
import TopNav from './TopNav'
import versionService from '../../services/backend/version'
import logger from '../../services/logger'

class LandingPage extends React.Component {
  state = { version: '???' }

  async componentDidMount () {
    const { ok, data } = await versionService.get()
    if (ok) {
      const { version } = data
      logger.debug('version received from the server:', version)
      this.setState({ version })
    }
  }

  render () {
    const { version } = this.state
    return (
      <Context.Consumer>
        {(context) => {
          logger.debug('locale:', context.locale)
          logger.debug('setLocale:', context.setLocale)
          return (
            <Page>
              <Background />
              <TopNav>
                <Link to="/login">
                  <FormattedMessage {...messages.login} />
                </Link>
                <Link to="/register">
                  <FormattedMessage {...messages.register} />
                </Link>
              </TopNav>
              <header>
                <H1>SINBA</H1>
              </header>
              <main>
                <CenteredNav>
                  <a
                    target="_blank"
                    href="https://github.com/LASAC/sinba-proto/wiki"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage {...messages.documentation} />
                  </a>
                  <a target="_blank" href="http://lasac.ledes.net" rel="noopener noreferrer">
                    LASAC
                  </a>
                  <a target="_blank" href="http://www.ledes.net" rel="noopener noreferrer">
                    LEDES
                  </a>
                  <a target="_blank" href="https://ufms.br" rel="noopener noreferrer">
                    UFMS
                  </a>
                </CenteredNav>
              </main>
              <Footer>{version}</Footer>
            </Page>
          )
        }}
      </Context.Consumer>
    )
  }
}

LandingPage.contextType = Context

export default LandingPage
