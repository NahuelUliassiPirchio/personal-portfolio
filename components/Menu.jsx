import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Menu ({ sections }) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <menu className={styles.menu}>
          <ul className={styles.menuList}>
            {sections.map((section, index) => (
              <li key={index} className={styles.menuItem} >
                <Link href={`#${section.url}`} className={styles.link} onClick={() => setMenuOpen(false)}>
                    {section.title}
                </Link>
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
    url: PropTypes.string.isRequired
  })).isRequired
}
