import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'

export default function Document () {
  return (
    <Html>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Borel&family=Bricolage+Grotesque:opsz@10..48&family=Roboto+Slab&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  )
}
