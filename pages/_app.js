import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import ThemeProvider from '../providers/ThemeProvider'
import('../styles/globals.css')

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Nahuel Uliassi Pirchio" />
        <meta name="keywords" content="portfolio, full-stack, developer, web developer, software developer, Nahuel Uliassi Pirchio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
