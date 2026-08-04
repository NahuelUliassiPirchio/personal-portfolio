import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'
import MetaDecorator from '../../components/MetaDecorator'
import MediaPlaceholder from '../../components/MediaPlaceholder'
import CaseStudyNav from '../../components/CaseStudyNav'

import styles from '../../styles/XnapperCaseStudy.module.css'

export default function XnapperCaseStudyPage () {
  const { t } = useTranslation('xnapper')
  const { locale } = useRouter()

  const resumeLink = locale.startsWith('es') ? process.env.CV_URL_ES : process.env.CV_URL_EN

  const navSections = t('nav', {}, { returnObjects: true })
  const built = t('built', {}, { returnObjects: true })
  const decisions = t('decisions', {}, { returnObjects: true })
  const contextParagraphs = t('context.paragraphs', {}, { returnObjects: true })
  const outcomeItems = t('outcome.items', {}, { returnObjects: true })
  const stackItems = t('stack.items', {}, { returnObjects: true })

  const sectionLabel = id => navSections.find(section => section.id === id)?.label

  return (
    <>
      <MetaDecorator
        title={t('meta.title')}
        description={t('meta.description')}
        image='UPLogo.svg'
      />
      <Layout>
        <header id='header' className={styles.header}>
          <div className={styles.headerBody}>
            <h1 className={styles.product}>{t('header.product')}</h1>
            <ul className={styles.metadata}>
              <li>{t('header.role')}</li>
              <li>{t('header.dates')}</li>
              <li>{t('header.scale')}</li>
            </ul>
            <p className={styles.summary}>{t('header.summary')}</p>
          </div>
          <div className={styles.headerMedia}>
            <MediaPlaceholder ratio='16/9' src='/images/xnapper-logo.png' alt='Xnapper' />
          </div>
        </header>

        <CaseStudyNav sections={navSections} headerId='header' />

        <section id='context' className={styles.context}>
          {contextParagraphs.map((paragraph, index) => (
            <p key={index} className={styles.contextParagraph}>{paragraph}</p>
          ))}
        </section>

        <section id='challenge' className={styles.challenge}>
          <p className={styles.challengeStatement}>{t('challenge.statement')}</p>
        </section>

        <section id='stack' className={styles.stack}>
          <h2>{sectionLabel('stack')}</h2>
          <ul className={styles.stackList}>
            {stackItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section id='built' className={styles.built}>
          <h2>{sectionLabel('built')}</h2>
          <div className={styles.builtGrid}>
            {built.map(subsection => (
              <article key={subsection.id} className={styles.builtCard}>
                <h3>{subsection.title}</h3>
                <ul>
                  {subsection.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id='decisions' className={styles.decisions}>
          <h2>{sectionLabel('decisions')}</h2>
          <div className={styles.decisionsGrid}>
            {decisions.map((decision, index) => (
              <article key={index} className={styles.decisionCard}>
                <h3>{decision.title}</h3>
                <p className={styles.decisionProblem}>{decision.problem}</p>
                <p className={styles.decisionApproach}>{decision.approach}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='outcome' className={styles.outcome}>
          <h2>{sectionLabel('outcome')}</h2>
          <ul className={styles.outcomeList}>
            {outcomeItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.cta}>
          <Link href={resumeLink} target='_blank' className={styles.ctaLink}>
            {t('cta.resume')}
          </Link>
          <Link href='mailto:uliassipirchion@gmail.com' className={styles.ctaLink}>
            {t('cta.contact')}
          </Link>
          <Link href='/' className={styles.ctaSecondary}>
            {t('cta.backHome')}
          </Link>
        </section>
      </Layout>
    </>
  )
}
