import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/DynamicIndex.module.css'

export default function DynamicIndex ({ sections }) {
  const [activeSection, setActiveSection] = React.useState(sections[0])

  React.useEffect(() => {
    const sectionsDiv = document.querySelectorAll('section')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = sections.find(section => section.title === entry.target.firstChild.textContent)
          setActiveSection(section)
        }
      })
    }, {
      threshold: 0.5
    })
    sectionsDiv.forEach(section => {
      observer.observe(section)
    })
  }, [])

  const handleIndexClick = (e) => {
    const section = document.getElementById(e.target.textContent.toLowerCase())
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ul className={styles.index}>
        {
        sections.map((section, index) => (
            <li key={index}>
                <button
                className={section.title === activeSection.title ? styles.activeSection : styles.inactiveSection}
                onClick={handleIndexClick}
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
