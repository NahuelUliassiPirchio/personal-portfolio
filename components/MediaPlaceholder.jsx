import useTranslation from 'next-translate/useTranslation'
import PropTypes from 'prop-types'

import styles from '../styles/MediaPlaceholder.module.css'

export default function MediaPlaceholder ({ label, ratio = '16/9', src, alt }) {
  const { t } = useTranslation('common')

  return (
    <div className={styles.mediaPlaceholder} style={{ aspectRatio: ratio }}>
      {
        src
          ? <img src={src} alt={alt} className={styles.media} />
          : <span className={styles.label}>{label || t('mediaComingSoon')}</span>
      }
    </div>
  )
}

MediaPlaceholder.propTypes = {
  label: PropTypes.string,
  ratio: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}
