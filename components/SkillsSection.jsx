import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import cssLogo from '../public/icons/css.svg'
import gitLogo from '../public/icons/git.svg'
import htmlLogo from '../public/icons/html.svg'
import linuxLogo from '../public/icons/linux-tux.svg'
import jsLogo from '../public/icons/javascript.svg'
import mongoLogo from '../public/icons/mongodb.svg'
import nestjsLogo from '../public/icons/nestjs.svg'
import nextjsLogo from '../public/icons/nextjs.svg'
import nodejsLogo from '../public/icons/nodejs.svg'
import reactLogo from '../public/icons/react.svg'
import typescriptLogo from '../public/icons/typescript.svg'
import lockLogo from '../public/icons/lock.svg'
import swaggerLogo from '../public/icons/swagger-ui.png'
import typeormLogo from '../public/icons/typeorm.png'
import postgresqlLogo from '../public/icons/postgresql.svg'
import jestLogo from '../public/icons/jest.svg'
import vscodeLogo from '../public/icons/vscode.svg'
import styles from '../styles/SkillsSection.module.css'

export default function SkillsSection ({ id = 'skills', key = 'skills' }) {
  const { t } = useTranslation('skills')
  const [activeSkill, setActiveSkill] = useState(0)

  return (
        <section id={id} key={key} className={styles.container}>
            <h1>{t('title')}</h1>
            <main className={styles.main}>
              <li className={styles.skillButtons}>
                <ul className={`${styles.skillButton} ${activeSkill === 0 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(0)}>
                    <h2>{t('Backend')}</h2>
                </ul>
                <ul className={`${styles.skillButton} ${activeSkill === 1 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(1)}>
                    <h2>{t('Frontend')}</h2>
                </ul>
                <ul className={`${styles.skillButton} ${activeSkill === 2 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(2)}>
                    <h2>{t('Database')}</h2>
                </ul>
                <ul className={`${styles.skillButton} ${activeSkill === 3 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(3)}>
                    <h2>{t('Tools')}</h2>
                </ul>
              </li>
              <div className={styles.skillDivs}>
                  {
                      activeSkill === 0 && (
                          <li className={styles.skillCards}>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={jsLogo} alt="Javascript logo" width={50} height={50}/>
                                    <Image className={styles.skillIcon} src={typescriptLogo} alt="Typescript logo" width={50} height={50}/>
                                    <h2>{t('javascript-typescript')}</h2>
                                    <p>{t('javascript-typescriptDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={swaggerLogo} alt="Swagger logo" width={50} height={50}/>
                                    <h2>{t('swagger')}</h2>
                                    <p>{t('swaggerDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={nodejsLogo} alt="Nodejs logo" width={50} height={50}/>
                                    <h2>{t('node-express')}</h2>
                                    <p>{t('node-expressDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={`${styles.skillIcon} ${styles.securityLogo}`} src={lockLogo} alt="Security logo" width={50} height={50}/>
                                    <h2>{t('security')}</h2>
                                    <p>{t('securityDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={nestjsLogo} alt="Nestjs logo" width={50} height={50}/>
                                    <h2>{t('nestjs')}</h2>
                                    <p>{t('nestjsDescription')}</p>
                                </ul>
                          </li>
                      )
                  }
                  {
                      activeSkill === 1 && (
                        <li className={styles.skillCards}>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={htmlLogo} alt="Html logo" width={50} height={50}/>
                                    <h2>{t('html')}</h2>
                                    <p>{t('htmlDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={cssLogo} alt="Css logo" width={50} height={50}/>
                                    <h2>{t('css')}</h2>
                                    <p>{t('cssDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={reactLogo} alt="React logo" width={50} height={50}/>
                                    <h2>{t('react')}</h2>
                                    <p>{t('reactDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={`${styles.skillIcon} ${styles.nextjsLogo}`} src={nextjsLogo} alt="Nextjs logo" width={50} height={50}/>
                                    <h2>{t('nextjs')}</h2>
                                    <p>{t('nextjsDescription')}</p>
                                </ul>
                          </li>
                      )
                  }
                  {
                      activeSkill === 2 && (
                        <li className={styles.skillCards}>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={typeormLogo} alt="Typeorm logo" width={50} height={50}/>
                                    <h2>{t('typeorm')}</h2>
                                    <p>{t('typeormDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={postgresqlLogo} alt="Sql (postgres) logo" width={50} height={50}/>
                                    <h2>{t('sql')}</h2>
                                    <p>{t('sqlDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={mongoLogo} alt="Mongo logo" width={50} height={50}/>
                                    <h2>{t('mongo')}</h2>
                                    <p>{t('mongoDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={htmlLogo} alt="darkThemeToggle" width={50} height={50}/>
                                    <h2>{t('skill3')}</h2>
                                    <p>{t('skill3Description')}</p>
                                </ul>
                          </li>
                      )
                  }
                  {
                      activeSkill === 3 && (
                        <li className={styles.skillCards}>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={linuxLogo} alt="Linux logo" width={50} height={50}/>
                                    <h2>{t('linux')}</h2>
                                    <p>{t('linuxDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={gitLogo} alt="Git logo" width={50} height={50}/>
                                    <h2>{t('git')}</h2>
                                    <p>{t('gitDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={vscodeLogo} alt="Visual studio code logo" width={50} height={50}/>
                                    <h2>{t('vscode')}</h2>
                                    <p>{t('vscodeDescription')}</p>
                                </ul>
                                <ul className={styles.skillCard}>
                                    <Image className={styles.skillIcon} src={jestLogo} alt="Jest logo" width={50} height={50}/>
                                    <h2>{t('jest')}</h2>
                                    <p>{t('jestDescription')}</p>
                                </ul>
                          </li>
                      )
                  }
              </div>
            </main>
        </section>
  )
}

SkillsSection.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string
}
