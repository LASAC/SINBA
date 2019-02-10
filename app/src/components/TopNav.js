import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Types from '../types'
import { topNavBackgroundColor, mainFontFamily, mainColor } from './GlobalStyle'

const backgroundColor = topNavBackgroundColor

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${backgroundColor};
  border-bottom: 1px solid #d9dee4;
  position: fixed;
  width: 100%;
  top: 0;

  a {
    text-decoration: none;
  }
`

export const Logo = styled.div`
  color: ${mainColor};
  font-size: 30px;
  font-weight: 300;
  font-family: ${mainFontFamily};
  padding: 2px 10px 0;
`

export const Right = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;

  a {
    color: #515356 !important;
    font-family: ${mainFontFamily};
    font-size: 13px;
    letter-spacing: 0.1rem;
    padding: 12px 15px 13px;
  }
`

const TopNav = ({ children }) => (
  <Wrapper>
    <Link to="/">
      <Logo>SINBA</Logo>
    </Link>
    <Right>{children}</Right>
  </Wrapper>
)

TopNav.propTypes = {
  children: Types.childrenComponent.isRequired
}

export default TopNav
