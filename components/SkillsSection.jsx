import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from '../styles/SkillsSection.module.css'

export default function SkillsSection ({ id, key }) {
  const { t } = useTranslation('skills')
  const fields = t('fields', { count: 1 }, { returnObjects: true })

  return (
        <section id={id} key={key} className={styles.skillsContainer}>
            <div className={styles.halfBackground}></div>
            <main className={styles.main}>
              <h2>Skills</h2>
              <ul className={styles.skillFields}>
                {
                  fields.map(field => {
                    return (
                    <li key={field.title} className={styles.skillFieldCard}>
                      <figure className={styles.iconContainer}>
                        <Image src={`/icons/skills/${field.icon}`} alt={`${field.title}'s icon`} width={70} height={70}/>
                      </figure>
                      <h3 className={styles.fieldTitle}>{field.title}</h3>
                      <p className={styles.fieldDescription}>{field.description}</p>
                      <h4 className={styles.toolsTitle}>{t('toolsTitle')}</h4>
                      <ul className={styles.toolsList}>
                        {
                          field.tools.map((tool, index) => {
                            return (
                              <li key={index}>{tool}</li>
                            )
                          })
                        }
                      </ul>
                    </li>
                    )
                  })
                }
              </ul>
            </main>
        </section>
  )
}

SkillsSection.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string
}
