import PropType from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import LogoLink from './LogoLink'
import LinksDropDown from './LinksDropDown'
import { getLinkByName } from '../utils/projectFilters'
import githubLogo from '../public/icons/github.svg'

import rightArrowIcon from '../public/icons/right-arrow.svg'
import styles from '../styles/ProjectsCard.module.css'

export default function ProjectCard ({ project, t }) {
  const projectLinks = project.links
  const projectDemoLink = getLinkByName(projectLinks, 'Demo')[0]
  const projectRepoLinks = getLinkByName(projectLinks, 'Repo')

  return (
              <li className={`${styles.projectContainer} ${project.image ?? styles.noGif}`} key={project.url} >
                  <figure className={styles.imageContainer}>
                  <article>
                    {project.shortDescription}
                  </article>
                  {
                    project.image
                      ? (
                        <video className={styles.projectImage} autoPlay muted loop>
                          <source src={`/images/videos/${project.image}`}/>
                        </video>
                        )
                      : (
                        <Image className={styles.projectImage} src={`/images/${project.logo}`} alt={project.name} width={200} height={200} priority/>
                        )
                  }

                  </figure>

                  <h2>{project.name}</h2>
                  <ul className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <li key={technology.name} title={technology.name}>
                        {technology.icon && <Image src={`/icons/${technology.icon}`} alt={technology.name} width={30} height={30} />}
                      </li>
                    ))}
                  </ul>

                    <div className={styles.projectButtons}>
                      {
                        projectRepoLinks.length > 1
                          ? (
                            <LinksDropDown links={projectRepoLinks}>
                              <LogoLink text='Repos' logo={githubLogo} href={projectRepoLinks[0].url}/>
                            </LinksDropDown>
                            )
                          : (
                            <LogoLink text='Repo' logo={githubLogo} href={projectRepoLinks[0].url}/>
                            )
                      }
                      {projectDemoLink && <Link className={styles.demoButton} href={projectDemoLink.url} passHref target={'_blank'}>Live Demo</Link>}
                      <Link className={styles.readMoreLink} href={`/projects/${project.url}`}>{
                        t('viewProject')}
                        <Image className={styles.arrow} src={rightArrowIcon} alt='Right arrow' width={30} height={30} />
                        </Link>
                    </div>
              </li>
  )
}

ProjectCard.propTypes = {
  project: PropType.object.isRequired,
  t: PropType.func.isRequired
}
