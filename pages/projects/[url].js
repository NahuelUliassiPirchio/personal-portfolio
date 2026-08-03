import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import Project from '../../components/Project'
import NavBar from '../../components/NavBar'
import MetaDecorator from '../../components/MetaDecorator'
import { getProjectSectionIds } from '../../utils/projectSections'

export default function ProjectPage () {
  const router = useRouter()
  const { url } = router.query

  const { t } = useTranslation('projects')
  const projects = t('projects', { count: 1 }, { returnObjects: true })

  const project = projects.find((project) => project.url === url)

  // Derived from the same predicates Project.jsx uses to decide what actually
  // renders (design decision 12) — a nav entry with no matching DOM id makes
  // DynamicIndex's handleIndexClick dereference null.
  const projectSections = getProjectSectionIds(project).map((id) => ({
    title: t(`sections.${id}`),
    type: 'anchor',
    url: id
  }))

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
