import React from 'react'
import styles from '../styles/BubblesBackground.module.css'

export default function BubblesBackground () {
  return (
    <div className={styles.bubbles}>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 24 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 23 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 20 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 21 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 15 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 13 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 26 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 12 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 17 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 13 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 13 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 11 }}></span>
        <span className={styles.hideOnMobile} style={{ '--i': 28 }}></span>
    </div>
  )
}
