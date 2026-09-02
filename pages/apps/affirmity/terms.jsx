import useTranslation from 'next-translate/useTranslation'

import MetaDecorator from '../../../components/MetaDecorator'
import AffirmityFonts from '../../../components/AffirmityFonts'
import AffirmityHeader from '../../../components/AffirmityHeader'
import AffirmityFooter from '../../../components/AffirmityFooter'

import styles from '../../../styles/AffirmityTerms.module.css'
import chrome from '../../../styles/AffirmityChrome.module.css'

export default function AffirmityTermsPage () {
  const { t } = useTranslation('affirmity-terms')
  const { t: tLanding } = useTranslation('affirmity')

  const sections = t('sections', {}, { returnObjects: true })
  const year = new Date().getFullYear()
  const playStoreUrl = process.env.AFFIRMITY_PLAY_STORE_URL || '#'
  const appStoreUrl = process.env.AFFIRMITY_APP_STORE_URL || '#'

  return (
    <>
      <MetaDecorator
        title={t('meta.title')}
        description={t('meta.description')}
        image='affirmity/hero.png'
      />
      <AffirmityFonts />
      <div className={chrome.root}>
        <AffirmityHeader
          wordmark={tLanding('nav.wordmark')}
          playStoreCta={tLanding('nav.playStoreCta')}
          playStoreHref={playStoreUrl}
          appStoreCta={tLanding('nav.appStoreCta')}
          appStoreHref={appStoreUrl}
        />

        <main className={styles.main}>
          <div className={styles.docHeader}>
            <span className={styles.eyebrow}>{t('header.eyebrow')}</span>
            <h1 className={styles.title}>{t('header.title')}</h1>
            <p className={styles.updated}>{t('header.updated')}</p>
            <p className={styles.intro}>{t('intro')}</p>
          </div>

          <nav className={styles.tocNav} aria-label={t('toc.label')}>
            <p className={styles.tocLabel}>{t('toc.label')}</p>
            <ul className={styles.tocList}>
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.body}>
            {sections.map(section => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>{paragraph}</p>
                ))}
                {section.note && (
                  <p className={styles.note}>{section.note}</p>
                )}
              </section>
            ))}
          </div>
        </main>

        <AffirmityFooter
          termsLabel={t('header.title')}
          copyright={tLanding('footer.copyright', { year })}
          playStoreLabel={tLanding('footer.playStoreLabel')}
          playStoreHref={playStoreUrl}
          appStoreLabel={tLanding('footer.appStoreLabel')}
          appStoreHref={appStoreUrl}
        />
      </div>
    </>
  )
}
