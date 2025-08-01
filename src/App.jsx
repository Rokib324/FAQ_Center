import React, { useState, useEffect } from 'react'
import FAQList from './components/FAQList'
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode')
    return savedMode ? JSON.parse(savedMode) : false

  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))

  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)

  
  }
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300'>
      <div className='container mx-auto py-12'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text'>
            FAQ Center
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300'>
            Find answers to the most common questions about React and web development
          </p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={isDarkMode}/>
    </div>
  )
}

export default App