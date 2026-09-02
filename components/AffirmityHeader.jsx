import PropTypes from 'prop-types'
import Link from 'next/link'

import AffirmitySigil from './AffirmitySigil'
import AffirmityPlayIcon from './AffirmityPlayIcon'
import styles from '../styles/AffirmityChrome.module.css'

export default function AffirmityHeader ({ wordmark, cta, ctaHref = '#' }) {
  return (
    <header className={styles.header}>
      <Link href='/apps/affirmity' className={styles.wordmark}>
        <AffirmitySigil size={18} className={styles.wordmarkSigil} />
        <span>{wordmark}</span>
      </Link>
      {cta && (
        <a href={ctaHref} className={styles.headerCta}>
          <AffirmityPlayIcon size={14} />
          {cta}
        </a>
      )}
    </header>
  )
}

AffirmityHeader.propTypes = {
  wordmark: PropTypes.string.isRequired,
  cta: PropTypes.string,
  ctaHref: PropTypes.string
}
