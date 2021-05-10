import React, { useState, useContext } from 'react'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import defaultTheme from 'config/theme'

const ThemeContext = React.createContext()

function getTheme(customTheme) {
  return {
    ...customTheme,
    ...defaultTheme,
  }
}
function ThemeProvider({ children, customTheme = null }) {
  const [theme, setTheme] = useState(
    customTheme ? getTheme(customTheme) : defaultTheme,
  )
  function mergeTheme(theme) {
    setTheme({ ...defaultTheme, ...theme })
  }
  return (
    <ThemeContext.Provider value={{ theme, mergeTheme }}>
      <ThemeStyled theme={theme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}

export { ThemeProvider, useTheme }
