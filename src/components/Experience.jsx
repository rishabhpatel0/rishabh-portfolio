import React from 'react'

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0b0f19] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl section-title-underline">
            Experience &amp; Certifications
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            My professional development fellowships, certificates, and credentials.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Card item */}
          <div className="glass-card rounded-2xl p-8 text-left relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
            
            {/* Certification Badge / Visual */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-extrabold text-lg">
              🎓
            </div>

            {/* Description details */}
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Certified Full-Stack Developer
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Fellowship in Software Development
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  Crio.do
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Completed an intensive, project-based developer fellowship program. Built and deployed multiple complex full-stack web applications, refined system design concepts, implemented RESTful API integrations, and practiced clean Git workflow.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
                  REST APIs
                </span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
                  System Design
                </span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
                  Backend Databases
                </span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
                  Client Integration
                </span>
              </div>
            </div>

            {/* Glow backdrop decorator */}
            <div className="absolute right-0 top-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
export { Experience }
