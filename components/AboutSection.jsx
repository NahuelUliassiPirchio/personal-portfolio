import useTranslation from 'next-translate/useTranslation'
import PropTypes from 'prop-types'

import styles from '../styles/AboutSection.module.css'

export default function AboutSection ({ id, key }) {
  const { t } = useTranslation('about')

  return (
        <section id={id} key={key} className={styles.aboutSection}>
          <div id='introduction' className={styles.introductionContainer}>
            <h2 className={styles.introductionTitle}>{t('aboutMeTitle')}</h2>
            <h3 className={styles.introduction}>{t('introduction1')}</h3>
            <h3 className={styles.introduction}>{t('introduction2')}</h3>
          </div>
        </section>
  )
}

AboutSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
