import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    // Add/remove dark class on root document element for Tailwind dark selectors
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 dark:selection:bg-indigo-500/40">
      {/* Dynamic SaaS Gradient Glows */}
      <div className="glow-effect w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 top-10 left-5"></div>
      <div className="glow-effect w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-500/5 top-1/3 right-10"></div>
      <div className="glow-effect w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 bottom-10 left-1/4"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
