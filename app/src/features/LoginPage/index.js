/**
 *
 * LoginPage
 *
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'
import { login } from '../../services/auth'
import logger from '../../services/logger'
import Form from '../../components/Form'
import Page from '../../components/Page'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import TopNav from '../../components/TopNav'
import CredentialsBox from './CredentialsBox'
import messages from './messages'

const ErrorMessage = styled.div`
  color: red;
`

class LoginPage extends React.PureComponent {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false
  }

  login = async (evt) => {
    evt.preventDefault()
    this.setState({ errorMessage: '', loading: true })

    const { email, password } = this.state
    const result = await login({ email, password })
    logger.debug('LoginPage.login > result:', result)

    const { data, ok } = result
    if (ok) {
      window.location.replace('/home')
    } else {
      this.setState({ errorMessage: data.message, loading: false }, () => logger.debug('errorMessage: ', this.state.errorMessage))
    }
  }

  render () {
    const {
      email, password, errorMessage, loading
    } = this.state
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

            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <Button
              height="30px"
              width="97%"
              onClick={this.login}
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} /> : 'Login'}
            </Button>
          </Form>
        </CredentialsBox>
      </Page>
    )
  }
}

export default LoginPage
