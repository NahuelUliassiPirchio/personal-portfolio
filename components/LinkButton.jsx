import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from '../styles/LinkButton.module.css'

export default function LinkButton ({ href, logo, text }) {
  const [show, setShow] = React.useState(false)
  return (
        <div className={`${styles.linkButton} ${show ? styles.mobile : null}`}>
            <Image src={logo} alt={text} width={32} height={32} onClick={() => setShow(!show)} />
            <Link className={styles.link} href={href} passHref target={'_blank'}>{text}</Link>
        </div>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
