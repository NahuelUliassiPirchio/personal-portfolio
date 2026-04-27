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
                    --background-color: ${isDark ? '#111110' : '#F5F4F2'};
                    --text-color: ${isDark ? '#EDEDEB' : '#1A1A1A'};
                    --shadow-color: ${isDark ? '#555452' : '#9A9896'};
                    --link-color: ${isDark ? '#60A5FA' : '#E07B39'};
                    --primary-color: ${isDark ? '#1E1D1B' : '#EDECEA'};
                    --secondary-color: ${isDark ? '#60A5FA' : '#E07B39'};
                    --bubble-color: ${isDark ? '#1a3a5c' : '#D4C9B8'};
                    --bubble-bright: ${isDark ? '#60A5FA' : '#E07B39'};
                    --thin-line-color: ${isDark ? '#2E2D2B' : '#D5D3CF'};
                    --project-card-color: ${isDark ? '#1E1D1B' : '#EDECEA'};
                    --navbar-height: 4rem;

                }
            `}</style>
        </>
  )
}

export default ThemeToggler
