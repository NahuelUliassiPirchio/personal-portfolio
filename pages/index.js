import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

import styles from '../styles/Home.module.css'

export default function Home () {
  const { t } = useTranslation('home')

  const sections = [
    { title: t('home'), url: 'home' },
    { title: t('about'), url: 'about' },
    { title: t('blog'), url: 'blog' },
    { title: t('projects'), url: 'projects', component: <ProjectsSection /> },
    { title: t('contact'), url: 'contact', component: <ContactSection /> }
  ]

  return (
        <Layout>
            {
                sections.map((section, index) => (
                  <section id={section.url} key={index} className={`${styles.section} ${styles[section.url]}`}>
                  {
                    section.component ? section.component : <h2>{section.title}</h2>
                  }
                  </section>
                ))
            }
        </Layout>
  )
}
