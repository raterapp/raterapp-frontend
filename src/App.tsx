import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Welcome from './screens/Welcome'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  primary: '#4886FF',
  primaryGradient: 'linear-gradient(180deg, #4886FF 2.94%, #336BD8 100%)',
  black: '#053A44',
  gray: '#666666',
  emojiSize: '64px'
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
