import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/LinksDropDown.module.css'

export default function LinksDropDown ({ className, children, links, image }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
        <nav className={`${styles.container} ${className}`}>
            <div className={`${isOpen && '.openedDropDown'}`} onClick={e => {
              e.preventDefault()
              setIsOpen(!isOpen)
            }}>{children}</div>
            {isOpen && (
                <ul className={styles.buttonDropDown}>
                    {
                        links.map(link => (
                            <li key={link.url}>
                              {image && <Image src={image} alt={link.name} width={50} height={50}/>}
                              <Link href={link.url} passHref target={'_blank'}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            )}
        </nav>
  )
}

LinksDropDown.propTypes = {
  children: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  className: PropTypes.string,
  image: PropTypes.string
}
