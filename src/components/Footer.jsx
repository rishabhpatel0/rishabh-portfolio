import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-slate-200/50 dark:border-white/[0.06] bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <div className="font-heading text-base font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            RP.DEV
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Built by Rishabh Patel. All rights reserved.
        </p>
        <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
          Powered by React, Vite &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
