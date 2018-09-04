/**
 *
 * RegisterPage
 *
 */

import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import Page from 'components/Page'
import PropTypes from 'prop-types'
import React from 'react'
import TopNav from 'components/TopNav'

import makeSelectRegisterPage from './selectors'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Register Page</title>
          <meta name="description" content="Description of Register Page" />
        </Helmet>
        <TopNav>
          <Link to="/login">
            <FormattedMessage {...messages.login} />
          </Link>
        </TopNav>

        <FormattedMessage {...messages.header} />
      </Page>
    )
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  registerpage: makeSelectRegisterPage(),
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

const withReducer = injectReducer({ key: 'registerPage', reducer })
const withSaga = injectSaga({ key: 'registerPage', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage)
