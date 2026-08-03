import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'

import styles from '../styles/SkillsSection.module.css'

export default function SkillsSection ({ id, key }) {
  const { t } = useTranslation('skills')
  const tiers = t('tiers', {}, { returnObjects: true })
  const toolsTitle = t('toolsTitle')

  return (
        <section id={id} key={key} className={styles.skillsContainer}>
            <div className={styles.halfBackground}></div>
            <main className={styles.main}>
              <h2>Skills</h2>
              <ul className={styles.skillFields}>
                <li className={`${styles.skillFieldCard} ${styles.coreCard}`}>
                  <h3 className={styles.fieldTitle}>{tiers.core.title}</h3>
                  <p className={styles.fieldDescription}>{tiers.core.description}</p>
                  <h4 className={styles.toolsTitle}>{toolsTitle}</h4>
                  <ul className={`${styles.toolsList} ${styles.coreToolsList}`}>
                    {
                      tiers.core.tools.map((tool, index) => (
                        <li key={index} className={styles.coreTool}>{tool}</li>
                      ))
                    }
                  </ul>
                </li>
                <li className={`${styles.skillFieldCard} ${styles.additionalCard}`}>
                  <h3 className={styles.fieldTitle}>{tiers.additional.title}</h3>
                  <p className={styles.fieldDescription}>{tiers.additional.description}</p>
                  <h4 className={styles.toolsTitle}>{toolsTitle}</h4>
                  <ul className={`${styles.toolsList} ${styles.additionalToolsList}`}>
                    {
                      tiers.additional.tools.map((tool, index) => (
                        <li key={index} className={styles.additionalTool}>{tool}</li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            </main>
        </section>
  )
}

SkillsSection.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string
}
