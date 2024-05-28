import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import LinkButton from '../components/LinkButton'
import MetaDecorator from '../components/MetaDecorator'

import styles from '../styles/Home.module.css'
import ExperienceSection from '../components/ExperienceSection'

export default function Home () {
  const { t } = useTranslation('home')
  const { locale } = useRouter()

  const sections = [
    { title: t('about'), url: 'about', component: AboutSection },
    { title: t('about'), url: 'experience', component: ExperienceSection },
    { title: t('skills'), url: 'skills', component: SkillsSection },
    { title: t('projects'), url: 'projects', component: ProjectsSection },
    { title: t('contact'), url: 'contact', component: ContactSection }
  ]

  const resumeLink = locale.startsWith('es') ? process.env.CV_URL_ES : process.env.CV_URL_EN

  return (
    <>
      <MetaDecorator
        description="Portfolio website for full-stack developer, Nahuel Uliassi Pirchio."
        title='Uliassi Pirchio Nahuel - Portfolio'
        image={'UPLogo.svg'}
        />
      <Layout>
        {
            sections.map((section, index) => (
              section.component({ key: index, id: section.url })
            ))
        }
        <nav className={styles.floatContainer}>
          <LinkButton href={resumeLink} logo={'/icons/resume.svg'} alt={t('downloadResume')} >
            {t('downloadResume')}
          </LinkButton>
        </nav>
      </Layout>
    </>
  )
}
