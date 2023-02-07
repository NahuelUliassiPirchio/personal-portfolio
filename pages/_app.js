import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from '../providers/ThemeProvider'
import('../styles/globals.css')

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
