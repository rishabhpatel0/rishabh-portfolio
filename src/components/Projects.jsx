import React from 'react'

const FEATURED_PROJECTS = [
  {
    id: 'herotrader',
    title: 'HeroTrader',
    description: 'A comprehensive trading journal and analytics platform that helps traders track trades, analyze performance, monitor profit/loss, visualize equity curves, and improve trading discipline through detailed statistics and journaling.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Chart.js'],
    liveUrl: 'https://hero-trader.vercel.app/',
    features: [
      'Interactive equity curve visualization and analytics',
      'Comprehensive trade logging and history management',
      'Advanced performance metrics (win rate, profit factor, net PnL)',
      'Trading discipline review and statistics tracking'
    ],
    screenshotType: 'trading'
  },
  {
    id: 'medify',
    title: 'Medify',
    description: 'Healthcare appointment booking platform that simplifies discovering clinics and scheduling medical visits, providing users with live information on healthcare facilities.',
    tags: ['React', 'CSS Modules', 'REST API', 'JavaScript'],
    liveUrl: 'https://medify-wine-ten.vercel.app/',
    features: [
      'Multi-level location filtering by State and City',
      'Dynamic medical center and clinic listings',
      'Interactive slot booking and scheduling calendar',
      'Persisted booking histories and dashboard'
    ],
    screenshotType: 'healthcare'
  }
]

const OTHER_PROJECTS = [
  {
    id: 'qkart',
    title: 'QKart',
    description: 'E-commerce frontend application built with React featuring reusable modular components, mobile responsive designs, seamless API checkout flows, and Material UI integration.',
    tags: ['React', 'Material UI', 'REST API', 'JavaScript'],
    features: [
      'Reusable modular components architecture',
      'Cart item adding, updating, and checkout actions',
      'Authentication and secure login session storage',
      'Dynamic product listing fetching via REST API'
    ],
    status: 'Portfolio Project',
    screenshotType: 'ecommerce'
  },
  {
    id: 'diabetes',
    title: 'Diabetes Prediction System',
    description: 'A machine learning application that predicts diabetes risk indicators using data analysis, feature engineering, and predictive ML classification models.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Flask'],
    features: [
      'High accuracy predictive classification engine',
      'Analytical feature extraction and scaling rules',
      'Interactive health parameters input panel',
      'Data-driven risk assessment reports'
    ],
    status: 'Portfolio Project',
    screenshotType: 'ml'
  },
  {
    id: 'botai',
    title: 'Bot AI',
    description: 'AI-powered chat interface supporting multiple concurrent user conversations, prompt suggestions, and local chat history persistence.',
    tags: ['React', 'OpenAI API', 'Tailwind CSS', 'LocalStorage'],
    features: [
      'Thread persistence with sidebar session switching',
      'Context-aware mock model prompt processing',
      'Interactive quick-start message suggestions',
      'Optimized responsive chat viewport layout'
    ],
    status: 'Portfolio Project',
    screenshotType: 'ai'
  }
]

function Projects() {
  const renderVisualMockup = (type) => {
    switch (type) {
      case 'trading':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-indigo-950 flex flex-col justify-between p-5 relative overflow-hidden">
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">Live Feed</span>
              <span className="text-xs font-extrabold text-indigo-400">HeroTrader</span>
            </div>
            
            <div className="h-24 w-full relative border-b border-white/10 mt-2 z-10">
              <svg className="w-full h-full" viewBox="0 0 100 50">
                <path d="M0,45 Q15,40 30,20 T60,30 T90,5 L100,5 L100,50 L0,50 Z" fill="rgba(99, 102, 241, 0.1)" />
                <path d="M0,45 Q15,40 30,20 T60,30 T90,5" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="90" cy="5" r="3" fill="#ef4444" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2 z-10">
              <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-left">
                <span className="text-[9px] text-slate-400 block">Win Rate</span>
                <span className="text-xs font-bold text-emerald-400">68.4%</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-left">
                <span className="text-[9px] text-slate-400 block">Profit Factor</span>
                <span className="text-xs font-bold text-indigo-400">2.14</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-left">
                <span className="text-[9px] text-slate-400 block">Net PnL</span>
                <span className="text-xs font-bold text-slate-200">+$4,210</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
        )
      case 'healthcare':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c1f2d] to-[#123047] flex flex-col justify-between p-5 relative overflow-hidden text-slate-200">
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full font-semibold font-mono">Medify Care</span>
              <span className="text-[10px] text-slate-400">Find Center</span>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl z-10 flex flex-col gap-2 my-2 text-left">
              <div className="h-5 bg-white/10 rounded-lg flex items-center px-2 text-[9px] text-slate-400">Search State / City...</div>
              <div className="flex gap-2">
                <div className="h-6 w-1/2 bg-sky-500/25 rounded-md flex items-center justify-center text-[9px] font-bold text-sky-300">New York</div>
                <div className="h-6 w-1/2 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-[9px]">Los Angeles</div>
              </div>
            </div>

            <div className="flex items-center gap-2 z-10 bg-white/5 border border-white/10 p-2 rounded-lg text-left">
              <div className="w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center text-xs">🏥</div>
              <div>
                <span className="text-[9px] font-bold block leading-none">Apex Medical Center</span>
                <span className="text-[7px] text-slate-400">Available: 8 Doctors</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl" />
          </div>
        )
      case 'ecommerce':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-amber-950/70 flex flex-col justify-between p-5 relative overflow-hidden text-slate-200">
            <div className="flex justify-between items-center z-10">
              <span className="text-xs font-extrabold text-amber-500">QKart</span>
              <span className="text-[9px] text-slate-400">Showcase Card</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-2 z-10">
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden text-left flex flex-col gap-1.5 pb-2">
                <div className="h-14 bg-amber-500/10 flex items-center justify-center text-xl">👟</div>
                <span className="text-[9px] font-bold px-2 block leading-none">Vibe Running Shoes</span>
                <span className="text-[9px] text-amber-400 px-2 font-bold">$49.00</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden text-left flex flex-col gap-1.5 pb-2">
                <div className="h-14 bg-amber-500/10 flex items-center justify-center text-xl">🎒</div>
                <span className="text-[9px] font-bold px-2 block leading-none">Urban Backpack</span>
                <span className="text-[9px] text-amber-400 px-2 font-bold">$29.00</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
          </div>
        )
      case 'ml':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c2e21] to-[#0d1c16] flex flex-col justify-between p-5 relative overflow-hidden text-slate-200">
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">Prediction System</span>
              <span className="text-[9px] text-slate-400">ML Engine</span>
            </div>

            <div className="bg-white/5 border border-white/10 p-3 rounded-xl z-10 text-left my-2">
              <div className="flex justify-between text-[8px] text-slate-400 mb-1.5">
                <span>Features Engineering</span>
                <span>Accuracy: 92.4%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-emerald-500 h-full w-[92%]" />
              </div>
              
              <div className="flex justify-between items-center text-[9px] border-t border-white/5 pt-1.5">
                <span className="text-slate-400">Predicted Risk:</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">Low Risk</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl" />
          </div>
        )
      case 'ai':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-950/70 flex flex-col justify-between p-5 relative overflow-hidden text-slate-200">
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full font-semibold">Bot AI</span>
              <span className="text-[9px] text-slate-400">GPT Engine</span>
            </div>

            <div className="flex flex-col gap-2 my-2 z-10">
              <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-left self-start max-w-[80%] text-[8px] leading-tight">
                Explain API hooks...
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 p-2 rounded-lg text-left self-end max-w-[80%] text-[8px] leading-tight text-purple-300">
                They allow functional React components to query REST...
              </div>
            </div>
            <div className="absolute top-10 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl section-title-underline">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Operational applications complete with live public deployments.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="flex flex-col gap-8 mb-20">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
            >
              {/* Screenshot column */}
              <div className="lg:col-span-6 w-full rounded-xl border border-slate-200/40 dark:border-white/[0.04] overflow-hidden aspect-video shadow-md flex">
                {renderVisualMockup(project.screenshotType)}
              </div>

              {/* Contents column */}
              <div className="lg:col-span-6 text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-2.5 items-center mb-3">
                    <span className="text-[10px] font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-2 py-0.5 rounded-md">
                      {idx === 0 ? 'PRIMARY FEATURED' : 'FEATURED'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-405 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="mb-5">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 mb-2">Key Features:</h4>
                    <ul className="flex flex-col gap-1.5">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="text-indigo-500 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-indigo-500/10 dark:bg-indigo-500/8 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons (Live Demo ONLY, NO GITHUB) */}
                <div className="border-t border-slate-100 dark:border-white/[0.04] pt-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-3 text-xs font-bold text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 rounded-xl text-center shadow shadow-indigo-600/10 dark:shadow-none transition-colors duration-200 items-center justify-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="pt-10 border-t border-slate-200/50 dark:border-white/[0.06]">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Other Projects Showcase
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Concept software systems and engineering challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Screenshot mockup */}
                  <div className="rounded-xl border border-slate-200/40 dark:border-white/[0.04] overflow-hidden aspect-video shadow-sm mb-5">
                    {renderVisualMockup(project.screenshotType)}
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="text-[9px] font-bold text-slate-400 border border-slate-200 dark:border-white/[0.08] px-2 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project features */}
                  <div className="mb-4">
                    <ul className="flex flex-col gap-1.5">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-semibold bg-indigo-500/10 dark:bg-indigo-500/8 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
export { FEATURED_PROJECTS, OTHER_PROJECTS }
