const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  env: {
    API_URL: process.env.CV_URL
  }
})
