import Image from 'next/image'
import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'

import logo from '../public/images/UPLogo.svg'
import darkLogo from '../public/images/UPDarkLogo.svg'
import mobileLogo from '../public/images/ShortUPLogo.svg'
import darkMobileLogo from '../public/images/ShortUPDarkLogo.svg'
import DynamicIndex from './DynamicIndex'
import LanguageManager from './LanguageManager'
import ThemeToggler from './ThemeToggler'
import ThemeContext from '../context/ThemeContext'
import Menu from './Menu'

import styles from '../styles/NavBar.module.css'

export default function NavBar ({ providedSections }) {
  const { t } = useTranslation('home')
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  const sections = providedSections || [
    { title: t('about'), url: 'about' },
    { title: t('skills'), url: 'skills' },
    { title: t('projects'), url: 'projects' },
    { title: t('contact'), url: 'contact' }
  ]

  return (
        <header className={styles.navBar}>
          <Link href='/' className={styles.desktopLogo}>
            <Image src={isDark ? darkLogo : logo} alt='Logo' width={100} height={100} />
          </Link>
          <DynamicIndex sections={sections} />
          <div className={styles.styleContainer}>
            <LanguageManager />
            <ThemeToggler />
          </div>
          <Image className={styles.mobileLogo} src={isDark ? darkMobileLogo : mobileLogo} alt='Logo' width={100} height={100} />
          <Menu sections={sections} />
        </header>
  )
}

NavBar.propTypes = {
  providedSections: PropTypes.array
}
