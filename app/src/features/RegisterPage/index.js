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

// TODO: get label from messages based on the name passed
const getLabel = name => <FormattedMessage {...messages[name]} />

export class RegisterPage extends React.PureComponent {
  state = {
    fields: {
      name: { value: '', valid: true },
      lastName: { value: '', valid: true },
      birthDate: { value: '', valid: true },
      cpf: { value: '', valid: true },
      rg: { value: '', valid: true },
      address: { value: '', valid: true },
      telephone: { value: '', valid: true },
      cellphone: { value: '', valid: true },
      profession: { value: '', valid: true },
      institution: { value: '', valid: true },
      justification: { value: '', valid: true },
      email: { value: '', valid: true },
      password: { value: '', valid: true },
      confirmPassword: { value: '', valid: true }
    }
  }

  render () {
    const { fields } = this.state
    return (
      <Page>
        <Helmet>
          <title>Register Page</title>
          <meta name='description' content='Description of Register Page' />
        </Helmet>
        <TopNav>
          <Link to='/login'>
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
              key='name'
              label={getLabel('name')}
              name='name'
              value={fields.name.value}
              onChange={evt => {
                this.updateField('name', evt.target.value)
              }}
            />
            <TextInput
              key='lastName'
              label={getLabel('lastName')}
              name='lastName'
              value={fields.lastName.value}
              onChange={evt => {
                this.updateField('lastName', evt.target.value)
              }}
            />
            <TextInput
              key='birthDate'
              label={getLabel('birthDate')}
              name='birthDate'
              value={fields.birthDate.value}
              onChange={evt => {
                this.updateField('birthDate', evt.target.value)
              }}
            />
            <TextInput
              key='cpf'
              label={getLabel('cpf')}
              name='cpf'
              value={fields.cpf.value}
              onChange={evt => {
                this.updateField('cpf', evt.target.value)
              }}
            />
            <TextInput
              key='rg'
              label={getLabel('rg')}
              name='rg'
              value={fields.rg.value}
              onChange={evt => {
                this.updateField('rg', evt.target.value)
              }}
            />
            <TextInput
              key='telephone'
              label={getLabel('telephone')}
              name='telephone'
              value={fields.telephone.value}
              onChange={evt => {
                this.updateField('telephone', evt.target.value)
              }}
            />
            <TextInput
              key='cellphone'
              label={getLabel('cellphone')}
              name='cellphone'
              value={fields.cellphone.value}
              onChange={evt => {
                this.updateField('cellphone', evt.target.value)
              }}
            />
            <TextInput
              key='profession'
              label={getLabel('profession')}
              name='profession'
              value={fields.profession.value}
              onChange={evt => {
                this.updateField('profession', evt.target.value)
              }}
            />
            <TextInput
              key='institution'
              label={getLabel('institution')}
              name='institution'
              value={fields.institution.value}
              onChange={evt => {
                this.updateField('institution', evt.target.value)
              }}
            />
            <TextInput
              key='justification'
              label={getLabel('justification')}
              name='justification'
              value={fields.justification.value}
              onChange={evt => {
                this.updateField('justification', evt.target.value)
              }}
            />
            <TextInput
              key='email'
              label={getLabel('email')}
              name='email'
              value={fields.email.value}
              onChange={evt => {
                this.updateField('email', evt.target.value)
              }}
            />
            <TextInput
              key='password'
              label={getLabel('password')}
              name='password'
              value={fields.password.value}
              type='password'
              onChange={evt => {
                this.updateField('password', evt.target.value)
              }}
            />
            <TextInput
              key='confirmPassword'
              label={getLabel('confirmPassword')}
              name='confirmPassword'
              value={fields.confirmPassword.value}
              type='password'
              onChange={evt => {
                this.updateField('confirmPassword', evt.target.value)
              }}
            />
            <Button
              onClick={evt => {
                evt.preventDefault()
                console.log('TODO: validate and submit form')
              }}
              color='primary'
              variant='contained'
            >
              <FormattedMessage {...messages.register} />
            </Button>
          </Form>
        </RegisterBox>
      </Page>
    )
  }

  validate = ({ name, value, shouldValidate }) => {
    console.log('TODO: implement validation:', { name, value, shouldValidate })
    switch (name) {
      default: {
        return { value, valid: !shouldValidate }
      }
    }
  }

  updateField = (name, value) => {
    console.log('updateField', { name, value })
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: this.validate({ name, value })
      }
    })
  }
}

export default RegisterPage
