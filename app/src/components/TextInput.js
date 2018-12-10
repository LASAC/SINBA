import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'
import BaseInput from './Input'

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Input = styled(BaseInput)`
  width: 85%;
  margin: 10px;
`

const LabelWrapper = styled.div`
  width: 25%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TextInput = ({ type, name, id, label, ...rest }) => (
  <Label htmlFor={id || name}>
    <LabelWrapper>{label}</LabelWrapper>
    <Input type={type} name={name} id={id || name} {...rest} />
  </Label>
)

TextInput.propTypes = {
  name: string,
  id: string,
  label: node,
  type: string,
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
