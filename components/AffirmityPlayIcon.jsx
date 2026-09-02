import PropTypes from 'prop-types'

// Authored play-button glyph in Affirmity's single-stroke line style — a
// generic store/play cue, not a reproduction of Google's trademarked Play
// Store badge asset (that mark can't be redrawn freely; the real badge has
// to come from Google's official brand assets once the listing is live).
export default function AffirmityPlayIcon ({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      aria-hidden='true'
    >
      <path
        d='M6 4.2c0-.9.98-1.44 1.73-.96l12 7.8c.68.44.68 1.44 0 1.88l-12 7.8c-.75.48-1.73-.06-1.73-.96V4.2Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinejoin='round'
      />
    </svg>
  )
}

AffirmityPlayIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}
