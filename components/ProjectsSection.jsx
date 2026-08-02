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
    : allProjects

  return (
    <section id={id} key={key} className={styles.projectsSection}>
      <h2>{t('title')}</h2>
      <ul className={styles.projects}>
        {
          projects.map(project =>
            <ProjectCard key={project.url} project={project} t={t} variant='home' />
          )
        }
      </ul>
      {
        featuredOnly && (
          <Link href='/projects' className={styles.viewAllLink}>
            {t('viewAllProjects')}
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
