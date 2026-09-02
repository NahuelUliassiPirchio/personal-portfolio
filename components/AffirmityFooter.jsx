import PropTypes from 'prop-types'
import Link from 'next/link'

import AffirmitySigil from './AffirmitySigil'
import AffirmityPlayIcon from './AffirmityPlayIcon'
import AffirmityAppStoreIcon from './AffirmityAppStoreIcon'
import styles from '../styles/AffirmityChrome.module.css'

export default function AffirmityFooter ({
  termsLabel,
  copyright,
  playStoreLabel,
  playStoreHref = '#',
  appStoreLabel,
  appStoreHref = '#'
}) {
  return (
    <footer className={styles.footer}>
      <AffirmitySigil size={16} className={styles.footerSigil} />
      <Link href='/apps/affirmity/terms' className={styles.footerLink}>
        {termsLabel}
      </Link>
      <div className={styles.footerBadges}>
        <a href={playStoreHref} className={styles.footerBadge}>
          <AffirmityPlayIcon size={14} />
          {playStoreLabel}
        </a>
        <a href={appStoreHref} className={styles.footerBadge}>
          <AffirmityAppStoreIcon size={14} />
          {appStoreLabel}
        </a>
      </div>
      <p className={styles.footerCopy}>{copyright}</p>
    </footer>
  )
}

AffirmityFooter.propTypes = {
  termsLabel: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
  playStoreLabel: PropTypes.string.isRequired,
  playStoreHref: PropTypes.string,
  appStoreLabel: PropTypes.string.isRequired,
  appStoreHref: PropTypes.string
}
