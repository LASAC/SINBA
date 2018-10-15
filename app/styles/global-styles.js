import { injectGlobal } from 'styled-components'

import './raleway.css'

export const mainFontFamily = "'Raleway', sans-serif"
export const mainColor = '#636b6f'

export const darkGray = '#EDEDED'
export const lightGray = '#f7f7f7'

export const topNavBackgroundColor = lightGray
export const backgroundColor = darkGray

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    display: flex;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${mainFontFamily} /* 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  body.fontLoaded {
    font-family: ${mainFontFamily} /* 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  #app {
    background-color: ${backgroundColor};
    min-height: 100%;
    min-width: 100%;
    overflow: scroll;
  }

  h1 {
    color: ${mainColor}
  }

  p,
  label {
    font-family: ${mainFontFamily} /* Georgia, Times, 'Times New Roman', serif; */
    line-height: 1.5em;
  }
`
