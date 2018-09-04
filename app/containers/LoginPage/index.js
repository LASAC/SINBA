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
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import Page from 'components/Page'
import PropTypes from 'prop-types'
import React from 'react'
import TopNav from 'components/TopNav'

import makeSelectLoginPage from './selectors'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import LoginView from './CredentialsBox'

export class LoginPage extends React.PureComponent {
  render() {
    return (
      <Page>
        <TopNav>
          <Link to="/register">
            <FormattedMessage {...messages.register} />
          </Link>
        </TopNav>

        <LoginView>
          User name<br />
          Password
        </LoginView>
      </Page>
    )
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
