import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home () {
  const { t } = useTranslation('home')

  const sections = [
    { title: t('home'), url: 'home' },
    { title: t('about'), url: 'about' },
    { title: t('contact'), url: 'contact' },
    { title: t('blog'), url: 'blog' }
  ]

  return (
        <Layout>
            {
                sections.map((section, index) => (
                  <section id={section.url} key={index} className={`${styles.section} ${styles[section.url]}`}>
                    <h2>{section.title}</h2>
                  </section>
                ))
            }
        </Layout>
  )
}
