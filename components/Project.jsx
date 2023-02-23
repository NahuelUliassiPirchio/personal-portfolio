import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from '../styles/Project.module.css'

export default function Project ({ project }) {
  return (
        <main className={styles.projectContainer}>
          <section id='introduction'>
            <Image src={project.image} alt={project.name} width={300} height={300} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </section>

          <section id='technologies'>
            <h3 className={styles.subtitle}>Technologies used</h3>
            <ul>
              {project.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </section>

          <section id='process'>
            <h3 className={styles.subtitle}>Process and challenges</h3>
            <p>{project.process}</p>
          </section>

          <section id='conclusion'>
            <h3 className={styles.subtitle}>Conclusion and next steps</h3>
            <p>{project.conclusion}</p>
          </section>
        </main>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}
