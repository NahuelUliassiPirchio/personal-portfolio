import Image from 'next/image'
import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'

import logo from '../public/images/UPLogo.svg'
import darkLogo from '../public/images/UPDarkLogo.svg'
import DynamicIndex from './DynamicIndex'
import LanguageManager from './LanguageManager'
import ThemeToggler from './ThemeToggler'
import styles from '../styles/NavBar.module.css'
import ThemeContext from '../context/ThemeContext'

export default function NavBar () {
  const { t } = useTranslation('home')
  const { theme } = useContext(ThemeContext)

  const sections = [
    { title: t('home'), url: 'home' },
    { title: t('about'), url: 'about' },
    { title: t('contact'), url: 'contact' },
    { title: t('blog'), url: 'blog' }
  ]

  return (
        <header className={styles.navBar}>
          <Image src={theme === 'dark' ? darkLogo : logo} alt="Logo" width={150} height={150} />
          <DynamicIndex sections={sections} />
          <LanguageManager />
          <ThemeToggler />
        </header>
  )
}
