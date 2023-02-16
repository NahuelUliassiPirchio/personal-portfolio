import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/DynamicIndex.module.css'

export default function DynamicIndex ({ sections }) {
  const [activeSection, setActiveSection] = React.useState(sections[0].url)

  React.useEffect(() => {
    const sectionsDiv = document.querySelectorAll('section')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.isIntersecting)
        if (entry.isIntersecting) {
          const section = sections.find(section => section.url === entry.target.id)
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
