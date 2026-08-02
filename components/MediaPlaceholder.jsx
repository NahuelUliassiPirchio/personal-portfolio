import useTranslation from 'next-translate/useTranslation'
import PropTypes from 'prop-types'

import styles from '../styles/MediaPlaceholder.module.css'

export default function MediaPlaceholder ({ label, ratio = '16/9' }) {
  const { t } = useTranslation('common')

  return (
    <div className={styles.mediaPlaceholder} style={{ aspectRatio: ratio }}>
      <span className={styles.label}>{label || t('mediaComingSoon')}</span>
    </div>
  )
}

MediaPlaceholder.propTypes = {
  label: PropTypes.string,
  ratio: PropTypes.string
}
