import React from 'react'
import Types from 'types'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '100%'};
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`

const Button = ({ children, ...rest }) => (
  <ButtonWrapper {...rest}>{children}</ButtonWrapper>
)

Button.propTypes = {
  children: Types.childrenComponent,
}

export default Button
