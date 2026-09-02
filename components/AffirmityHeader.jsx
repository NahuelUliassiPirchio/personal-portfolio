import PropTypes from 'prop-types'
import Link from 'next/link'

import AffirmitySigil from './AffirmitySigil'
import AffirmityPlayIcon from './AffirmityPlayIcon'
import AffirmityAppStoreIcon from './AffirmityAppStoreIcon'
import styles from '../styles/AffirmityChrome.module.css'

export default function AffirmityHeader ({
  wordmark,
  playStoreCta,
  playStoreHref = '#',
  appStoreCta,
  appStoreHref = '#'
}) {
  return (
    <header className={styles.header}>
      <Link href='/apps/affirmity' className={styles.wordmark}>
        <AffirmitySigil size={18} className={styles.wordmarkSigil} />
        <span>{wordmark}</span>
      </Link>
      <div className={styles.headerCtas}>
        {playStoreCta && (
          <a href={playStoreHref} className={styles.headerCta} aria-label={playStoreCta} title={playStoreCta}>
            <AffirmityPlayIcon size={14} />
          </a>
        )}
        {appStoreCta && (
          <a href={appStoreHref} className={styles.headerCta} aria-label={appStoreCta} title={appStoreCta}>
            <AffirmityAppStoreIcon size={14} />
          </a>
        )}
      </div>
    </header>
  )
}

AffirmityHeader.propTypes = {
  wordmark: PropTypes.string.isRequired,
  playStoreCta: PropTypes.string,
  playStoreHref: PropTypes.string,
  appStoreCta: PropTypes.string,
  appStoreHref: PropTypes.string
}
