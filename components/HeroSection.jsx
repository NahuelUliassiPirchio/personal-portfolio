import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from '../styles/HeroSection.module.css'

export default function HeroSection ({ id, key, resumeLink }) {
  const { t } = useTranslation('home')

  return (
        <section id={id} key={key} className={styles.heroSection}>
          <div className={styles.gradient} />
          <div className={styles.heroContent}>
            <h1 className={styles.headline}>{t('hero.headline')}</h1>
            <p className={styles.supportingCopy}>{t('hero.supportingCopy')}</p>
            <div className={styles.ctaGroup}>
              <a href="#featured-work" className={styles.ctaPrimary}>{t('hero.ctaFeaturedWork')}</a>
              <Link href="/projects" className={styles.ctaSecondary}>{t('hero.ctaProjects')}</Link>
              <Link href={resumeLink} target="_blank" className={styles.ctaSecondary}>{t('downloadResume')}</Link>
            </div>
          </div>
        </section>
  )
}

HeroSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired
}
