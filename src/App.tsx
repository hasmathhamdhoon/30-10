import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Send,
  Sun,
  X,
} from 'lucide-react'
import {
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from './data'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setFormStatus('Please complete each field before sending.')
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFormStatus('Your email app should open with your message ready to send.')
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          <span className="wordmark-mark">a<span>.</span></span>
          <span className="wordmark-name">{profile.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle icon-button"
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
            title={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="mobile-menu-toggle icon-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label} <ArrowUpRight size={16} />
              </a>
            ))}
            <a className="mobile-nav-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <main id="main">
        <section className="hero page-width" id="home">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="availability" variants={reveal}>
              <span className="availability-dot" />
              <span>Open to thoughtful opportunities</span>
            </motion.div>
            <motion.p className="hero-kicker" variants={reveal}>
              {profile.role}
            </motion.p>
            <motion.h1 variants={reveal}>
              Making good
              <br />
              ideas <span className="serif-accent">work.</span>
            </motion.h1>
            <motion.p className="hero-intro" variants={reveal}>
              {profile.intro}
            </motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </motion.div>
            <motion.div className="hero-socials" variants={reveal}>
              <span className="mono-label">FIND ME</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} (placeholder link)`}
                  title={`${social.label} · replace with your profile`}
                >
                  {social.short}
                </a>
              ))}
              <span className="social-divider" />
              <span className="location-label">{profile.location}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-image-frame">
              <img src={profile.image} alt="Portrait placeholder for Alex Morgan" />
              <span className="image-index">PORTRAIT / 001</span>
            </div>
            <div className="hero-sticker" aria-hidden="true">
              <span>Curious</span>
              <span>by nature</span>
              <ArrowDownRight size={18} />
            </div>
            <div className="hero-caption">
              <span>DESIGN-MINDED ENGINEERING</span>
              <span>40°41′ N — 73°59′ W</span>
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About">
            <ArrowDown size={15} />
          </a>
          <div className="hero-backdrop-word" aria-hidden="true">
            PORTFOLIO
          </div>
        </section>

        <section className="about-section section-block" id="about">
          <div className="page-width">
            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title="A builder with a soft spot for the details."
              description="Good software should feel as considered as it is capable."
            />
            <div className="about-grid">
              <div className="about-intro">
                <span className="about-mark" aria-hidden="true">“</span>
                <p>{profile.about}</p>
                <a className="text-link" href="#experience">
                  A little more about my journey <ArrowRight size={15} />
                </a>
              </div>
              <div className="about-details">
                <div className="about-detail">
                  <span className="detail-index">01</span>
                  <div>
                    <h3>What I’m curious about</h3>
                    <p>{profile.interests}</p>
                  </div>
                </div>
                <div className="about-detail">
                  <span className="detail-index">02</span>
                  <div>
                    <h3>Where I’m headed</h3>
                    <p>{profile.goal}</p>
                  </div>
                </div>
                <div className="about-note">
                  <span className="about-note-icon"><ArrowDownRight size={18} /></span>
                  <span>Independent thinking. Collaborative making.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="page-width">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="A few things I bring to the table."
              description="The tools change. The care stays the same."
            />
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="skill-number">0{index + 1}</span>
                  <span className="skill-icon">
                    {index === 0 ? <Code2 /> : index === 1 ? <Layers3 /> : <Palette />}
                  </span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-block" id="work">
          <div className="page-width">
            <SectionHeading
              eyebrow="SELECTED EXPLORATIONS"
              title="A few things I’ve been making."
              description="Concept work and sample projects — ready to be replaced with your own."
            />
            <div className="projects-list">
              {projects.map((project, index) => (
                <motion.article
                  className={`project-card project-${project.theme}`}
                  key={project.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <a
                    className="project-art"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} demo placeholder`}
                  >
                    <span className="project-art-grid" />
                    <span className="project-art-label">{project.category}</span>
                    <span className="project-art-mark">{project.mark}</span>
                    <span className="project-art-orbit orbit-one" />
                    <span className="project-art-orbit orbit-two" />
                    <span className="project-art-window">
                      <span /><span /><span />
                    </span>
                    <span className="project-art-open"><ArrowUpRight size={18} /></span>
                  </a>
                  <div className="project-info">
                    <div className="project-topline">
                      <span>{project.number} / 03</span>
                      <span>{project.category}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-bottom">
                      <ul className="tag-list">
                        {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                      <div className="project-links">
                        <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub placeholder`}>
                          <Github size={17} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo placeholder`}>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="work-footnote">
              <span>PROJECT LINKS ARE PLACEHOLDERS — UPDATE WITH YOUR WORK</span>
              <a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">
                More on GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="experience-section section-block" id="experience">
          <div className="page-width">
            <SectionHeading
              eyebrow="THE PATH SO FAR"
              title="Experience & education."
              description="A sample timeline you can make your own."
            />
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.article
                  className="timeline-item"
                  key={`${item.period}-${item.title}`}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="timeline-date">{item.period}</div>
                  <span className={`timeline-dot ${item.type}`} aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-type">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                  {item.type === 'education' && <span className="education-icon"><Layers3 size={18} /></span>}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section section-block" id="services">
          <div className="page-width">
            <SectionHeading
              eyebrow="HOW I CAN HELP"
              title="From first sketch to finished product."
              description="Flexible, focused support for teams and ideas at every stage."
            />
            <div className="services-grid">
              {[
                { number: '01', title: 'Web development', detail: 'Responsive, accessible websites that are fast, considered, and easy to maintain.' },
                { number: '02', title: 'Software development', detail: 'Practical product engineering from early prototype through production-ready features.' },
                { number: '03', title: 'UI / UX collaboration', detail: 'Thoughtful interaction design and implementation, with care for the smallest details.' },
              ].map((service) => (
                <article className="service-item" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                  <ArrowUpRight className="service-arrow" size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-block" id="contact">
          <div className="page-width contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
              <h2>Let’s make<br />something <span className="serif-accent">matter.</span></h2>
              <p>Have a project, a role, or just a good question? My inbox is open.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail size={17} /> {profile.email} <ArrowUpRight size={15} />
              </a>
              <div className="contact-socials">
                {socialLinks.slice(0, 2).map((social, index) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {index === 0 ? <Github size={16} /> : <Linkedin size={16} />}
                    {social.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-heading">
                <span className="form-index">A NOTE TO ALEX</span>
                <span className="form-required">* REQUIRED</span>
              </div>
              <label htmlFor="contact-name">Your name <span>*</span></label>
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
              <label htmlFor="contact-email">Your email <span>*</span></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
              <label htmlFor="contact-message">What’s on your mind? <span>*</span></label>
              <textarea id="contact-message" name="message" rows={3} placeholder="A little about your project or idea…" required />
              <button className="button button-primary form-submit" type="submit">
                Send a note <Send size={15} />
              </button>
              <p className="form-status" aria-live="polite">
                {formStatus && (formStatus.startsWith('Your email') ? <Check size={15} /> : null)}
                {formStatus}
              </p>
              <p className="form-disclaimer">This opens your email app with your note ready to send.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-mark">a<span>.</span></span>
            <span className="wordmark-name">{profile.name}</span>
          </a>
          <p>Thoughtful software, carefully built.</p>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            <a href="#skills">Skills</a>
          </nav>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>MADE WITH INTENTION <span className="footer-spark">✳</span></span>
          <span className="footer-placeholder"><Check size={13} /> EDITABLE SAMPLE CONTENT</span>
        </div>
      </footer>
    </div>
  )
}

export default App
