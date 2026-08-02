import useTranslation from 'next-translate/useTranslation'
import PropTypes from 'prop-types'

import styles from '../styles/ProofStrip.module.css'

export default function ProofStrip ({ id, key }) {
  const { t } = useTranslation('home')
  const points = t('proofStrip.points', {}, { returnObjects: true })

  return (
        <section id={id} key={key} className={styles.proofStrip}>
          <h2 className={styles.heading}>{t('proofStrip.heading')}</h2>
          <ul className={styles.pointsList}>
            {
              points.map((point, index) => (
                <li key={index} className={styles.point}>{point}</li>
              ))
            }
          </ul>
        </section>
  )
}

ProofStrip.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
