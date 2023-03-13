import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Project.module.css'

export default function Project ({ project }) {
  return (
        <main className={styles.projectContainer}>
          <div className={styles.floatContainer}>
            {
              project.github &&
                project.github.map((link, index) => (
                  <Link className={styles.floatingButton} href={'https://github.com/NahuelUliassiPirchio/' + link.url} passHref key={index} target={'_blank'}>
                    <Image src='/icons/github.svg' alt='Github' width={40} height={40} />
                    <span>{link.name}</span>
                  </Link>
                ))
            }
            {
              project.link &&
                (
                  <Link className={styles.floatingButton} href={project.link} passHref target={'_blank'}>
                    <Image src={`/images/${project.image}`} alt='Project link' width={40} height={40} />
                    <span>{project.name + ' link project'}</span>
                  </Link>
                )
            }
          </div>

          <section className={styles.introductionSection} id='introduction'>
            <Image className={styles.projectImage} src={`/images/${project.image}`} alt={project.name} width={300} height={300} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </section>

          <section id='technologies'>
            <h3 className={styles.subtitle}>Technologies used</h3>
            <ul>
              {project.technologies.map((technology, index) => (
                <li key={technology.name}>
                  {technology.name}
                  {technology.icon && <Image src={`/icons/${technology.icon}`} alt={technology.name} width={20} height={20} />}
                </li>
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
