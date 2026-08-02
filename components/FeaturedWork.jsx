import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'

import MediaPlaceholder from './MediaPlaceholder'
import styles from '../styles/FeaturedWork.module.css'

export default function FeaturedWork ({ id, key }) {
  const { t } = useTranslation('home')
  const contributions = t('featuredWork.contributions', {}, { returnObjects: true })

  return (
        <section id={id} key={key} className={styles.featuredWork}>
          <h2>{t('featuredWork.sectionHeading')}</h2>
          <article className={styles.introCard}>
            <div className={styles.introMedia}>
              <MediaPlaceholder ratio="16/9" />
            </div>
            <div className={styles.introBody}>
              <h3 className={styles.introTitle}>{t('featuredWork.title')}</h3>
              <p className={styles.introDescription}>{t('featuredWork.description')}</p>
              <dl className={styles.metadata}>
                <div>
                  <dt>{t('featuredWork.roleLabel')}</dt>
                  <dd>{t('featuredWork.role')}</dd>
                </div>
                <div>
                  <dt>{t('featuredWork.periodLabel')}</dt>
                  <dd>{t('featuredWork.period')}</dd>
                </div>
                <div>
                  <dt>{t('featuredWork.environmentLabel')}</dt>
                  <dd>{t('featuredWork.environment')}</dd>
                </div>
                <div>
                  <dt>{t('featuredWork.scaleLabel')}</dt>
                  <dd>{t('featuredWork.scale')}</dd>
                </div>
              </dl>
              <Link href="/work/xnapper" className={styles.cta}>{t('featuredWork.cta')}</Link>
            </div>
          </article>
          <ul className={styles.contributions}>
            {
              contributions.map((contribution, index) => (
                <li key={index} className={styles.contributionCard}>
                  <h4>{contribution.title}</h4>
                  <p>{contribution.body}</p>
                </li>
              ))
            }
          </ul>
        </section>
  )
}

FeaturedWork.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
