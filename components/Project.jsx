import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import LinkButton from './LinkButton'

import styles from '../styles/Project.module.css'

export default function Project ({ project }) {
  console.log(project.process)
  return (
        <main className={styles.projectContainer}>
          <div className={styles.floatContainer}>
            {
              project.github &&
                project.github.map(({ name, url }, index) => (
                  <LinkButton key={index} href={'https://github.com/NahuelUliassiPirchio/' + url} logo={'/icons/github.svg'} text={
                    name.split(' ').pop()
                  } />
                ))
            }
            {
              project.link &&
                (
                  <LinkButton href={project.link} logo={`/images/${project.image}`} text={'Demo'} />
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
              {project.technologies.map((technology) => (
                <li key={technology.name}>
                  {technology.name}
                  {technology.icon && <Image src={`/icons/${technology.icon}`} alt={technology.name} width={20} height={20} />}
                </li>
              ))}
            </ul>
          </section>

          <section id='process'>
            <h3 className={styles.subtitle}>Process and challenges</h3>
            {
              project.process.length !== 1
                ? getProcessQuotes(project.process)
                : (
                <ul className={styles.processContainer}>
                  <il>
                    <h4>Backend</h4>
                    {getProcessQuotes(project.process[0].backend)}
                  </il>
                  <il>
                    <h4>Frontend</h4>
                    {getProcessQuotes(project.process[0].frontend)}
                  </il>
                </ul>
                  )
            }
          </section>

          <section id='conclusion'>
            <h3 className={styles.subtitle}>Conclusion and next steps</h3>
            <p>{project.conclusion}</p>
          </section>
        </main>
  )
}

function getProcessQuotes (processArray) {
  if (!processArray) return (<p>There is no process to show</p>)
  return (
    <ol className={styles.processContainer}>{
      processArray.map((process, index) => (
        <li key={index}>
          <p>{process.quote}</p>
        </li>
      ))
    }</ol>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}
