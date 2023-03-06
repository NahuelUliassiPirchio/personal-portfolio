import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import NavBar from './NavBar'

import styles from '../styles/Layout.module.css'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Uliassi Pirchio Nahuel</title>
      </Head>
      <div className={styles.layout}>
        <NavBar />
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
