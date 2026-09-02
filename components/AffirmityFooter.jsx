import PropTypes from 'prop-types'
import Link from 'next/link'

import AffirmitySigil from './AffirmitySigil'
import AffirmityPlayIcon from './AffirmityPlayIcon'
import styles from '../styles/AffirmityChrome.module.css'

export default function AffirmityFooter ({ termsLabel, copyright, playStoreLabel, playStoreHref = '#' }) {
  return (
    <footer className={styles.footer}>
      <AffirmitySigil size={16} className={styles.footerSigil} />
      <Link href='/apps/affirmity/terms' className={styles.footerLink}>
        {termsLabel}
      </Link>
      <a href={playStoreHref} className={styles.footerBadge}>
        <AffirmityPlayIcon size={14} />
        {playStoreLabel}
      </a>
      <p className={styles.footerCopy}>{copyright}</p>
    </footer>
  )
}

AffirmityFooter.propTypes = {
  termsLabel: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
  playStoreLabel: PropTypes.string.isRequired,
  playStoreHref: PropTypes.string
}
