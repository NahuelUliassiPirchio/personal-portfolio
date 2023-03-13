const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  images: {
    domains: ['picsum.photos', 'www.shutterstock.com', 'brilliant-staff-media.s3-us-west-2.amazonaws.com']
  }
})
