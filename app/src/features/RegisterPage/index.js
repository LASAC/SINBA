/**
 *
 * RegisterPage
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import users from '../../services/backend/users'
import logger from '../../services/logger'
import Form from '../../components/Form'
import Page from '../../components/Page'
import Button from '../../components/Button'
import TopNav from '../../components/TopNav'
import TextInput from '../../components/TextInputColumn'
import Title from './Title'
import RegisterBox from './RegisterBox'
import messages from './messages'
import { getErrorMessage } from './helpers'

class RegisterPage extends React.PureComponent {
  state = {
    fields: {
      firstName: { value: '', valid: true },
      lastName: { value: '', valid: true },
      birthDate: { value: '', valid: true },
      cpf: { value: '', valid: true },
      rg: { value: '', valid: true },
      address: { value: '', valid: true },
      phone: { value: '', valid: true },
      cellphone: { value: '', valid: true },
      occupation: { value: '', valid: true },
      institution: { value: '', valid: true },
      justification: { value: '', valid: true },
      email: { value: '', valid: true },
      password: { value: '', valid: true },
      confirmPassword: { value: '', valid: true }
    }
  }

  getLabel = (name) => {
    const { fields } = this.state
    if (!fields[name].valid) {
      return (
        <>
          <FormattedMessage {...messages[name]} />
          <span style={{ color: 'red' }}> invalid</span>
        </>
      )
    }
    return <FormattedMessage {...messages[name]} />
  }

  validate = ({ name, value, shouldValidate }) => {
    const { fields } = this.state
    logger.debug('TODO: implement validation:', { name, value, shouldValidate })
    switch (name) {
      case 'confirmPassword': {
        return { value, valid: value === fields.password.value }
      }
      default: {
        return { value, valid: !shouldValidate }
      }
    }
  }

  isFormValid = () => {
    const { fields } = this.state
    for (const field of Object.keys(fields)) {
      if (!fields[field].valid) return false
    }
    return true
  }

  updateField = (name, value) => {
    logger.debug('updateField', { name, value })
    this.setState(state => ({
      fields: {
        ...state.fields,
        [name]: this.validate({ name, value })
      }
    }))
  }

  submit = async (evt) => {
    evt.preventDefault()
    const { fields } = this.state
    const payload = {}

    if (!this.isFormValid()) {
      alert('Please fix the errors before submitting...')
    }

    for (const field of Object.keys(fields)) {
      payload[field] = fields[field].value
    }

    delete payload.confirmPassword

    logger.debug('RegisterPage.submit > payload:', payload)
    const { ok, data } = await users.post(payload)
    if (ok) {
      alert(
        'Congratulations! You completed your registration and now it is now pending approval. You will receive an email when Administrator approves your access.'
      )
      logger.debug('Registration complete! data:', data)
    } else {
      alert(`Sorry! Registration unsuccessful:\n${getErrorMessage(data)}`)
      logger.debug('Registration error:', data)
    }
  }

  render () {
    const { fields } = this.state
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
              id="firstName"
              key="firstName"
              label={this.getLabel('firstName')}
              name="firstName"
              value={fields.firstName.value}
              onChange={(evt) => {
                this.updateField('firstName', evt.target.value)
              }}
            />
            <TextInput
              id="lastName"
              key="lastName"
              label={this.getLabel('lastName')}
              name="lastName"
              value={fields.lastName.value}
              onChange={(evt) => {
                this.updateField('lastName', evt.target.value)
              }}
            />
            <TextInput
              id="birthDate"
              key="birthDate"
              label={this.getLabel('birthDate')}
              name="birthDate"
              value={fields.birthDate.value}
              onChange={(evt) => {
                this.updateField('birthDate', evt.target.value)
              }}
            />
            <TextInput
              id="cpf"
              key="cpf"
              label={this.getLabel('cpf')}
              name="cpf"
              value={fields.cpf.value}
              onChange={(evt) => {
                this.updateField('cpf', evt.target.value)
              }}
            />
            <TextInput
              id="rg"
              key="rg"
              label={this.getLabel('rg')}
              name="rg"
              value={fields.rg.value}
              onChange={(evt) => {
                this.updateField('rg', evt.target.value)
              }}
            />
            <TextInput
              id="phone"
              key="phone"
              label={this.getLabel('phone')}
              name="phone"
              value={fields.phone.value}
              onChange={(evt) => {
                this.updateField('phone', evt.target.value)
              }}
            />
            <TextInput
              id="cellphone"
              key="cellphone"
              label={this.getLabel('cellphone')}
              name="cellphone"
              value={fields.cellphone.value}
              onChange={(evt) => {
                this.updateField('cellphone', evt.target.value)
              }}
            />
            <TextInput
              id="occupation"
              key="occupation"
              label={this.getLabel('occupation')}
              name="occupation"
              value={fields.occupation.value}
              onChange={(evt) => {
                this.updateField('occupation', evt.target.value)
              }}
            />
            <TextInput
              id="institution"
              key="institution"
              label={this.getLabel('institution')}
              name="institution"
              value={fields.institution.value}
              onChange={(evt) => {
                this.updateField('institution', evt.target.value)
              }}
            />
            <TextInput
              id="address"
              key="address"
              label={this.getLabel('address')}
              name="address"
              value={fields.address.value}
              onChange={(evt) => {
                this.updateField('address', evt.target.value)
              }}
            />
            <TextInput
              id="justification"
              key="justification"
              label={this.getLabel('justification')}
              name="justification"
              value={fields.justification.value}
              onChange={(evt) => {
                this.updateField('justification', evt.target.value)
              }}
            />
            <TextInput
              id="email"
              key="email"
              label={this.getLabel('email')}
              name="email"
              value={fields.email.value}
              onChange={(evt) => {
                this.updateField('email', evt.target.value)
              }}
            />
            <TextInput
              id="password"
              key="password"
              label={this.getLabel('password')}
              name="password"
              value={fields.password.value}
              type="password"
              onChange={(evt) => {
                this.updateField('password', evt.target.value)
              }}
            />
            <TextInput
              id="confirmPassword"
              key="confirmPassword"
              label={this.getLabel('confirmPassword')}
              name="confirmPassword"
              value={fields.confirmPassword.value}
              type="password"
              onChange={(evt) => {
                this.updateField('confirmPassword', evt.target.value)
              }}
            />
            <Button onClick={this.submit} color="primary" variant="contained">
              <FormattedMessage {...messages.register} />
            </Button>
          </Form>
        </RegisterBox>
      </Page>
    )
  }
}

export default RegisterPage
