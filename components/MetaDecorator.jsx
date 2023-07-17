import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

export default function MetaDecorator ({ title, description, image }) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta
            property="og:description"
            content={description}
        />
        <meta
            property="og:image"
            content={image}
        />
    </Head>
  )
}

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
}
