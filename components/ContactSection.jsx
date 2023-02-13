import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from '../styles/ContactSection.module.css'

export default function ContactSection () {
  const { t } = useTranslation('contact')

  return (
        <div className={styles.contactContainer}> {/* TODO: Change this to section */}
            <h1 className={styles.title}>{t('title')}</h1>
            <p>{t('subtitle')}</p>
            <ul className={styles.linksList}>
                <li>
                    <Link href="mailto:uliassipirchio@gmail.com" className={styles.linkItem}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Mail Logo" width={20} height={20} />
                        <p>Gmail</p>
                        <h3>uliassipirchio@gmail.com</h3>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/NahuelUliassiPirchio" className={styles.linkItem}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github Logo" width={20} height={20} />
                        <p>Github</p>
                        <h3>uliassipirchio</h3>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/nahuel-uliassi-pirchio-5b1b3b1b3/" className={styles.linkItem}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="Linkedin Logo" width={20} height={20} />
                        <p>Linkedin</p>
                        <h3>uliassipirchionahuel</h3>
                    </Link>
                </li>
            </ul>
        </div>
  )
}
