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
import Form from 'components/Form'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import Page from 'components/Page'
import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/Button'
import TopNav from 'components/TopNav'
import TextInput from 'components/TextInputColumn'
import Title from './Title'
import RegisterBox from './RegisterBox'

import makeSelectRegisterPage from './selectors'
import messages from './messages'
import { updateFieldAction } from './actions'
import reducer from './reducer'
import saga from './saga'

// TODO: get label from messages based on the name passed
const getLabel = name => <FormattedMessage {...messages[name]} />

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.PureComponent {
  render() {
    const { dispatch, registerPage } = this.props
    const { fields } = registerPage
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

        <RegisterBox>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
          <Form>
            <TextInput
              column
              key="name"
              label={getLabel('name')}
              name="name"
              value={fields.name.value}
              onChange={evt => {
                dispatch(updateFieldAction('name', evt.target.value))
              }}
            />
            <TextInput
              key="lastName"
              label={getLabel('lastName')}
              name="lastName"
              value={fields.lastName.value}
              onChange={evt => {
                dispatch(updateFieldAction('lastName', evt.target.value))
              }}
            />
            <TextInput
              key="birthDate"
              label={getLabel('birthDate')}
              name="birthDate"
              value={fields.birthDate.value}
              onChange={evt => {
                dispatch(updateFieldAction('birthDate', evt.target.value))
              }}
            />
            <TextInput
              key="cpf"
              label={getLabel('cpf')}
              name="cpf"
              value={fields.cpf.value}
              onChange={evt => {
                dispatch(updateFieldAction('cpf', evt.target.value))
              }}
            />
            <TextInput
              key="rg"
              label={getLabel('rg')}
              name="rg"
              value={fields.rg.value}
              onChange={evt => {
                dispatch(updateFieldAction('rg', evt.target.value))
              }}
            />
            <TextInput
              key="telephone"
              label={getLabel('telephone')}
              name="telephone"
              value={fields.telephone.value}
              onChange={evt => {
                dispatch(updateFieldAction('telephone', evt.target.value))
              }}
            />
            <TextInput
              key="cellphone"
              label={getLabel('cellphone')}
              name="cellphone"
              value={fields.cellphone.value}
              onChange={evt => {
                dispatch(updateFieldAction('cellphone', evt.target.value))
              }}
            />
            <TextInput
              key="profession"
              label={getLabel('profession')}
              name="profession"
              value={fields.profession.value}
              onChange={evt => {
                dispatch(updateFieldAction('profession', evt.target.value))
              }}
            />
            <TextInput
              key="institution"
              label={getLabel('institution')}
              name="institution"
              value={fields.institution.value}
              onChange={evt => {
                dispatch(updateFieldAction('institution', evt.target.value))
              }}
            />
            <TextInput
              key="justification"
              label={getLabel('justification')}
              name="justification"
              value={fields.justification.value}
              onChange={evt => {
                dispatch(updateFieldAction('justification', evt.target.value))
              }}
            />
            <TextInput
              key="email"
              label={getLabel('email')}
              name="email"
              value={fields.email.value}
              onChange={evt => {
                dispatch(updateFieldAction('email', evt.target.value))
              }}
            />
            <TextInput
              key="password"
              label={getLabel('password')}
              name="password"
              value={fields.password.value}
              type="password"
              onChange={evt => {
                dispatch(updateFieldAction('password', evt.target.value))
              }}
            />
            <TextInput
              key="confirmPassword"
              label={getLabel('confirmPassword')}
              name="confirmPassword"
              value={fields.confirmPassword.value}
              type="password"
              onChange={evt => {
                dispatch(updateFieldAction('confirmPassword', evt.target.value))
              }}
            />
            <Button
              onClick={evt => {
                evt.preventDefault()
                console.log('TODO: validate and submit form')
              }}
            >
              <FormattedMessage {...messages.register} />
            </Button>
          </Form>
        </RegisterBox>
      </Page>
    )
  }
}

const fieldPropType = PropTypes.shape({
  value: PropTypes.string,
  valid: PropTypes.bool,
})

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  registerPage: PropTypes.shape({
    fields: PropTypes.shape({
      name: fieldPropType,
      lastName: fieldPropType,
      birthDate: fieldPropType,
      cpf: fieldPropType,
      rg: fieldPropType,
      address: fieldPropType,
      telephone: fieldPropType,
      cellphone: fieldPropType,
      profession: fieldPropType,
      institution: fieldPropType,
      justification: fieldPropType,
      email: fieldPropType,
      password: fieldPropType,
      confirmPassword: fieldPropType,
    }),
  }),
}

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
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
