import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'

export default function Document () {
  return (
    <Html>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  )
}
