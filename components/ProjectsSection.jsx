import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import ProjectCard from './ProjectCard'

import styles from '../styles/ProjectsSection.module.css'

export default function ProjectsSection ({ id, key }) {
  const { t } = useTranslation('projects')
  const projects = t('projects', { count: 1 }, { returnObjects: true })

  return (
    <section id={id} key={key} className={styles.projectsSection}>
      <h2>{t('title')}</h2>
      <ul className={styles.projects}>
        {
          projects.map(project =>
            <ProjectCard key={project.url} project={project} t={t} />
          )
        }
      </ul>
    </section>
  )
}

ProjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
