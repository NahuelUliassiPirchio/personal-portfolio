import React, { useContext } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import ThemeContext from '../context/ThemeContext'
import Image from 'next/image'
import PropTypes from 'prop-types'

import arrow from '../public/icons/scroll-down.svg'
import darkArrow from '../public/icons/dark-scroll-down.svg'
import styles from '../styles/AboutSection.module.css'

export default function AboutSection ({ id, key }) {
  const { t } = useTranslation('about')
  const { theme } = useContext(ThemeContext)

  return (
        <section id={id} key={key} className={styles.aboutSection}>
            <div className={styles.aboutSection__title}>
              <h1 className={styles.greetings}>{t('greetings')}</h1>
              <h1 className={styles.title}>{t('title')}</h1>
              <Link href="#introduction" className={styles.scrollDown}>
                <Image src={theme === 'dark' ? darkArrow : arrow} alt="Scroll down" width={64} height={64} />
              </Link>
            </div>
            <h2 id='introduction' className={styles.introduction}>{t('introduction')}</h2>
        </section>
  )
}

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
