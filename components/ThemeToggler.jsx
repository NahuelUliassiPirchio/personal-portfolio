import React from 'react'
import Image from 'next/image'
import ThemeContext from '../context/ThemeContext'
import styles from '../styles/ThemeToggler.module.css'

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
                    --background-color: ${isDark ? '#00171f' : '#FFE6C7'};
                    --text-color: ${isDark ? '#fff' : '#454545'};
                    --shadow-color: ${isDark ? '#7e7f83' : '#7e7f83'};
                    --link-color: ${isDark ? '#003459' : '#cc4d00'};
                    --primary-color: ${isDark ? '#003459' : '#FFA559'};
                    --secondary-color: ${isDark ? '#007ea7' : '#cc4d00'};
                    --bubble-color: ${isDark ? '#4377ef' : '#e1e1d3'};
                    --bubble-bright: ${isDark ? '#7befd0' : '#ae8962'};
                    --thin-line-color: ${isDark ? '#12243d' : '#cac6af'};
                    --project-card-color: ${isDark ? '#12243d' : '#f4c59c'};
                    --navbar-height: 4rem;

                }
            `}</style>
        </>
  )
}

export default ThemeToggler
