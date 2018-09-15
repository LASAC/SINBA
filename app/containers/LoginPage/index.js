/**
 *
 * LoginPage
 *
 */

import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import Form from 'components/Form'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import Page from 'components/Page'
import PropTypes from 'prop-types'
import React from 'react'
import TextInput from 'components/TextInput'
import TopNav from 'components/TopNav'

import LoginView from './CredentialsBox'
import makeSelectLoginPage from './selectors'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import { changeEmail, changePassword } from './actions'

export class LoginPage extends React.PureComponent {
  render() {
    const { email, password } = this.props
    return (
      <Page>
        <TopNav>
          <Link to="/register">
            <FormattedMessage {...messages.register} />
          </Link>
        </TopNav>

        <LoginView>
          <Form>
            <TextInput
              label="Email"
              name="email"
              value={email}
              onChange={this.props.onChangeEmail}
            />
            <TextInput
              type="password"
              label={<FormattedMessage {...messages.password} />}
              name="password"
              value={password}
              onChange={this.props.onChangePassword}
            />
            <button onClick={console.log} />
          </Form>
        </LoginView>
      </Page>
    )
  }
}

LoginPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'loginPage', reducer })
const withSaga = injectSaga({ key: 'loginPage', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage)
