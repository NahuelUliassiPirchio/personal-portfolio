import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import LinkButton from '../components/LinkButton'

import styles from '../styles/Home.module.css'

export default function Home () {
  const { t } = useTranslation('home')

  const sections = [
    { title: t('about'), url: 'about', component: AboutSection },
    { title: t('skills'), url: 'skills', component: SkillsSection },
    { title: t('projects'), url: 'projects', component: ProjectsSection },
    { title: t('contact'), url: 'contact', component: ContactSection }
  ]

  return (
        <Layout>
          {
              sections.map((section, index) => (
                section.component({ key: index, id: section.url })
              ))
          }
          <div className={styles.floatContainer}>
            <LinkButton href={'/resume.pdf'} logo={'/icons/resume.svg'} text={t('downloadResume')} />
          </div>
        </Layout>
  )
}
