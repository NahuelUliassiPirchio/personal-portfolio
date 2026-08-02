import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/CaseStudyNav.module.css'

export default function CaseStudyNav ({ sections, headerId }) {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const header = document.getElementById(headerId)
    if (!header) return undefined

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting)
    }, { threshold: 0 })

    visibilityObserver.observe(header)

    return () => visibilityObserver.disconnect()
  }, [headerId])

  useEffect(() => {
    const activeSectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, { threshold: 0.3 })

    const observedSections = sections
      .map(section => document.getElementById(section.id))
      .filter(Boolean)

    observedSections.forEach(section => activeSectionObserver.observe(section))

    return () => activeSectionObserver.disconnect()
  }, [sections])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`${styles.caseStudyNav} ${visible ? styles.visible : ''}`}
      aria-label='Case study sections'
    >
      <ul className={styles.list}>
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={section.id === activeId ? styles.active : styles.inactive}
              onClick={(e) => handleClick(e, section.id)}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

CaseStudyNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  headerId: PropTypes.string.isRequired
}
