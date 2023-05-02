const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  env: {
    CV_URL_ES: process.env.CV_URL_ES,
    CV_URL_EN: process.env.CV_URL_EN
  },
  publicRuntimeConfig: {
    BASIC_STORE_API: process.env.BASIC_STORE_API,
    STOP_ROWS_API: process.env.STOP_ROWS_API
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'www.npmjs.com'
      },
      {
        protocol: 'https',
        hostname: 'www.clipartmax.com'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
})
