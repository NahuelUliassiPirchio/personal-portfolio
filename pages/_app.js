import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from '../providers/ThemeProvider'
import Head from 'next/head'
import('../styles/globals.css')

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Nahuel Uliassi Pirchio" />
        <meta name="keywords" content="portfolio, full-stack, developer, web developer, software developer, Nahuel Uliassi Pirchio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
