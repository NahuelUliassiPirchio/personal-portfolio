import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from '../styles/LogoLink.module.css'

export default function LogoLink ({ text, logo, href }) {
  return (
    <Link href={href} target='_blank' className={styles.linkContainer}>
        <Image src={logo} alt={text} width={40} height={40}/>
        <p>{text}</p>
    </Link>
  )
}

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired
}
