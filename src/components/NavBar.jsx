import Image from 'next/image'
import React from 'react'
import logo from '../public/images/UPLogo.svg'
import DynamicIndex from './DynamicIndex'
import styles from '../styles/NavBar.module.css'

export default function NavBar () {
  const sections = [
    { title: 'Home', url: 'home' },
    { title: 'About', url: 'about' },
    { title: 'Contact', url: 'contact' },
    { title: 'Blog', url: 'blog' }
  ]

  return (
        <header className={styles.navBar}>
          <Image className={styles.logo} alt='logo' src={logo} width={150} height={150} />
          <DynamicIndex sections={sections} />
        </header>
  )
}
