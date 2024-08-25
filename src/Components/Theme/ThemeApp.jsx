import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import Main from './Main'

function ThemeApp() {
  return (
    <ThemeProvider>
        <Main/>
    </ThemeProvider>
  )
}

export default ThemeApp
