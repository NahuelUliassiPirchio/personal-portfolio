import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import LinkButton from './LinkButton'

import styles from '../styles/Project.module.css'
import ImageSlider from './ImageSlider'
import getConfig from 'next/config'

export default function Project ({ project }) {
  const { t } = useTranslation('projects')

  return (
        <main className={styles.projectContainer}>
          <nav className={styles.floatingContainer}>
            {
              project.links.map((link, index) => {
                const { publicRuntimeConfig } = getConfig()
                return (<LinkButton href={publicRuntimeConfig[link.url] || link.url} key={index} logo={link.icon} text={link.name} />)
              }
              )
            }
          </nav>

          <section className={styles.introductionSection} id='introduction'>
            <Image className={styles.projectImage} src={`/images/${project.image}`} alt={project.name} width={300} height={300} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {
              project.gallery && <ImageSlider images={project.gallery} />
            }
          </section>

          <section id='technologies'>
            <h3 className={styles.subtitle}>{t('sectionTitles.technologies')}</h3>
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
            <h3 className={styles.subtitle}>{t('sectionTitles.process')}</h3>
            {
              project.process.length !== 1
                ? getProcessQuotes(project.process)
                : (
                <ul className={styles.processContainer}>
                  <li>
                    <h4>Backend</h4>
                    {getProcessQuotes(project.process[0].backend)}
                  </li>
                  <li>
                    <h4>Frontend</h4>
                    {getProcessQuotes(project.process[0].frontend)}
                  </li>
                </ul>
                  )
            }
          </section>

          <section id='conclusion'>
            <h3 className={styles.subtitle}>{t('sectionTitles.conclusion')}</h3>
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
