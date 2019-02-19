/**
 *
 * RegisterPage
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import Page from '../../components/Page'
import Button from '../../components/Button'
import TopNav from '../../components/TopNav'
import TextInput from '../../components/TextInputColumn'
import Title from './Title'
import RegisterBox from './RegisterBox'
import messages from './messages'
import users from '../../services/backend/users'
import logger from '../../services/logger'

const getLabel = name => <FormattedMessage {...messages[name]} />

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

  validate = ({ name, value, shouldValidate }) => {
    logger.debug('TODO: implement validation:', { name, value, shouldValidate })
    switch (name) {
      default: {
        return { value, valid: !shouldValidate }
      }
    }
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
    for (const field of Object.keys(fields)) {
      payload[field] = fields[field].value
    }

    logger.debug('RegisterPage.submit > payload:', payload)
    const { ok, data } = await users.post(payload)
    if (ok) {
      alert('Registration complete!')
      logger.debug('Registration complete! data:', data)
    } else {
      alert('Sorry! Registration unsuccessful...')
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
              key="firstName"
              label={getLabel('firstName')}
              name="firstName"
              value={fields.firstName.value}
              onChange={(evt) => {
                this.updateField('firstName', evt.target.value)
              }}
            />
            <TextInput
              key="lastName"
              label={getLabel('lastName')}
              name="lastName"
              value={fields.lastName.value}
              onChange={(evt) => {
                this.updateField('lastName', evt.target.value)
              }}
            />
            <TextInput
              key="birthDate"
              label={getLabel('birthDate')}
              name="birthDate"
              value={fields.birthDate.value}
              onChange={(evt) => {
                this.updateField('birthDate', evt.target.value)
              }}
            />
            <TextInput
              key="cpf"
              label={getLabel('cpf')}
              name="cpf"
              value={fields.cpf.value}
              onChange={(evt) => {
                this.updateField('cpf', evt.target.value)
              }}
            />
            <TextInput
              key="rg"
              label={getLabel('rg')}
              name="rg"
              value={fields.rg.value}
              onChange={(evt) => {
                this.updateField('rg', evt.target.value)
              }}
            />
            <TextInput
              key="phone"
              label={getLabel('phone')}
              name="phone"
              value={fields.phone.value}
              onChange={(evt) => {
                this.updateField('phone', evt.target.value)
              }}
            />
            <TextInput
              key="cellphone"
              label={getLabel('cellphone')}
              name="cellphone"
              value={fields.cellphone.value}
              onChange={(evt) => {
                this.updateField('cellphone', evt.target.value)
              }}
            />
            <TextInput
              key="occupation"
              label={getLabel('occupation')}
              name="occupation"
              value={fields.occupation.value}
              onChange={(evt) => {
                this.updateField('occupation', evt.target.value)
              }}
            />
            <TextInput
              key="institution"
              label={getLabel('institution')}
              name="institution"
              value={fields.institution.value}
              onChange={(evt) => {
                this.updateField('institution', evt.target.value)
              }}
            />
            <TextInput
              key="address"
              label={getLabel('address')}
              name="address"
              value={fields.address.value}
              onChange={(evt) => {
                this.updateField('address', evt.target.value)
              }}
            />
            <TextInput
              key="justification"
              label={getLabel('justification')}
              name="justification"
              value={fields.justification.value}
              onChange={(evt) => {
                this.updateField('justification', evt.target.value)
              }}
            />
            <TextInput
              key="email"
              label={getLabel('email')}
              name="email"
              value={fields.email.value}
              onChange={(evt) => {
                this.updateField('email', evt.target.value)
              }}
            />
            <TextInput
              key="password"
              label={getLabel('password')}
              name="password"
              value={fields.password.value}
              type="password"
              onChange={(evt) => {
                this.updateField('password', evt.target.value)
              }}
            />
            <TextInput
              key="confirmPassword"
              label={getLabel('confirmPassword')}
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
