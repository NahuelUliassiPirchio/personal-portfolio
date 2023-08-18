import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'

import styles from '../styles/Layout.module.css'

export default function Layout ({ children }) {
  return (
    <main className={styles.layout}>
      <NavBar />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
