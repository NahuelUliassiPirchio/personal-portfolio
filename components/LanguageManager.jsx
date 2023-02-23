import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/LanguageManager.module.css'

export default function LanguageManager () {
  const { locale, asPath } = useRouter()

  return (
        <div className={styles.managerContainer}>
            <Link href={asPath} locale="en" className={locale === 'en' ? styles.active : ''}>
              en
            </Link>
            <Link href={asPath} locale="es" className={locale === 'es' ? styles.active : ''}>
              es
            </Link>
        </div>
  )
}
