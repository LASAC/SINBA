import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseBox from 'components/Box'

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
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default LoginView
