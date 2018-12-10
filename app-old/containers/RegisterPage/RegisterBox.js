import React from 'react'
import styled from 'styled-components'
import BaseBox from 'components/Box'
// import Box from 'components/Box'
import Types from 'types'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`

const Box = styled(BaseBox)`
  flex-direction: column;
  width: 90vw;

  @media only screen and (min-device-width: 540px) {
    max-width: 520px;
  }
`

const RegisterBox = ({ children }) => (
  <Wrapper>
    <Box>{children}</Box>
  </Wrapper>
)

RegisterBox.propTypes = {
  children: Types.childrenComponent,
}

export default RegisterBox
