import React, { useState, useEffect } from 'react'

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100 // offset for navigation height

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(sectionId)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // nav height offset
        behavior: 'smooth',
      })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'h-16 bg-white/80 dark:bg-[#0b0f19]/80 backdrop-blur-md border-slate-200/50 dark:border-white/[0.06] shadow-sm'
          : 'h-20 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl h-full mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="font-heading text-xl font-extrabold tracking-tight flex items-center gap-1.5"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            RP
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-slate-400 dark:text-slate-500">
            .DEV
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`text-sm font-medium relative py-1.5 transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-7 text-slate-800 dark:text-slate-100"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${
                isOpen ? 'rotate-[42deg] translate-y-[1px]' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-current rounded-full transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${
                isOpen ? '-rotate-[42deg] -translate-y-[1px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-[260px] h-screen bg-white dark:bg-[#0f1422] border-l border-slate-200 dark:border-white/[0.08] shadow-2xl p-8 flex flex-col gap-6 justify-center z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`text-lg font-semibold transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-slate-900/30 dark:bg-black/40 backdrop-blur-sm z-30"
        />
      )}
    </header>
  )
}

export default Navbar
