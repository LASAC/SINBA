/**
 *
 * LandingPage
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import Background from './Background'
import CenteredNav from './CenteredNav'
import Footer from './Footer'
import H1 from './H1'
import messages from './messages'
import Page from './Page'
import TopNav from './TopNav'

const LandingPage = () => (
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
        <a href="https://github.com/LASAC/sinba-proto/wiki">
          <FormattedMessage {...messages.documentation} />
        </a>
        <a href="http://lasac.ledes.net">LASAC</a>
        <a href="http://www.ledes.net">LEDES</a>
        <a href="https://ufms.br">UFMS</a>
      </CenteredNav>
    </main>
    <Footer>2.0.0</Footer>
  </Page>
)

export default LandingPage
