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

const LandingPage = () => {
  return (
    <Context.Consumer>
      {context => {
        console.log('locale:', context.locale)
        console.log('setLocale:', context.setLocale)
        return (
          <Page>
            <Background />
            <TopNav>
              <Link to='/login'>
                <FormattedMessage {...messages.login} />
              </Link>
              <Link to='/register'>
                <FormattedMessage {...messages.register} />
              </Link>
            </TopNav>
            <header>
              <H1>SINBA</H1>
            </header>
            <main>
              <CenteredNav>
                <a
                  target='_blank'
                  href='https://github.com/LASAC/sinba-proto/wiki'
                  rel='noopener noreferrer'
                >
                  <FormattedMessage {...messages.documentation} />
                </a>
                <a
                  target='_blank'
                  href='http://lasac.ledes.net'
                  rel='noopener noreferrer'
                >
                  LASAC
                </a>
                <a
                  target='_blank'
                  href='http://www.ledes.net'
                  rel='noopener noreferrer'
                >
                  LEDES
                </a>
                <a
                  target='_blank'
                  href='https://ufms.br'
                  rel='noopener noreferrer'
                >
                  UFMS
                </a>
              </CenteredNav>
            </main>
            <Footer>2.0.0</Footer>
          </Page>
        )
      }}
    </Context.Consumer>
  )
}

LandingPage.contextType = Context

export default LandingPage
