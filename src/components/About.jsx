import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl section-title-underline">
            About Me
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            CS Graduate &amp; Web Developer who turns ideas into operational software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left bio texts */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I am a Computer Science graduate with a strong passion for web development and a focus on building practical software solutions. 
              I enjoy designing complex full-stack web applications, creating fast, clean user experiences, and exploring how artificial intelligence can make products more efficient.
            </p>
            <p className="text-slate-600 dark:text-slate-450 leading-relaxed">
              During my engineering fellowship and college studies, I focused on database schemas, REST APIs, responsive state-driven frontends, and machine learning models. 
              My main goal is always to write clean, maintainable, and optimized code that solves real problems.
            </p>

            {/* Academic timeline */}
            <div className="mt-6 flex flex-col gap-6 border-l-2 border-slate-200 dark:border-white/[0.08] pl-6 ml-2">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-[#0b0f19]" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2021 - 2025</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">B.Tech in Computer Science and Engineering</h4>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Galgotias University</p>
                <p className="text-sm text-slate-500 dark:text-slate-450">
                  Completed core modules in Algorithms, Advanced Database Designs, Distributed Architectures, and Machine Learning Systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            <div className="glass-card rounded-2xl p-8 text-left">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4">Core Interests</h3>
              
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">React &amp; Next.js</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Declarative, fast UI creation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Node.js Backends</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">RESTful web architectures &amp; databases.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">AI Applications</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Integrating NLP, LLMs, and predictive analysis models.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">✓</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Practical Code solutions</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Clean refactoring and optimized database latency.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
