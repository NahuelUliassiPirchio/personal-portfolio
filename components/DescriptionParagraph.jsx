import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/DescriptionParagraph.module.css'

export default function DescriptionParagraph ({ limit, children, translator }) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const text = children.trim()

  if (text.length <= limit) {
    return <article className={styles.mainParagraph}>{text}</article>
  }

  if (expanded) {
    return (
        <article className={styles.mainParagraph}>
          {text}
          <button className={styles.toggleExpanded} onClick={toggleExpanded}>{translator('showLess')}</button>
        </article>
    )
  }

  return (
      <article className={styles.mainParagraph}>
        {text.slice(0, limit)}
        <span>...</span>
        <button className={styles.toggleExpanded} onClick={toggleExpanded}>{translator('showMore')}</button>
      </article>
  )
}

DescriptionParagraph.propTypes = {
  limit: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  translator: PropTypes.func.isRequired
}
