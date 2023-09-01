import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import getConfig from 'next/config'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import ThemeContext from '../context/ThemeContext'
import LinkButton from './LinkButton'

import ImageSlider from './ImageSlider'
import { getLinkByName } from '../utils/projectFilters'
import styles from '../styles/Project.module.css'

export default function Project ({ project }) {
  const { t } = useTranslation('projects')
  const { theme } = useContext(ThemeContext)
  const [showFloatingContainer, setShowFloatingContainer] = useState(true)

  return (
        <main className={styles.projectContainer}>
          <nav className={styles.floatingContainer}>
            <button className={`${styles.floatingButton} ${!showFloatingContainer && styles.collapsed}`}
              onClick={() => setShowFloatingContainer(!showFloatingContainer)}>
                <Image src={`/icons/${theme === 'dark' ? 'dark-expand-arrow.svg' : 'expand-arrow.svg'}`}
                  alt={`${showFloatingContainer ? 'Hide' : 'Show'} floating menu`} width={30} height={30} />
            </button>
            {
              showFloatingContainer && project.links.map((link, index) => {
                const { publicRuntimeConfig } = getConfig()
                return (<LinkButton href={publicRuntimeConfig[link.url] || link.url} key={index} logo={link.icon} alt={link.name} >{link.name}</LinkButton>)
              }
              )
            }
          </nav>

          <section className={styles.introductionSection} id='introduction'>
            <Image className={styles.projectImage} src={`/images/${project.logo}`} alt={project.name} width={300} height={300} />
            <div className={styles.projectTitle}>
              <h2>{project.name}</h2>
              {
                getLinkByName(project.links, 'Demo')[0] &&
                  <Link className={styles.demoButton} href={getLinkByName(project.links, 'Demo')[0].url} passHref target={'_blank'}>
                    {t('visitDemo')}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                  </Link>
              }
            </div>
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
