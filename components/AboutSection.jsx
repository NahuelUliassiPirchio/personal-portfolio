import React, { useContext } from 'react'
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

  const handleScroll = () => {
    const introduction = document.getElementById('introduction')
    introduction.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <section id={id} key={key} className={styles.aboutSection}>
            <div className={styles.aboutSection__title}>
              <h1 className={styles.greeting}>{t('greetings')}</h1>
              <h2 className={styles.title}>{t('title')}</h2>
              <button className={styles.scrollDown} onClick={handleScroll}>
                <Image src={theme === 'dark' ? darkArrow : arrow} alt="Scroll down" width={64} height={64} />
              </button>
            </div>
            <h2 id='introduction' className={styles.introduction}>{t('introduction')}</h2>
        </section>
  )
}

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
