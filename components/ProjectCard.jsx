import PropType from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import LogoLink from './LogoLink'
import LinksDropDown from './LinksDropDown'
import { getLinkByName } from '../utils/projectFilters'
import styles from '../styles/ProjectsCard.module.css'

export default function ProjectCard ({ project, t, variant = 'catalog' }) {
  const projectLinks = project.links
  const projectDemoLink = getLinkByName(projectLinks, 'Demo')[0]
  const projectRepoLinks = getLinkByName(projectLinks, 'Repo')
  const youtubeVideoId = getYouTubeVideoId(project.image)
  const showStatusBadge = variant === 'catalog' && Boolean(project.status)
  // Catalog cards need a one-line problem/solution summary; projects missing that copy
  // (still blocked on user-supplied content) fall back to the existing shortDescription
  // instead of rendering "undefined" or an empty gap.
  const catalogSummary = project.problem && project.solution
    ? `${project.problem} ${project.solution}`
    : project.shortDescription

  return (
    <li className={`${styles.projectContainer} ${project.image ? '' : styles.noGif}`} key={project.url} >
      <figure className={styles.imageContainer}>
        <article>
          <span>
            {project.shortDescription}
          </span>
        </article>
        {
          project.image
            ? (
                youtubeVideoId
                  ? (
                    <iframe
                      className={`${styles.projectImage} ${styles.youtubeVideo}`}
                      src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&modestbranding=1&playsinline=1`}
                      title={`${project.name} video`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      style={{ pointerEvents: 'none' }}
                    />
                    )
                  : (
                    <video className={styles.projectImage} autoPlay muted loop>
                      <source src={`/images/videos/${project.image}`} type="video/mp4"/>
                    </video>
                    )
              )
            : (
              <Image className={styles.projectImage} src={`/images/${project.logo}`} alt={project.name} width={200} height={200} priority/>
              )
        }
      </figure>
      <div className={styles.projectBodyContainer}>
        <div className={styles.projectDescription} >
          <div className={styles.projectHeader}>
            <h2>{project.name}</h2>
            {showStatusBadge && <span className={styles.statusBadge}>{t(`status.${project.status}`)}</span>}
          </div>
          {variant === 'catalog' && <p className={styles.catalogSummary}>{catalogSummary}</p>}
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology.name} title={technology.name}>
                {technology.icon && <Image src={`/icons/${technology.icon}`} alt={technology.name} width={30} height={30} />}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.projectButtons}>
          <div className={styles.projectButtonsLeft}>
            {
              projectRepoLinks.length > 1
                ? (
                  <LinksDropDown links={projectRepoLinks}>
                    <LogoLink text='Repos' href={projectRepoLinks[0].url}/>
                  </LinksDropDown>
                  )
                : (
                  <LogoLink text='Repo' href={projectRepoLinks[0].url}/>
                  )
            }
            {projectDemoLink && <Link className={styles.demoButton} href={projectDemoLink.url} passHref target={'_blank'}>
                      {t('visitDemo')}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                    </Link>}
          </div>
          <Link className={styles.readMoreLink} href={`/projects/${project.url}`}>
            {t('viewProject')}
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 11H4v2h8.17l-1.58 1.59z"/>
            </svg>
          </Link>
        </div>
      </div>
    </li>
  )
}

ProjectCard.propTypes = {
  project: PropType.object.isRequired,
  t: PropType.func.isRequired,
  variant: PropType.oneOf(['home', 'catalog'])
}

function getYouTubeVideoId (url) {
  if (typeof url !== 'string') return null

  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace(/^www\./, '')

    if (hostname === 'youtu.be') {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] ?? null
    }

    if (hostname === 'youtube.com' || hostname === 'm.youtube.com' || hostname === 'youtube-nocookie.com') {
      if (parsedUrl.pathname === '/watch') return parsedUrl.searchParams.get('v')

      const [, videoId] = parsedUrl.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/) ?? []
      return videoId ?? null
    }
  } catch {
    return null
  }

  return null
}
