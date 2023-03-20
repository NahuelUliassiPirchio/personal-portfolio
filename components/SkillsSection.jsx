import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import cssLogo from '../public/icons/css.svg'
import gitLogo from '../public/icons/git.svg'
import htmlLogo from '../public/icons/html.svg'
import linuxLogo from '../public/icons/linux.svg'
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
import jestLogo from '../public/icons/jest.svg'
import vscodeLogo from '../public/icons/vscode.svg'
import eslintLogo from '../public/icons/eslint.svg'

import styles from '../styles/SkillsSection.module.css'

export default function SkillsSection ({ id, key }) {
  const { t } = useTranslation('skills')
  const [activeSkill, setActiveSkill] = useState(0)

  const getDescription = (name) => {
    return t(name, { count: 1 }, { returnObjects: true })?.map((item, index) => <li key={index}>{item.quote}</li>)
  }

  return (
        <section id={id} key={key} className={styles.skillsContainer}>
            <h1>{t('title')}</h1>
            <main className={styles.main}>
              <ul className={styles.skillsSelector}>
                <li className={`${styles.skillButton} ${activeSkill === 0 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(0)}>
                    <h2>Backend</h2>
                </li>
                <li className={`${styles.skillButton} ${activeSkill === 1 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(1)}>
                    <h2>Frontend</h2>
                </li>
                <li className={`${styles.skillButton} ${activeSkill === 2 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(2)}>
                    <h2>Database</h2>
                </li>
                <li className={`${styles.skillButton} ${activeSkill === 3 ? styles.activeSkill : styles.inactiveSkill}`} onClick={() => setActiveSkill(3)}>
                    <h2>Tools</h2>
                </li>
              </ul>
              <div className={styles.skillDivs}>
                  {
                      activeSkill === 0 && (
                          <ul className={styles.skillCards}>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={jsLogo} alt="Javascript logo" width={50} height={50}/>
                                        <Image className={styles.skillIcon} src={typescriptLogo} alt="Typescript logo" width={50} height={50}/>
                                        <h2>JS/TS</h2>
                                    </div>
                                    <ul>{getDescription('javascript-typescriptDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={swaggerLogo} alt="Swagger logo" width={50} height={50}/>
                                        <h2>Swagger</h2>
                                    </div>
                                    <ul>{getDescription('swaggerDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={nodejsLogo} alt="Nodejs logo" width={50} height={50}/>
                                        <h2>Express</h2>
                                    </div>
                                    <ul>{getDescription('node-expressDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={`${styles.skillIcon} ${styles.securityLogo}`} src={lockLogo} alt="Security logo" width={50} height={50}/>
                                        <h2>{t('security')}</h2>
                                    </div>
                                    <ul>{getDescription('securityDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={nestjsLogo} alt="Nestjs logo" width={50} height={50}/>
                                        <h2>Nestjs</h2>
                                    </div>
                                    <ul>{getDescription('nestjsDescription')}</ul>
                                </li>
                          </ul>
                      )
                  }
                  {
                      activeSkill === 1 && (
                        <li className={styles.skillCards}>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={htmlLogo} alt="Html logo" width={50} height={50}/>
                                        <h2>HTML</h2>
                                    </div>
                                    <ul>{getDescription('htmlDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={cssLogo} alt="Css logo" width={50} height={50}/>
                                        <h2>CSS</h2>
                                    </div>
                                    <ul>{getDescription('cssDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={reactLogo} alt="React logo" width={50} height={50}/>
                                        <h2>React</h2>
                                    </div>
                                    <ul>{getDescription('reactDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={`${styles.skillIcon} ${styles.nextjsLogo}`} src={nextjsLogo} alt="Nextjs logo" width={50} height={50}/>
                                        <h2>Nextjs</h2>
                                    </div>
                                    <ul>{getDescription('nextjsDescription')}</ul>
                                </li>
                          </li>
                      )
                  }
                  {
                      activeSkill === 2 && (
                        <li className={styles.skillCards}>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={typeormLogo} alt="Typeorm logo" width={50} height={50}/>
                                        <h2>Typeorm</h2>
                                    </div>
                                    <ul>{getDescription('typeormDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={mongoLogo} alt="Mongo logo" width={50} height={50}/>
                                        <h2>Mongo/Mongooose</h2>
                                    </div>
                                    <ul>{getDescription('mongoDescription')}</ul>
                                </li>
                          </li>
                      )
                  }
                  {
                      activeSkill === 3 && (
                        <li className={styles.skillCards}>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={linuxLogo} alt="Linux logo" width={50} height={50}/>
                                        <h2>Linux/Unix</h2>
                                    </div>
                                    <ul>{getDescription('linuxDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={gitLogo} alt="Git logo" width={50} height={50}/>
                                        <h2>Git</h2>
                                    </div>
                                    <ul>{getDescription('gitDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={vscodeLogo} alt="Visual studio code logo" width={50} height={50}/>
                                        <h2>Vscode</h2>
                                    </div>
                                    <ul>{getDescription('vscodeDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={jestLogo} alt="Jest logo" width={50} height={50}/>
                                        <h2>Jest</h2>
                                    </div>
                                    <ul>{getDescription('jestDescription')}</ul>
                                </li>
                                <li className={styles.skillCard}>
                                    <div className={styles.skillTitle}>
                                        <Image className={styles.skillIcon} src={eslintLogo} alt="eslint logo" width={50} height={50}/>
                                        <h2>eslint</h2>
                                    </div>
                                    <ul>{getDescription('eslintDescription')}</ul>
                                </li>
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
