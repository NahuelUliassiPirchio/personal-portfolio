import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Menu.module.css'

export default function Menu ({ sections, isLocalPage = false }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  // Mirrors DynamicIndex's canScrollInPage: a page that passed its own
  // sections (e.g. a project detail page) has those anchors locally too.
  const canScrollInPage = isHome || isLocalPage

  return (
    <>
      <div className={`${styles.navIcon} ${menuOpen && styles.open}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <menu className={styles.menu}>
          <ul className={styles.menuList}>
            {sections.map((section, index) => (
              <li key={index} className={styles.menuItem} >
                {section.type === 'route'
                  ? (
                    <Link href={section.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                      {section.title}
                    </Link>
                    )
                  : (
                    <Link href={canScrollInPage ? `#${section.url}` : `/#${section.url}`} className={styles.link} onClick={() => setMenuOpen(false)}>
                      {section.title}
                    </Link>
                    )}
              </li>
            ))}
          </ul>
        </menu>
      )}
    </>
  )
}

Menu.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['anchor', 'route']).isRequired,
    url: PropTypes.string,
    href: PropTypes.string
  })).isRequired,
  isLocalPage: PropTypes.bool
}
