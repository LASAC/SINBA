import styled from 'styled-components'
import { mainColor, mainFontFamily } from '../../components/GlobalStyle'

const Main = styled.main`
  nav {
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

    .button {
      color: ${mainColor} !important;
      letter-spacing: 0.1rem;
      font-family: ${mainFontFamily};
      font-size: 12px;
      font-weight: bold;
      padding: 0;
      text-transform: uppercase;
      text-decoration: none;

      button {
        margin: -7px 0;
      }
    }

    .link {
      align-content: center;
      align-items: center;
      color: ${mainColor} !important;
      letter-spacing: 0.1rem;
      font-family: ${mainFontFamily};
      font-size: 12px;
      font-weight: 600;
      padding: 0;
      text-transform: uppercase;
      text-decoration: none;
      min-width: var(--button-squared-min-width);
      display: inherit;
    }
  }
`

export default Main
