import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import PropTypes from 'prop-types'

import ThemeContext from '../context/ThemeContext'
import arrow from '../public/icons/scroll-down.svg'
import darkArrow from '../public/icons/dark-scroll-down.svg'
import styles from '../styles/AboutSection.module.css'
import BubblesBackground from './BubblesBackground'

export default function AboutSection ({ id, key }) {
  const { t } = useTranslation('about')
  const { theme } = useContext(ThemeContext)

  const handleScroll = () => {
    const introduction = document.getElementById('introduction')
    introduction.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <section id={id} key={key} className={styles.aboutSection}>
          <BubblesBackground/>
          <div className={styles.aboutSectionTitle}>
            <h1 className={styles.greeting}>{t('greetings')}</h1>
            <h2 className={styles.title}>{t('title')} <span>{t('highlightedText')}</span> </h2>
            <button className={styles.scrollDown} onClick={handleScroll}>
              <Image src={theme === 'dark' ? darkArrow : arrow} alt="Scroll down" width={64} height={64} />
            </button>
          </div>
          <div id='introduction' className={styles.introductionContainer}>
            <h1 className={styles.introductionTitle}>{t('aboutMeTitle')}</h1>
            <h2 className={styles.introduction}>{t('introduction1')}</h2>
            <h2 className={styles.introduction}>{t('introduction2')}</h2>
            <h2 className={styles.introduction}>{t('introduction3')}</h2>
          </div>
        </section>
  )
}

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
