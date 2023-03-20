import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ProjectSectionStyles from '../styles/ProjectsSection.module.css'
import styles from '../styles/DynamicIndex.module.css'

export default function DynamicIndex ({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0].url)

  useEffect(() => {
    const sectionsDiv = document.querySelectorAll('section')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = sections.find(section => section.url === entry.target.id)
          setActiveSection(section)
        }
      })
    }, {
      threshold: 0.20
    })

    const animationObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.sectionAnimation)
          entry.target.classList.remove(styles.notAnimated)
          if (entry.target.id === 'projects') {
            entry.target.classList.add(ProjectSectionStyles.projectsAnimation)
          }
        }
      })
    }, {
      threshold: 0.10
    })

    sectionsDiv.forEach(section => {
      observer.observe(section)

      section.classList.add(styles.notAnimated)
      animationObserver.observe(section)
    })
  }, [])

  const handleIndexClick = (e) => {
    const sectionId = sections.find(section => section.title === e.target.textContent).url
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ul className={styles.index}>
        {
        sections.map((section, index) => (
            <li key={index} onClick={handleIndexClick}>
                <button
                className={section.url === activeSection.url ? styles.activeSection : styles.inactiveSection}
                >
                    {section.title}
                </button>
            </li>
        ))
        }
    </ul>
  )
}

DynamicIndex.propTypes = {
  sections: PropTypes.array.isRequired
}
