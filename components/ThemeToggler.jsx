import React from 'react'
import styles from '../styles/ThemeToggler.module.css'
import ThemeContext from '../context/ThemeContext'
import Image from 'next/image'

import darkThemeToggle from '../public/icons/sun-svgrepo-com.svg'
import lightThemeToggle from '../public/icons/moon-svgrepo-com.svg'

const ThemeToggler = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
        <>
            <Image className={styles.toggler} onClick={toggleTheme} alt={`Toggle to ${theme} theme`} src={isDark ? darkThemeToggle : lightThemeToggle } width={30} height={30} />
            <style jsx global>{`
                :root{
                    --background-color: ${isDark ? '#000' : '#fff'};
                    --text-color: ${isDark ? '#fff' : '#000'};
                    --link-color: ${isDark ? '#fff' : '#000'};
                }
            `}</style>
        </>
  )
}

export default ThemeToggler
