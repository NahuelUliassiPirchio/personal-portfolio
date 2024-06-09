import Image from 'next/image'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import BubblesBackground from './BubblesBackground'
import ProjectCard from './ProjectCard'

import styles from '../styles/ProjectsSection.module.css'

export default function ProjectsSection ({ id, key }) {
  const { t } = useTranslation('projects')
  const projects = t('projects', { count: 1 }, { returnObjects: true })

  return (
    <section id={id} key={key} className={styles.projectsSection}>
      <BubblesBackground/>
      <div className={styles.projectsTitle}>
        <div className={styles.orbit}>
          <div className={styles.center} onClick={
            () => {
              const projectsIntroduction = document.getElementById('projectsIntroduction')
              projectsIntroduction.scrollIntoView({ behavior: 'smooth' })
            }
          }>
            <p><b>{t('title')}</b></p>
          </div>
          <ul>
            <li>
              <div><Image src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python logo" width={100} height={1000}/></div>
              <p>Python</p>
            </li>
            <li>
              <div><Image src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" width={100} height={1000}/></div>
              <p>NextJS</p>
            </li>
            <li>
              <div><Image src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI logo" width={100} height={1000}/></div>
              <p>POWER BI</p>
            </li>
            <li>
              <div><Image src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React logo" width={100} height={1000}/></div>
              <p>React</p>
            </li>
            <li>
              <div><Image src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo" width={100} height={1000}/></div>
              <p>Typescript</p>
            </li>
            <li>
              <div><Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript  logo" width={100} height={1000}/></div>
              <p>Javascript</p>
            </li>
            <li>
              <div><Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL logo" width={100} height={1000}/></div>
              <p>PostgreSQL</p>
            </li>
            <li>
              <div><Image src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="MongoDB logo" width={100} height={1000}/></div>
              <p>MongoDB</p>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.projectsIntroduction} id='projectsIntroduction'>{t('introduction')}</p>
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
