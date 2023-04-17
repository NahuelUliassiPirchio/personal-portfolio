const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  env: {
    CV_URL_ES: process.env.CV_URL_ES,
    CV_URL_EN: process.env.CV_URL_EN
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
})
