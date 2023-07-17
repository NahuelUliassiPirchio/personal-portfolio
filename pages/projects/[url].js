import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import Project from '../../components/Project'
import NavBar from '../../components/NavBar'
import MetaDecorator from '../../components/MetaDecorator'

export default function ProjectPage () {
  const router = useRouter()
  const { url } = router.query

  const { t } = useTranslation('projects')
  const projects = t('projects', { count: 1 }, { returnObjects: true })

  const project = projects.find((project) => project.url === url)

  const projectSections = [
    { title: t('sections.introduction'), url: 'introduction' },
    { title: t('sections.technologies'), url: 'technologies' },
    { title: t('sections.process'), url: 'process' },
    { title: t('sections.conclusion'), url: 'conclusion' }
  ]

  const pageTitle = project ? `${project.name} App - ${t('title')}` : '[404]'

  return (<>
    {project && <MetaDecorator title={pageTitle} description={project.description} image={project.image}/>}
    {(project && <NavBar providedSections={projectSections}/>)}
    {
      project
        ? <Project project={project} />
        : (
        <div>
          <h1>404</h1>
          <p>Project not found</p>
        </div>
          )
    }
  </>)
}
