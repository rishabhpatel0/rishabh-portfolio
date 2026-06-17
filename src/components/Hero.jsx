import React from 'react'

function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 bg-radial-glow">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fadeIn">
          <span className="text-xs lg:text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 inline-block">
            Full Stack Developer
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Rishabh Patel
            </span>
          </h1>
          <p className="text-base lg:text-lg text-slate-600 dark:text-slate-350 max-w-xl mb-8 leading-relaxed">
            I design and build premium web applications, reliable APIs, and automated databases. 
            Focused on crafting scalable software and integrating practical logic to solve business challenges.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-600/20 dark:shadow-none hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-none transition-all duration-300 flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a
              href="https://github.com/rishabhpatel0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-indigo-500/40 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 text-sm w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-patel-a430491b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-indigo-500/40 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 text-sm w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Code Column */}
        <div className="lg:col-span-5 hidden lg:flex justify-center animate-float relative z-10">
          <div className="w-[360px] bg-slate-900/90 dark:bg-[#141a2a]/90 border border-slate-700/50 dark:border-white/[0.06] rounded-2xl shadow-2xl p-6 font-mono text-xs text-slate-300">
            <div className="flex gap-1.5 mb-5">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <div>
              <p className="text-slate-500 mb-2">// Developer Profile Card</p>
              <p className="mb-2">
                <span className="text-indigo-400">const</span> developer = &#123;
              </p>
              <p className="pl-5 mb-1">
                name: <span className="text-emerald-400">"Rishabh Patel"</span>,
              </p>
              <p className="pl-5 mb-1">
                degree: <span className="text-emerald-400">"B.Tech CSE"</span>,
              </p>
              <p className="pl-5 mb-1">
                university: <span className="text-emerald-400">"Galgotias University"</span>,
              </p>
              <p className="pl-5 mb-1">
                specialization: <span className="text-emerald-400">"Full Stack"</span>,
              </p>
              <p className="pl-5 mb-1">
                skills: [
              </p>
              <p className="pl-10 mb-1 text-slate-400">
                <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>,
              </p>
              <p className="pl-10 mb-1 text-slate-400">
                <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Tailwind"</span>
              </p>
              <p className="pl-5 mb-1">
                ],
              </p>
              <p className="pl-5 mb-1">
                passion: <span className="text-purple-400">"Practical Software Solutions"</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
