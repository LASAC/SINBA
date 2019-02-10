/**
 *
 * LoginPage
 *
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Form from '../../components/Form'
import Page from '../../components/Page'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import TopNav from '../../components/TopNav'

import CredentialsBox from './CredentialsBox'
import messages from './messages'
import login, { testAuth } from '../../services/backend/login'

class LoginPage extends React.PureComponent {
  state = {
    email: '',
    password: ''
  }

  login = async (evt) => {
    evt.preventDefault()
    let isAuthenticated = await testAuth()
    console.log('before login > isAuthenticated:', isAuthenticated)

    const result = await login(this.state)
    console.log('LoginPage.login > result:', result)

    isAuthenticated = await testAuth()
    console.log('before login > isAuthenticated:', isAuthenticated)
  }

  render () {
    const { email, password } = this.state
    return (
      <Page>
        <TopNav>
          <Link to="/register">
            <FormattedMessage {...messages.register} />
          </Link>
        </TopNav>

        <CredentialsBox>
          <Form>
            <TextInput
              label="Email"
              name="email"
              value={email}
              onChange={evt => this.setState({ email: evt.target.value })}
            />
            <TextInput
              type="password"
              label={<FormattedMessage {...messages.password} />}
              name="password"
              value={password}
              onChange={evt => this.setState({ password: evt.target.value })}
            />
            <Button
              height="30px"
              width="97%"
              onClick={this.login}
              color="primary"
              variant="contained"
            >
              Login
            </Button>
          </Form>
        </CredentialsBox>
      </Page>
    )
  }
}

export default LoginPage
