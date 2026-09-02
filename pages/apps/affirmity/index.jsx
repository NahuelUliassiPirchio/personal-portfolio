import { useEffect, useRef } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import MetaDecorator from '../../../components/MetaDecorator'
import AffirmityFonts from '../../../components/AffirmityFonts'
import AffirmityHeader from '../../../components/AffirmityHeader'
import AffirmityFooter from '../../../components/AffirmityFooter'
import AffirmityPlayIcon from '../../../components/AffirmityPlayIcon'

import styles from '../../../styles/AffirmityLanding.module.css'
import chrome from '../../../styles/AffirmityChrome.module.css'

// Small authored line icons for the three secondary pillars — one consistent
// stroke weight, matched to the AffirmitySigil mark. Not a generic icon set.
const PILLAR_ICONS = {
  meditation: (
    <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <path d='M4 16c1.8 2 4.6 3 8 3s6.2-1 8-3' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' />
      <path d='M4 12c1.8 2 4.6 3 8 3s6.2-1 8-3' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' opacity='0.6' />
      <path d='M4 8c1.8 2 4.6 3 8 3s6.2-1 8-3' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' opacity='0.3' />
    </svg>
  ),
  journaling: (
    <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <path d='M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z' stroke='currentColor' strokeWidth='1.3' strokeLinejoin='round' />
      <path d='M8.5 10h7M8.5 13.5h7M8.5 17h4.5' stroke='currentColor' strokeWidth='1.1' strokeLinecap='round' />
    </svg>
  ),
  streak: (
    <svg width='28' height='28' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <circle cx='12' cy='12' r='8.5' stroke='currentColor' strokeWidth='1.3' />
      <path d='M12 3.5v3M20.5 12h-3M12 20.5v-3M3.5 12h3' stroke='currentColor' strokeWidth='1.3' strokeLinecap='round' />
    </svg>
  )
}

export default function AffirmityLandingPage () {
  const { t } = useTranslation('affirmity')
  const flagshipRef = useRef(null)
  const pillarsRef = useRef(null)

  const pillars = t('pillars.items', {}, { returnObjects: true })
  const year = new Date().getFullYear()
  const playStoreUrl = process.env.AFFIRMITY_PLAY_STORE_URL || '#'

  useEffect(() => {
    const targets = [flagshipRef.current, pillarsRef.current].filter(Boolean)
    if (!targets.length) return undefined

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <MetaDecorator
        title={t('meta.title')}
        description={t('meta.description')}
        image='affirmity/hero.png'
      />
      <AffirmityFonts />
      <div className={chrome.root}>
        <AffirmityHeader wordmark={t('nav.wordmark')} cta={t('nav.cta')} ctaHref={playStoreUrl} />

        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroHeadline}>{t('hero.headline')}</h1>
              <p className={styles.heroBody}>{t('hero.body')}</p>
              <div className={styles.heroActions}>
                <a href={playStoreUrl} className={styles.heroCta}>
                  <AffirmityPlayIcon size={16} />
                  {t('hero.cta')}
                </a>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <div className={styles.heroMediaFrame}>
                <Image
                  src='/images/affirmity/hero.png'
                  alt={t('hero.imageAlt')}
                  width={900}
                  height={900}
                  priority
                />
              </div>
            </div>
          </section>

          <section ref={flagshipRef} className={`${styles.flagship} ${styles.reveal}`}>
            <span className={styles.flagshipLabel}>{t('flagship.label')}</span>
            <h2 className={styles.flagshipHeadline}>{t('flagship.headline')}</h2>
            <p className={styles.flagshipBody}>{t('flagship.body')}</p>
          </section>

          <section ref={pillarsRef} className={`${styles.pillars} ${styles.reveal}`}>
            <h2 className={styles.pillarsHeadline}>{t('pillars.headline')}</h2>
            <ul className={styles.pillarList}>
              {pillars.map(pillar => (
                <li key={pillar.id} className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>{PILLAR_ICONS[pillar.id]}</div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarBody}>{pillar.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <AffirmityFooter
          termsLabel={t('footer.terms')}
          copyright={t('footer.copyright', { year })}
          playStoreLabel={t('nav.cta')}
          playStoreHref={playStoreUrl}
        />
      </div>
    </>
  )
}
