import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const sections = [
  { title: 'Home', url: 'home' },
  { title: 'About', url: 'about' },
  { title: 'Contact', url: 'contact' },
  { title: 'Blog', url: 'blog' }
]

export default function Home () {
  return (
        <Layout>
            {
                sections.map((section, index) => (
                  <section id={section.url} key={index} className={styles.section}>
                    <h2>{section.title}</h2>
                  </section>
                ))
            }
        </Layout>
  )
}
