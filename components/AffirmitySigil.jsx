import PropTypes from 'prop-types'

// Authored mark drawn from Affirmity's key art: a circle inside a triangle,
// the same single-stroke sigil that sits at the forehead in the brand image.
// Kept as one small, consistently-weighted line icon — reused sparingly
// (nav mark, footer, section dividers), never as a decorative filler icon.
export default function AffirmitySigil ({ size = 20, className }) {
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
        d='M12 3.5L21 19H3L12 3.5Z'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='14.5' r='3.1' stroke='currentColor' strokeWidth='1.2' />
    </svg>
  )
}

AffirmitySigil.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}
