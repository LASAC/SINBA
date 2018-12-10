import React from 'react'
import { bool, node, string } from 'prop-types'
import styled from 'styled-components'
import BaseInput from './Input'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled(BaseInput)`
  margin: 10px 0;
`

const LabelWrapper = styled.div`
  text-align: left;
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
  column: bool,
  name: string,
  id: string,
  label: node,
  type: string,
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
