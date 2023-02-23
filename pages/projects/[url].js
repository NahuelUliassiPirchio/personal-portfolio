import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import Project from '../../components/Project'
import NavBar from '../../components/NavBar'

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

  return (<>
    <Head>
      <title>{project ? project.name : '[404]'}</title>
    </Head>
    <NavBar providedSections={projectSections}/>
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
