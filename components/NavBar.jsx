import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import DynamicIndex from './DynamicIndex'
import LanguageManager from './LanguageManager'
import ThemeToggler from './ThemeToggler'
import Menu from './Menu'

import styles from '../styles/NavBar.module.css'

export default function NavBar ({ providedSections }) {
  const { t } = useTranslation('home')

  const { locale } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const resumeLink = locale.startsWith('es') ? process.env.CV_URL_ES : process.env.CV_URL_EN

  const sections = providedSections || [
    { title: t('about'), url: 'about' },
    { title: t('experience'), url: 'experience' },
    { title: t('skills'), url: 'skills' },
    { title: t('projects'), url: 'projects' },
    { title: t('contact'), url: 'contact' }
  ]

  return (
        <header className={`${styles.navBar} ${isScrolled ? styles.scrolled : ''}`}>
          <Link href='/' className={styles.logoContainer} title='Inicio'>
            <svg
              width="37.929859mm"
              height="23.491457mm"
              viewBox="0 0 37.929859 23.491457"
              xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-86.232254,-101.90146)">
                <path
                  d="m 97.314125,101.90175 c -1.325925,0.008 -2.954433,0.1673 -3.888329,0.40718 -1.042769,0.2678 -3.398423,1.40061 -4.295299,2.06561 -1.435394,1.06429 -2.734253,3.05244 -2.871377,4.39538 -0.07361,0.72092 0.01323,6.25909 0.148996,9.50172 0.04566,1.09065 0.07462,2.43583 0.06431,2.98907 -0.01033,0.55324 0.0289,1.52738 0.08728,2.16512 l 5.17e-4,2e-5 c 0.05838,0.63776 0.157619,1.1783 0.220369,1.20099 0.06275,0.0227 0.328289,0.0133 0.59024,-0.0209 0.26195,-0.0343 1.047903,-0.0113 1.746473,0.0512 1.750785,0.15646 3.79445,0.13318 3.858541,-0.044 0.02923,-0.0808 0.0284,-0.60366 -0.0021,-1.16202 -0.64376,-11.79658 -0.65992,-12.35284 -0.375177,-13.13792 0.342565,-0.94448 1.023201,-1.57959 1.927687,-1.79882 2.231271,-0.54081 4.477096,-0.19514 5.736484,0.88272 0.92359,0.79046 1.2491,1.56912 1.48023,3.54005 0.31409,2.67839 0.62179,3.77643 1.62872,5.81144 0.77239,1.56096 1.08036,2.02693 1.93078,2.92099 1.22077,1.28345 2.17205,1.90772 4.17091,2.73767 1.66928,0.69308 3.00286,0.96444 4.8462,0.98493 1.44691,0.0164 2.50825,-0.23765 3.82725,-0.91457 0.63641,-0.32664 1.38855,-0.71134 1.67099,-0.855 0.28246,-0.14367 0.78575,-0.53851 1.11842,-0.87711 0.35428,-0.36056 0.62041,-0.54145 0.64238,-0.43644 0.0463,0.22113 1.38132,-1.53691 1.97552,-2.60152 0.24013,-0.43027 0.49242,-1.03806 0.56088,-1.35059 0.13162,-0.60105 -0.0206,-4.61217 -0.35745,-9.42571 -0.11154,-1.59183 -0.24077,-3.62407 -0.28778,-4.51629 -0.0469,-0.89222 -0.0867,-1.63598 -0.0883,-1.65292 -0.005,-0.0529 -5.74688,0.0223 -5.86482,0.0769 -0.0314,0.0145 -0.0214,0.64764 0.0226,1.40644 0.0433,0.75884 0.1337,2.34324 0.19984,3.52087 0.0661,1.17761 0.20332,3.52946 0.30459,5.22634 0.16238,2.73063 0.15186,3.17207 -0.0904,3.84211 -0.74147,2.0489 -3.12072,2.89908 -5.60109,2.00144 -2.55505,-0.92466 -3.08231,-2.10073 -3.47239,-7.7453 -0.0598,-0.8722 -0.17788,-1.85324 -0.26115,-2.17985 -0.30789,-1.20779 -2.18182,-3.28882 -4.23522,-4.70382 -1.85225,-1.27639 -3.89778,-2.06273 -5.881085,-2.26037 -0.337772,-0.0337 -0.745874,-0.0477 -1.187851,-0.045 z"
                  className = {styles.logo}
                  />
              </g>
            </svg>
          </Link>
          <DynamicIndex sections={sections} />
          <Link className={styles.resumeLink} href={resumeLink} passHref target={'_blank'}>
            {t('resumeText')}
          </Link>
          <div className={styles.styleContainer}>
            <LanguageManager />
            <ThemeToggler />
          </div>
          <Menu sections={sections} />
        </header>
  )
}

NavBar.propTypes = {
  providedSections: PropTypes.array
}
