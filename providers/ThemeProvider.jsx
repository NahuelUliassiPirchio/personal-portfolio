import React from 'react'
import ThemeContext from '../context/ThemeContext'
import PropTypes from 'prop-types'

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired
}
