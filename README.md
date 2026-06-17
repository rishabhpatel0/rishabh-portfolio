# Rishabh Patel - Personal Portfolio Website (Tailwind CSS)

A modern, professional, and fully responsive SaaS-style personal portfolio website designed for a Computer Science graduate and Full Stack Developer. Built using **React + Vite** and styled with **Tailwind CSS**.

---

## ⚡ Tech Stack

*   **Framework**: React (using Vite as a build tool)
*   **Styling**: Tailwind CSS (supporting class-based Dark/Light theme switching)
*   **Fonts**: Outfit (headings) & Plus Jakarta Sans (body copy)
*   **Deployment**: Optimized for Vercel

---

## 📂 Project Structure

```text
rishabh-portfolio/
├── public/
│   └── Rishabh_Patel_Resume.pdf  # Downloadable resume placeholder
├── src/
│   ├── assets/                   # Project or layout visual assets
│   ├── components/               # UI Sections
│   │   ├── About.jsx             # Bio & Galgotias B.Tech (2021-2025)
│   │   ├── Contact.jsx           # Form submission & social links
│   │   ├── Experience.jsx        # Crio.do Software Fellowship Certification
│   │   ├── Footer.jsx            # Copyright signature
│   │   ├── Hero.jsx              # Banner landing & code terminal mockup
│   │   ├── Navbar.jsx            # Responsive header & theme toggle
│   │   ├── Projects.jsx          # Project grid (HeroTrader, Medify, QKart, etc.)
│   │   └── Skills.jsx            # Dynamic skills layout with SVG logos
│   ├── App.jsx                   # Theme synchronization & layout coordinator
│   ├── index.css                 # Tailwind directives & global rules
│   └── main.jsx                  # App mount entry point
├── index.html                    # SEO template index
├── tailwind.config.js            # Tailwind directives configuration
├── postcss.config.js             # PostCSS plugins config
├── package.json                  # Dependencies configuration
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### 1. Local Run
Install dependencies and trigger the developer server:

```bash
# Install package dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🛠️ Personalizing the Portfolio

To prepare the portfolio for custom applications, update the following parameters:

### 1. Custom Contact Links
Open [src/components/Contact.jsx](file:///home/rishabh/.gemini/antigravity/scratch/rishabh-portfolio/src/components/Contact.jsx) and edit `CONTACT_INFO`:
```javascript
const CONTACT_INFO = {
  email: 'your.real.email@gmail.com',
  github: 'https://github.com/your-github-username',
  linkedin: 'https://linkedin.com/in/your-linkedin-slug',
}
```

### 2. Custom Project Data
Open [src/components/Projects.jsx](file:///home/rishabh/.gemini/antigravity/scratch/rishabh-portfolio/src/components/Projects.jsx) and modify the `PROJECTS_DATA` array. You can replace the simulated CSS previews by setting `screenshotType` or adding image sources.

---

## 🌐 Deploying to Vercel

1.  Push your code to a new GitHub repository.
2.  Login to [Vercel](https://vercel.com) and click **"Add New Project"**.
3.  Import your GitHub repository.
4.  Vercel will auto-detect **Vite** as the framework and configure Tailwind CSS compilation automatically.
5.  Click **"Deploy"**.
