import React from 'react'
import styled from 'styled-components'
import BaseBox from 'components/Box'
import Types from 'types'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`

const Box = styled(BaseBox)`
  min-width: 400px;
  min-height: 150px;
`

const LoginView = ({ children }) => (
  <Wrapper>
    <Box>{children}</Box>
  </Wrapper>
)

LoginView.propTypes = {
  children: Types.childrenComponent,
}

export default LoginView
