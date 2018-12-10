import styled from 'styled-components'
import { mainColor, mainFontFamily } from '../../components/GlobalStyle'

const CenteredNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 13px;

  a {
    text-decoration: none;
    color: ${mainColor} !important;
    font-family: ${mainFontFamily};
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 5px 10px;
    text-transform: uppercase;
    z-index: 1;
  }
`

export default CenteredNav
