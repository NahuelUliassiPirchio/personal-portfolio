import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ProjectSectionStyles from '../styles/ProjectsSection.module.css'
import styles from '../styles/DynamicIndex.module.css'

export default function DynamicIndex ({ sections, isLocalPage = false }) {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  // `isLocalPage` is true when the caller (e.g. pages/projects/[url].js) passed
  // its own page's section ids via `providedSections` — those anchors exist on
  // the current page regardless of whether it's `/`, so they must scroll in
  // place rather than degrade to a `/#id` link to the homepage.
  const canScrollInPage = isHome || isLocalPage
  const [activeSection, setActiveSection] = useState(sections[0])

  useEffect(() => {
    const sectionsDiv = document.querySelectorAll('section')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = sections.find(section => section.url === entry.target.id)
          if (section) {
            setActiveSection(section)
          }
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
    const sectionId = sections.find(section => section.title === e.target.textContent)?.url
    const section = sectionId ? document.getElementById(sectionId) : null
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ul className={styles.index}>
        {
        sections.map((section, index) => (
            <li key={index}>
                {section.type === 'route'
                  ? (
                    <Link href={section.href} className={styles.inactiveSection}>
                      {section.title}
                    </Link>
                    )
                  : canScrollInPage
                    ? (
                      <button
                        onClick={handleIndexClick}
                        className={section.url === activeSection?.url ? styles.activeSection : styles.inactiveSection}
                      >
                          {section.title}
                      </button>
                      )
                    : (
                      <Link href={`/#${section.url}`} className={styles.inactiveSection}>
                        {section.title}
                      </Link>
                      )}
            </li>
        ))
        }
    </ul>
  )
}

DynamicIndex.propTypes = {
  sections: PropTypes.array.isRequired,
  isLocalPage: PropTypes.bool
}
