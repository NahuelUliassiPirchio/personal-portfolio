import Image from 'next/image'
import React from 'react'
import logo from '../public/images/UPLogo.svg'
import DynamicIndex from './DynamicIndex'
import styles from '../styles/NavBar.module.css'
import LanguageManager from './LanguageManager'
import useTranslation from 'next-translate/useTranslation'

export default function NavBar () {
  const { t } = useTranslation('home')

  const sections = [
    { title: t('home'), url: 'home' },
    { title: t('about'), url: 'about' },
    { title: t('contact'), url: 'contact' },
    { title: t('blog'), url: 'blog' }
  ]

  return (
        <header className={styles.navBar}>
          <Image className={styles.logo} alt='logo' src={logo} width={150} height={150} />
          <DynamicIndex sections={sections} />
          <LanguageManager />
        </header>
  )
}
