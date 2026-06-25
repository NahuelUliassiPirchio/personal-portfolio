import PropTypes from 'prop-types'
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Space_Grotesk } from 'next/font/google'

import ThemeProvider from '../providers/ThemeProvider'
import('../styles/globals.css')

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

function MyApp ({ Component, pageProps }) {
  return (
    <div className={spaceGrotesk.variable}>
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
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
