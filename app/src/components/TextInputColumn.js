import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'
import BaseInput from './Input'

const Label = styled.label`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
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

const TextInput = ({
  column, id, label, name, type, ...rest
}) => (
  <Label htmlFor={id || name}>
    <LabelWrapper>{label}</LabelWrapper>
    <Input type={type} name={name} id={id || name} {...rest} />
  </Label>
)

TextInput.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  label: node.isRequired,
  type: string
}

TextInput.defaultProps = {
  type: 'text'
}

export default TextInput
