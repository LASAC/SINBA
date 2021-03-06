import React from 'react'
import styled from 'styled-components'
import Types from '../../types'

const TitleWrapper = styled.div`
  margin: 0 0 20px;
  font-weight: bold;
  border-bottom: 1px solid #d9dee4;

  margin-top: -10px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 20px;

  padding-left: 20px;
  padding-bottom: 10px;
`

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>

Title.propTypes = {
  children: Types.childrenComponent.isRequired
}

export default Title
