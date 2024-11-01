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
          <span>
            {project.shortDescription}
          </span>
        </article>
        {
          project.image
            ? (
              <video className={styles.projectImage} autoPlay muted loop>
                <source src={`/images/videos/${project.image}`} type="video/mp4"/>
              </video>
              )
            : (
              <Image className={styles.projectImage} src={`/images/${project.logo}`} alt={project.name} width={200} height={200} priority/>
              )
        }
      </figure>
      <div className={styles.projectBodyContainer}>
        <div className={styles.projectDescription} >
          <h2>{project.name}</h2>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology.name} title={technology.name}>
                {technology.icon && <Image src={`/icons/${technology.icon}`} alt={technology.name} width={30} height={30} />}
              </li>
            ))}
          </ul>
        </div>

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
          {/* {projectDemoLink && <Link className={styles.demoButton} href={projectDemoLink.url} passHref target={'_blank'}>Live Demo</Link>} */}
          {projectDemoLink && <Link className={styles.demoButton} href={projectDemoLink.url} passHref target={'_blank'}>
                    {t('visitDemo')}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                  </Link>}
          <Link className={styles.readMoreLink} href={`/projects/${project.url}`}>{
            t('viewProject')}
            <Image className={styles.arrow} src={rightArrowIcon} alt='Right arrow' width={30} height={30} />
            </Link>
        </div>
      </div>
    </li>
  )
}

ProjectCard.propTypes = {
  project: PropType.object.isRequired,
  t: PropType.func.isRequired
}
