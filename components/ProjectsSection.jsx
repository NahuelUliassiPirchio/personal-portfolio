import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import ProjectCard from './ProjectCard'

import styles from '../styles/ProjectsSection.module.css'

export default function ProjectsSection ({ id, key, featuredOnly = false }) {
  const { t } = useTranslation('projects')
  const allProjects = t('projects', { count: 1 }, { returnObjects: true })

  const featuredProjects = allProjects.filter(project => project.featured)
  const projects = featuredOnly
    ? (featuredProjects.length ? featuredProjects : allProjects.slice(0, 3))
    // Full catalog: featured-first ordering, sourced from the `featured` flag rather than a hardcoded slug list.
    : [...allProjects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

  return (
    <section id={id} key={key} className={styles.projectsSection}>
      <h2>{t('title')}</h2>
      <ul className={styles.projects}>
        {
          projects.map(project =>
            <ProjectCard key={project.url} project={project} t={t} variant={featuredOnly ? 'home' : 'catalog'} />
          )
        }
      </ul>
      {
        featuredOnly && (
          <Link href='/projects' className={styles.viewAllLink}>
            {t('viewAllProjects')}
            <svg xmlns='http://www.w3.org/2000/svg' className={styles.viewAllArrow} viewBox='0 0 24 24' width='20' height='20' fill='currentColor' aria-hidden='true'>
              <path d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 11H4v2h8.17l-1.58 1.59z' />
            </svg>
          </Link>
        )
      }
    </section>
  )
}

ProjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  featuredOnly: PropTypes.bool
}
