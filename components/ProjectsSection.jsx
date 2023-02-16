import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/ProjectsSection.module.css'

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    image: 'https://picsum.photos/200/300',
    url: 'project-1'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    image: 'https://picsum.photos/200/400',
    url: 'project-2'
  }
]

export default function ProjectsSection ({ id, key }) {
  return (
    <section id={id} key={key} className={styles.projectsSection}>
      <div className={styles.projectsTitle}>

        <div className={styles.orbit}>
          <div className={styles.center}>
            <p>My Projects</p>
          </div>
          <ul>
            <li>
              <div><img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDI1OTU4NzA0MWM1YWI3OWYyNGNiMWUzNDFmMGEzNz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.hLdG6hXQE4Dfil6090lrDEuGdsHbfQUijpy5RvzXjSg" alt=""/></div>
              <p>NestJS</p>
            </li>
            <li>
              <div><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt=""/></div>
              <p>NextJS</p>
            </li>
            <li>
              <div><img src="https://www.clipartmax.com/png/full/291-2918933_html-and-css-logo.png" alt=""/></div>
              <p>HTML/CSS</p>
            </li>
            <li>
              <div><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt=""/></div>
              <p>React</p>
            </li>
            <li>
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt=""/></div>
              <p>Typescript</p>
            </li>
            <li>
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt=""/></div>
              <p>Javascript</p>
            </li>
            <li>
              <div><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_src_logo_icon_170834.png" alt=""/></div>
              <p>PostgreSQL</p>
            </li>
            <li>
              <div><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld" alt=""/></div>
              <p>MongoDB</p>
            </li>
          </ul>
        </div>

      </div>
      <div className={styles.projects}>
        {
          projects.map(project => (
              <div className={styles.projectContainer} key={project.url} >
                  <Image src={project.image} alt={project.title} width={200} height={300} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link href={`/projects/${project.url}`}>View Project</Link>
              </div>
          ))
        }
      </div>
    </section>
  )
}

ProjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
