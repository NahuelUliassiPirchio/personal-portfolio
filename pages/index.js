import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import AboutSection from '../components/AboutSection'

export default function Home () {
  const { t } = useTranslation('home')

  const sections = [
    { title: t('about'), url: 'about', component: AboutSection },
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
        </Layout>
  )
}
