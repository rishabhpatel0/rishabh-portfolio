import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', icon: 'cpp' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Python', icon: 'python' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'SQL', icon: 'sql' },
        { name: 'Supabase', icon: 'supabase' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Postman', icon: 'postman' },
        { name: 'VS Code', icon: 'vscode' },
      ],
    },
  ]

  // Dynamic vector SVG icons
  const renderIcon = (icon) => {
    const defaultColorClass = "text-indigo-600 dark:text-indigo-400"
    switch (icon) {
      case 'cpp':
        return (
          <span className="font-extrabold text-[11px] font-mono tracking-tighter">C++</span>
        )
      case 'javascript':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-.873-.78-1.574-2.128-2.072-.888-.344-1.996-.543-2.735-.98-.387-.225-.66-.464-.66-.948 0-.472.392-.767 1.05-.767.632 0 1.02.265 1.258.74.15.3.18.665.48.665.344 0 .54-.238.54-.607 0-.75-.632-1.393-1.89-1.393-1.222 0-2.01.597-2.01 1.637 0 1.1.75 1.558 2.053 2.015.992.35 1.8.618 2.01 1.082.268.498.058 1.157-.748 1.157-.84 0-1.35-.494-1.542-1.112-.1-.3-.24-.45-.54-.45-.348 0-.496.225-.496.643 0 .975.825 1.65 2.508 1.65 1.696 0 2.65-.795 2.65-2.025zm-9.356.12c-.225-.6-.543-.87-1.127-.87-.69 0-1.095.42-1.095 1.185 0 .75.405 1.17 1.095 1.17.585 0 .87-.315 1.11-.84.135-.3.255-.42.54-.42.33 0 .495.225.495.69 0 1.05-.885 1.74-2.22 1.74-1.785 0-2.82-1.11-2.82-2.925 0-1.74 1.11-2.91 2.85-2.91.825 0 1.5.315 1.95.84.18.225.33.375.585.375.3 0 .48-.21.48-.555V14.12c0-.36-.18-.54-.54-.54h-.105c-.3 0-.42.225-.54.54l-.42.975c-.39-.63-.975-.975-1.92-.975-1.935 0-3.3 1.485-3.3 3.66 0 2.16 1.32 3.66 3.255 3.66 1.395 0 2.22-.84 2.22-2.1v-.21c0-.36-.18-.54-.54-.54z"/>
          </svg>
        )
      case 'typescript':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm11.758 13.912c-.362-.218-.788-.415-1.21-.577-.424-.162-.777-.323-1.054-.476-.276-.156-.474-.325-.591-.508-.117-.184-.176-.412-.176-.688 0-.282.073-.521.219-.714.146-.192.348-.344.606-.454c.258-.109.559-.163.905-.163.339 0 .641.053.906.163.264.11.486.268.665.474.179.206.291.455.337.746.046.291.077.585.337.585.285 0 .416-.21.416-.549v-.04c0-.776-.481-1.398-1.444-1.637-.417-.113-.888-.163-1.417-.163-1.127 0-1.996.539-1.996 1.558 0 1.038.704 1.488 1.933 1.918.938.331 1.705.582 1.905 1.02.253.469.055 1.091-.706 1.091-.793 0-1.275-.466-1.456-1.047-.095-.283-.227-.424-.51-.424-.328 0-.468.212-.468.606 0 .918.778 1.555 2.366 1.555 1.6 0 2.5-.749 2.5-1.908-.002-1.037-.708-1.469-1.939-1.895zm9.324-4.802h-.105c-.3 0-.42.225-.54.54l-.42.975c-.39-.63-.975-.975-1.92-.975-1.935 0-3.3 1.485-3.3 3.66 0 2.16 1.32 3.66 3.255 3.66 1.395 0 2.22-.84 2.22-2.1v-.21c0-.36-.18-.54-.54-.54h-.105c-.3 0-.42.225-.54.54l-.42.975c-.39-.63-.975-.975-1.92-.975-1.935 0-3.3 1.485-3.3 3.66 0 2.16 1.32 3.66 3.255 3.66 1.395 0 2.22-.84 2.22-2.1v-5.69h-2.18v2.1c0 .36.18.54.54.54z"/>
          </svg>
        )
      case 'python':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.35.32.4.21.42.1.45.02.43-.02.43-.08.4-.17.37-.22.3-.3.2-.34.12-.37.06-.37.02H9.75l-.33.04-.3.08-.26.13-.2.2-.14.24-.07.3-.03.32v3.75h3v.75h-3v.75h3v.75h-3v.75h3v.75h-3v.75h3v.75h-3v.75h3v.75h-6l-.42-.02-.4-.08-.37-.14-.3-.22-.22-.3-.12-.34-.06-.37-.02-.37V7.5l.02-.37.08-.37.14-.3.22-.22.3-.14.37-.08.37-.02h1.5v-3l.02-.37.08-.37.14-.3.22-.22.3-.14.37-.08.37-.02zm-8.25 15h.75v3.75l.03.32.07.3.14.24.2.2.26.13.3.08.33.04h6.75l.37.02.37-.06.34-.12.3-.2.22-.3.17-.37.08-.4.02-.43-.02-.43-.1-.45-.21-.42-.32-.4-.45-.35-.59-.3-.73-.26-.9-.2h-7.5l-.37-.02-.37.08-.3.14-.22.22-.14.3-.08.37-.02.37zm6.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
          </svg>
        )
      case 'html5':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562 11.125.002.217-2.437H5.836l.66 7.375h9.022l-.28 3.125-3.268.875-3.268-.875-.208-2.313H6.275l.413 4.625 5.289 1.437 5.289-1.437.587-6.312H8.531z"/>
          </svg>
        )
      case 'css3':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.25l.233 2.563 9.475-.002-.28 3.125-3.268.875-3.268-.875-.209-2.313H6.275l.413 4.625 5.289 1.437 5.289-1.437.665-7.375H6.59z"/>
          </svg>
        )
      case 'react':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12c0 1.125-.788 2.224-2.127 3.168-1.464 1.032-3.468 1.879-5.632 2.378a28.093 28.093 0 0 1 1.71 3.518c.28.749.387 1.442.234 1.954-.158.527-.551.89-1.077.989-.526.1-1.144-.099-1.794-.558a28.163 28.163 0 0 1-3.313-2.836 28.163 28.163 0 0 1-3.313 2.836c-.65.459-1.268.657-1.794.558-.526-.1-.919-.462-1.077-.989-.153-.512-.046-1.205.234-1.954a28.093 28.093 0 0 1 1.71-3.518c-2.164-.5-4.168-1.346-5.632-2.378C.788 14.224 0 13.125 0 12c0-1.125.788-2.224 2.127-3.168 1.464-1.032 3.468-1.879 5.632-2.378a28.093 28.093 0 0 1-1.71-3.518c-.28-.749-.387-1.442-.234-1.954.158-.527.551-.89 1.077-.989.526-.1 1.144.099 1.794.558a28.163 28.163 0 0 1 3.313 2.836 28.163 28.163 0 0 1 3.313-2.836c.65-.459 1.268-.657 1.794-.558.526.1.919.462 1.077.989.153.512.046 1.205-.234 1.954a28.093 28.093 0 0 1-1.71 3.518c2.164.5 4.168 1.346 5.632 2.378C23.212 9.776 24 10.875 24 12zm-3.666 0c0-.501-.399-1.085-1.145-1.637-1.164-.862-2.871-1.611-4.819-2.083a31.42 31.42 0 0 0 .972-2.736c.218-.696.347-1.346.309-1.802-.036-.425-.218-.73-.509-.785-.292-.055-.689.109-1.125.441a31.408 31.408 0 0 0-2.809 2.502c-1.084 1.096-2.124 2.308-3.044 3.578A44.07 44.07 0 0 0 5.143 8.28c-1.948.472-3.655 1.221-4.819 2.083-.746.552-1.145 1.136-1.145 1.637 0 .501.399 1.085 1.145 1.637 1.164.862 2.871 1.611 4.819 2.083a31.42 31.42 0 0 0-.972 2.736c-.218.696-.347 1.346-.309 1.802.036.425.218.73.509.785.292.055.689-.109 1.125-.441a31.408 31.408 0 0 0 2.809-2.502c1.084-1.096 2.124-2.308 3.044-3.578a31.408 31.408 0 0 0 2.809 2.502c.436.332.833.496 1.125.441.291-.055.473-.36.509-.785.038-.456-.091-1.106-.309-1.802a31.42 31.42 0 0 0-.972-2.736c1.948-.472 3.655-1.221 4.819-2.083.746-.552 1.145-1.136 1.145-1.637zM12 9.545a2.455 2.455 0 1 0 0 4.91 2.455 2.455 0 0 0 0-4.91z"/>
          </svg>
        )
      case 'vuejs':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24,1.61H17.89L12,11.83,6.11,1.61H0L12,22.39ZM12,15.22,17.89,5h-3.4L12,9.29,9.51,5H6.11Z"/>
          </svg>
        )
      case 'nextjs':
        return (
          <span className="font-extrabold text-[11px] font-mono tracking-tighter">N</span>
        )
      case 'tailwindcss':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.76 0-5 2.24-5 5v1h10v-1c0-2.76-2.24-5-5-5z"/>
          </svg>
        )
      case 'nodejs':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.999 0L2.832 5.292v10.584l9.167 5.293 9.168-5.293V5.292L11.999 0zm.012 2.223l7.217 4.167-1.921 1.109-5.284-3.05v-2.226zm-7.23 4.167l7.218-4.167v2.226l-5.297 3.058-1.921-1.117zm0 2.247l1.922 1.11v4.444l-1.922-1.11V8.637zm7.218 8.653v4.488l-7.218-4.167V13.12l7.218 4.17zm.024-6.438l5.284-3.05 1.921 1.11v2.225l-7.205 4.16v-4.445zm7.205 3.088l-7.205-4.16v2.222l5.284 3.05 1.921-1.112zm0 2.246l-7.205 4.16v-2.222l5.284-3.05 1.921 1.112z"/>
          </svg>
        )
      case 'express':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">EXP</span>
        )
      case 'mongodb':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .002C5.373.002 0 5.375 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.625-5.373-11.998-12-11.998zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.89-6.38l-2.02-2.02a.75.75 0 0 1 1.06-1.06l1.24 1.24 3.86-3.86a.75.75 0 1 1 1.06 1.06l-4.39 4.39a.748.748 0 0 1-1.05.01-1.54 1.54 0 0 1-1.8-.76z"/>
          </svg>
        )
      case 'postgresql':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">PG</span>
        )
      case 'sql':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">SQL</span>
        )
      case 'supabase':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">⚡</span>
        )
      case 'git':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.284 10.426L13.57.712A2.024 2.024 0 0 0 12.156 0c-.54 0-1.048.21-1.427.59L8.358 2.96l2.9 2.9a2.766 2.766 0 0 1 3.518.283c.96.96 1.054 2.455.283 3.518l2.9 2.9c1.063-.771 2.558-.677 3.518.283a2.775 2.775 0 0 1 0 3.922 2.775 2.775 0 0 1-3.922 0c-.96-.96-1.054-2.455-.283-3.518l-2.9-2.9a2.766 2.766 0 0 1-3.518-.283 2.766 2.766 0 0 1-.283-3.518l-2.9-2.9L.716 10.422a2.028 2.028 0 0 0 0 2.871l9.714 9.714c.379.379.887.59 1.427.59.54 0 1.048-.21 1.427-.59l9.714-9.714a2.031 2.031 0 0 0 0-2.871h.002z"/>
          </svg>
        )
      case 'github':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        )
      case 'postman':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">PM</span>
        )
      case 'vscode':
        return (
          <span className="font-extrabold text-[10px] font-mono tracking-tighter">VSC</span>
        )
      default:
        return null
    }
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0b0f19] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl section-title-underline">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Tools, languages, frameworks, and databases that make up my development toolbox.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col h-full">
              <h3 className="font-heading font-extrabold text-base border-b border-slate-100 dark:border-white/[0.06] pb-3 text-slate-900 dark:text-slate-200 mb-4 text-left">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="flex items-center gap-3 border border-slate-200/40 dark:border-white/[0.04] bg-slate-50/50 dark:bg-slate-800/10 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 px-3 py-2 rounded-xl transition-all duration-200"
                  >
                    <span className={`w-5 h-5 flex items-center justify-center text-slate-600 dark:text-slate-300`}>
                      {renderIcon(skill.icon)}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-250">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
