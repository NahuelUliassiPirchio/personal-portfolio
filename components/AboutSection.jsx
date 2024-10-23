import { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { Space_Grotesk } from 'next/font/google'

import ThemeContext from '../context/ThemeContext'
import arrow from '../public/icons/scroll-down.svg'
import darkArrow from '../public/icons/dark-scroll-down.svg'
import styles from '../styles/AboutSection.module.css'

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin']
})
export default function AboutSection ({ id, key }) {
  const { t } = useTranslation('about')
  const { theme } = useContext(ThemeContext)

  const handleScroll = () => {
    const introduction = document.getElementById('introduction')
    introduction.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <section id={id} key={key} className={styles.aboutSection}>
          <div className={styles.mainContainer}>
            <div className={styles.gradient} />
            <div className={`${styles.aboutSectionTitle} ${spaceGrotesk.className}`}>
              <h1 className={styles.greeting}>{t('greetings')}</h1>
              <h2 className={styles.title}>{t('title') + t('highlightedText')}</h2>
            </div>
          </div>
          <button className={styles.scrollDown} onClick={handleScroll}>
            <Image src={theme === 'dark' ? darkArrow : arrow} alt="Scroll down" width={64} height={64} />
          </button>
          <div id='introduction' className={styles.introductionContainer}>
            <h2 className={styles.introductionTitle}>{t('aboutMeTitle')}</h2>
            <h3 className={styles.introduction}>{t('introduction1')}</h3>
            <h3 className={styles.introduction}>{t('introduction2')}</h3>
            <h3 className={styles.introduction}>{t('introduction3')}</h3>
          </div>
        </section>
  )
}

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
