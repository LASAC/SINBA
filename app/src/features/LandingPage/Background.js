import React from 'react'
import styled from 'styled-components'
import { lightGray } from '../../components/GlobalStyle'
import NormalImage from '../../components/Img'
import logo from './logo.png'

const Div = styled.div`
  background-color: ${lightGray};
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`

const Img = styled(NormalImage)`
  width: 100% !important;
  object-fit: contain;
`

const Background = () => (
  <Div>
    <Img src={logo} alt="Brasil" />
  </Div>
)

export default Background
