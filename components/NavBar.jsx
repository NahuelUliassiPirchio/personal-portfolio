import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import DynamicIndex from './DynamicIndex'
import LanguageManager from './LanguageManager'
import ThemeToggler from './ThemeToggler'
import Menu from './Menu'

import styles from '../styles/NavBar.module.css'

export default function NavBar ({ providedSections }) {
  const { t } = useTranslation('home')

  const { locale } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const resumeLink = locale.startsWith('es') ? process.env.CV_URL_ES : process.env.CV_URL_EN

  const sections = providedSections || [
    { title: t('about'), type: 'anchor', url: 'about' },
    { title: t('experience'), type: 'anchor', url: 'experience' },
    { title: t('skills'), type: 'anchor', url: 'skills' },
    { title: t('work'), type: 'anchor', url: 'featured-work' },
    { title: t('projects'), type: 'anchor', url: 'projects' },
    { title: t('contact'), type: 'anchor', url: 'contact' }
  ]

  return (
        <header className={`${styles.navBar} ${isScrolled ? styles.scrolled : ''}`}>
          <Link href='/' className={styles.logoContainer} title='Inicio'>
            <svg
              viewBox='0 0 1191 775'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.logo}
            >
              <path d='M 46.0 202.0 L 35.0 236.0 L 30.0 273.0 L 30.0 728.0 L 209.0 728.0 L 209.0 338.0 L 214.0 302.0 L 224.0 275.0 L 243.0 250.0 L 255.0 240.0 L 277.0 228.0 L 312.0 218.0 L 356.0 215.0 L 380.0 217.0 L 409.0 224.0 L 443.0 241.0 L 469.0 265.0 L 487.0 294.0 L 496.0 320.0 L 503.0 359.0 L 507.0 427.0 L 514.0 475.0 L 528.0 524.0 L 548.0 569.0 L 573.0 608.0 L 612.0 652.0 L 634.0 671.0 L 664.0 692.0 L 712.0 717.0 L 772.0 736.0 L 833.0 744.0 L 870.0 744.0 L 901.0 741.0 L 944.0 732.0 L 972.0 723.0 L 1023.0 699.0 L 1052.0 680.0 L 1074.0 662.0 L 1097.0 639.0 L 1116.0 615.0 L 1130.0 593.0 L 1148.0 554.0 L 1156.0 524.0 L 1160.0 491.0 L 1159.0 58.0 L 985.0 59.0 L 985.0 428.0 L 982.0 456.0 L 975.0 481.0 L 967.0 498.0 L 958.0 511.0 L 941.0 528.0 L 908.0 546.0 L 878.0 553.0 L 840.0 554.0 L 798.0 545.0 L 766.0 528.0 L 742.0 505.0 L 726.0 479.0 L 715.0 448.0 L 708.0 405.0 L 705.0 325.0 L 701.0 287.0 L 687.0 234.0 L 672.0 202.0 L 640.0 156.0 L 600.0 117.0 L 560.0 88.0 L 502.0 58.0 L 447.0 40.0 L 380.0 30.0 L 306.0 32.0 L 275.0 37.0 L 236.0 47.0 L 208.0 57.0 L 166.0 77.0 L 121.0 107.0 L 76.0 152.0 L 63.0 170.0 Z' />
            </svg>
          </Link>
          <DynamicIndex sections={sections} isLocalPage={Boolean(providedSections)} />
          <Link className={styles.resumeLink} href={resumeLink} passHref target={'_blank'}>
            {t('resumeText')}
          </Link>
          <div className={styles.styleContainer}>
            <LanguageManager />
            <ThemeToggler />
          </div>
          <Menu sections={sections} isLocalPage={Boolean(providedSections)} />
        </header>
  )
}

NavBar.propTypes = {
  providedSections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['anchor', 'route']).isRequired,
    url: PropTypes.string,
    href: PropTypes.string
  }))
}
