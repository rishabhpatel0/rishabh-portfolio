import React, { useState } from 'react'

const CONTACT_INFO = {
  email: 'rishabhpatel00042@gmail.com',
  github: 'https://github.com/rishabhpatel0',
  linkedin: 'https://www.linkedin.com/in/rishabh-patel-a430491b4/',
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setLoading(false)
      return
    }

    // Mock API submission latency
    setTimeout(() => {
      setStatus('success')
      setLoading(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl section-title-underline">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Ready to collaborate or hire? Send a message directly to my inbox!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Links */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am open to full-time developer positions and contract roles. Contact me with queries, 
              project proposals, or just to say hello.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email channel */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Email</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{CONTACT_INFO.email}</span>
                </div>
              </a>

              {/* GitHub channel */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                  🐙
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">GitHub</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">github.com/rishabhpatel0</span>
                </div>
              </a>

              {/* LinkedIn channel */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center gap-4 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                  💼
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">LinkedIn</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Rishabh Patel</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-2xl p-8 lg:p-10 text-left">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm outline-none text-slate-900 dark:text-white transition-all duration-200"
                      placeholder="John Doe"
                      disabled={loading}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm outline-none text-slate-900 dark:text-white transition-all duration-200"
                      placeholder="john@example.com"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm outline-none text-slate-900 dark:text-white transition-all duration-200 min-h-[140px] resize-y"
                    placeholder="Describe your project, offer, or question..."
                    disabled={loading}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold rounded-xl text-center shadow-lg shadow-indigo-600/15 dark:shadow-none transition-all duration-200 text-sm"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {/* Simulated statuses */}
                {status === 'success' && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-450 border border-rose-500/20">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Please enter all fields.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
export { CONTACT_INFO }
