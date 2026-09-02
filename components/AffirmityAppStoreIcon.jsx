import PropTypes from 'prop-types'

// Authored app-tile glyph, matched to AffirmityPlayIcon's line weight — a
// generic "install this app" cue, not a reproduction of Apple's trademarked
// App Store icon. The real badge has to come from Apple's official
// marketing-asset guidelines once the listing is live.
export default function AffirmityAppStoreIcon ({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      aria-hidden='true'
    >
      <rect x='3.5' y='3.5' width='17' height='17' rx='5' stroke='currentColor' strokeWidth='1.3' />
      <path d='M12 8v7.2M12 15.2 8.8 12M12 15.2 15.2 12' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

AffirmityAppStoreIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}
