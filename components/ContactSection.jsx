import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import PropTypes from 'prop-types'

import emailIcon from '../public/icons/contact/email.svg'
import githubIcon from '../public/icons/contact/github.svg'
import linkedinIcon from '../public/icons/contact/linkedin.svg'
import styles from '../styles/ContactSection.module.css'

export default function ContactSection ({ id, key }) {
  const { t } = useTranslation('contact')

  return (
        <section key={key} id={id} className={styles.contactContainer}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            <ul className={styles.linksList}>
                <li>
                    <Link href="mailto:uliassipirchio@gmail.com" className={styles.linkItem}>
                        <Image src={emailIcon} alt="Mail Logo" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/NahuelUliassiPirchio" target={'_blank'} className={styles.linkItem}>
                        <Image src={githubIcon} alt="Github Logo" width={20} height={20} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/uliassipirchio/" target={'_blank'} className={styles.linkItem}>
                        <Image src={linkedinIcon} alt="LinkedIn Logo" width={20} height={20} />
                    </Link>
                </li>
            </ul>
        </section>
  )
}

ContactSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
