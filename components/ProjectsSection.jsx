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
              <div><Image src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDI1OTU4NzA0MWM1YWI3OWYyNGNiMWUzNDFmMGEzNz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.hLdG6hXQE4Dfil6090lrDEuGdsHbfQUijpy5RvzXjSg" alt="NestJS logo" width={100} height={1000}/></div>
              <p>NestJS</p>
            </li>
            <li>
              <div><Image src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" width={100} height={1000}/></div>
              <p>NextJS</p>
            </li>
            <li>
              <div><Image src="https://www.clipartmax.com/png/full/291-2918933_html-and-css-logo.png" alt="HTML and CSS logos" width={100} height={1000}/></div>
              <p>HTML/CSS</p>
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
              <div><Image src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld" alt="MongoDB logo" width={100} height={1000}/></div>
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
