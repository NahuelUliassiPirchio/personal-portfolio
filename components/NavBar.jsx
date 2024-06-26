import { useContext } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

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

  const { locale } = useRouter()
  const resumeLink = locale.startsWith('es') ? process.env.CV_URL_ES : process.env.CV_URL_EN

  const sections = providedSections || [
    { title: t('about'), url: 'about' },
    { title: t('experience'), url: 'experience' },
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
          <Link className={styles.resumeLink} href={resumeLink} passHref target={'_blank'}>
            {t('resumeText')}
          </Link>
          <div className={styles.styleContainer}>
            <LanguageManager />
            <ThemeToggler />
          </div>
          <Link href='/' className={styles.mobileLogo}>
            <Image src={isDark ? darkMobileLogo : mobileLogo} alt='Logo' width={100} height={100} />
          </Link>
          <Menu sections={sections} />
        </header>
  )
}

NavBar.propTypes = {
  providedSections: PropTypes.array
}
