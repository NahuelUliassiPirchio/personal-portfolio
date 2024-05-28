import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/ExperienceSection.module.css'
import PropTypes from 'prop-types'

export default function ExperienceSection ({ id, key }) {
  const { t } = useTranslation('experience')
  const experiences = t('experiences', { count: 1 }, { returnObjects: true })

  return (
    <section id={id} key={key} className={styles.experienceSection}>
      <h2>{t('title')}</h2>
      <ul className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <li key={index} className={styles.experienceItem}>
            <h3 className={styles.position}>{experience.position}</h3>
            <p className={styles.company}>{experience.company}</p>
            <time className={styles.duration}>{experience.duration}</time>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: experience.description.replace(/\n/g, '<br />') }} />          </li>
        ))}
      </ul>
    </section>
  )
}

ExperienceSection.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}
