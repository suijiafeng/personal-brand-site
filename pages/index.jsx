import Head from 'next/head'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { homeI18n, navItems, projects } from '@/data/homeI18n'

const revealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
}

const cardRevealProps = {
  ...revealProps,
  viewport: { once: true, amount: 0.12 },
}

export default function Home() {
  const sectionRefs = useRef({})
  const activeSectionRef = useRef('hero')
  const [activeSection, setActiveSection] = useState('hero')
  const [lang, setLang] = useState('zh')

  const t = homeI18n[lang]

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'zh') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = (type) => {
    const next = type
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const setSectionRef = (key) => (node) => {
    if (node) {
      sectionRefs.current[key] = node
    }
  }

  const scrollToSection = (key) => {
    const target = sectionRefs.current[key]

    if (!target) {
      return
    }

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 72

    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 24

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    })
  }

  const getCurrentSection = useCallback(() => {
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 72

    const checkpoint = window.scrollY + navHeight + 48
    const sections = navItems
      .map((item) => ({
        key: item.key,
        node: sectionRefs.current[item.key],
      }))
      .filter((section) => section.node)

    let currentKey = sections[0]?.key || 'hero'

    sections.forEach((section) => {
      if (section.node.offsetTop <= checkpoint) {
        currentKey = section.key
      }
    })

    return currentKey
  }, [])

  const syncActiveSection = useCallback(() => {
    const currentKey = getCurrentSection()

    if (activeSectionRef.current !== currentKey) {
      activeSectionRef.current = currentKey
      setActiveSection(currentKey)
    }
  }, [getCurrentSection])

  useEffect(() => {
    const initialHash = window.location.hash.replace('#', '')
    if (initialHash && sectionRefs.current[initialHash]) {
      activeSectionRef.current = initialHash
      setActiveSection(initialHash)
      requestAnimationFrame(() => {
        scrollToSection(initialHash)
      })
    } else {
      activeSectionRef.current = getCurrentSection()
      syncActiveSection()
    }

    const handleScroll = () => {
      syncActiveSection()
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')

      if (hash && sectionRefs.current[hash]) {
        activeSectionRef.current = hash
        setActiveSection(hash)
        scrollToSection(hash)
        return
      }

      syncActiveSection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [getCurrentSection, syncActiveSection])

  return (
    <>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="site-shell">
        <div className="noise-layer" aria-hidden="true" />
        <header className="site-nav">
          <div className="nav-wrapper">
            <button type="button" className="brandmark" onClick={() => scrollToSection('hero')}>
              <span className="brandmark__dot" />
              <span>{t.brand}</span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <nav className="nav-links" aria-label="Primary">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={activeSection === item.key ? 'is-active' : ''}
                    onClick={() => scrollToSection(item.key)}
                  >
                    {item[lang]}
                  </button>
                ))}
              </nav>
              <div className="lang-toggle" aria-label={t.languageSwitcher}>
                <span onClick={() => toggleLang('zh')} className='lang-toggle__item' style={{ color: lang === 'zh' ? 'var(--text)' : 'var(--text-muted)' }}>中</span>
                <span className="lang-toggle__sep">/</span>
                <span onClick={() => toggleLang('en')} className='lang-toggle__item' style={{ color: lang === 'en' ? 'var(--text)' : 'var(--text-muted)' }}>EN</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="hero" ref={setSectionRef('hero')} className="hero section">
            <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
            <div className="hero__glow hero__glow--violet" aria-hidden="true" />
            <motion.div className="hero__copy" key={`hero-copy-${lang}`} {...revealProps}>
              <div className="hero-badge">
                <span className="hero-badge__dot" />
                <span>{t.badge}</span>
              </div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>
                {t.brand}
                <span>{t.heroSubtitle}</span>
              </h1>
              <p className="hero__summary">{t.heroSummary}</p>
              <div className="hero__actions">
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => scrollToSection('projects')}
                >
                  {t.ctaPrimary}
                </button>
                <a className="button button--ghost" href="mailto:suijiafeng@hotmail.com">
                  {t.ctaSecondary}
                </a>
              </div>
            </motion.div>

            <div className="terminal-float-wrapper">
              <motion.aside
                className="terminal-card"
                aria-label={t.terminalLabel}
                key={`terminal-${lang}`}
                {...revealProps}
              >
                <div className="terminal-card__chrome">
                  <span className="mac-dot mac-dot--red" />
                  <span className="mac-dot mac-dot--yellow" />
                  <span className="mac-dot mac-dot--green" />
                </div>
                <div className="terminal-card__body">
                  <div>
                    <span className="prompt">$</span> {t.terminalCommands.whoami}
                  </div>
                  <div className="terminal-output">{t.terminal.whoami}</div>
                  <div>
                    <span className="prompt">$</span> {t.terminalCommands.commits}
                  </div>
                  {t.terminal.commits.map((commit, index) => (
                    <div key={index} className="terminal-output terminal-output--commit">
                      <span className="terminal-hash">{commit.split(' ')[0]}</span> {commit.split(' ').slice(1).join(' ')}
                    </div>
                  ))}
                  <div>
                    <span className="prompt">$</span> {t.terminalCommands.focus}
                  </div>
                  <div className="terminal-output">{t.terminal.focus}</div>
                  <div className="terminal-line">
                    <span className="prompt">$</span> <span className="cursor" />
                  </div>
                </div>
              </motion.aside>
            </div>
          </section>

          <section id="stack" ref={setSectionRef('stack')} className="section">
            <div className="section-heading">
              <p className="eyebrow">{t.sections.stack}</p>
              <h2>{t.stackHeading}</h2>
              <p className="section-heading__description">{t.stackDescription}</p>
            </div>
            <div className="stack-groups">
              {t.techGroups.map((group, groupIndex) => (
                <motion.div
                  key={`stack-group-${groupIndex}-${lang}`}
                  className="stack-group"
                  {...cardRevealProps}
                >
                  <div className="stack-group__header">
                    <h3>{group.title}</h3>
                    <span>{group.items.length.toString().padStart(2, '0')} {t.itemCountSuffix}</span>
                  </div>
                  <div className="stack-grid">
                    {group.items.map((item, itemIndex) => (
                      <article key={`stack-item-${groupIndex}-${itemIndex}`} className="skill-card">
                        <div className="skill-card__top">
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.subtitle}</p>
                          </div>
                          <span>{item.level}</span>
                        </div>
                        <div className="skill-bar">
                          <motion.span
                            className="skill-bar__fill"
                            style={{ '--level': (parseFloat(item.level) / 100).toFixed(2) }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 'var(--level)' }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            ref={setSectionRef('projects')}
            className="section"
          >
            <div className="section-heading">
              <p className="eyebrow">{t.sections.projects}</p>
              <h2>{t.projectsHeading}</h2>
              <p className="section-heading__description">{t.projectsDescription}</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <motion.article
                  key={project.id}
                  className="project-card"
                  {...cardRevealProps}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (i % 3) * 0.08,
                  }}
                >
                  <h3> {project[lang].title}</h3>
                  <p className="project-card__description">{project[lang].description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href="https://github.com/suijiafeng" target="_blank" rel="noreferrer">
                      {t.projectPrimaryLink}
                    </a>
                    <button type="button" onClick={() => scrollToSection('contact')}>
                      {t.projectSecondaryLink}
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            ref={setSectionRef('contact')}
            className="section contact-section"
          >
            <div className="contact-header">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p className="contact-subtitle">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-primary">
                <div className="contact-card">
                  <div className="contact-card-meta">{t.contact.emailMeta}</div>
                  <h3>{t.contact.emailCard.title}</h3>
                  <p>{t.contact.emailCard.description}</p>
                  <a href={`mailto:${t.contact.emailCard.link}`} className="contact-link">
                    {t.contact.emailCard.link}
                  </a>
                </div>

                <div className="contact-card">
                  <div className="contact-card-meta">{t.contact.githubMeta}</div>
                  <h3>{t.contact.githubCard.title}</h3>
                  <p>{t.contact.githubCard.description}</p>
                  <a href={`https://${t.contact.githubCard.link}`} target="_blank" rel="noreferrer" className="contact-link">
                    {t.contact.githubCard.link}
                  </a>
                </div>
              </div>

              <div className="contact-extras">
                <div className="contact-panel">
                  <div className="contact-panel__title">{t.contact.fitTitle}</div>
                  <div className="contact-chip-list">
                    {t.contact.fitItems.map((item) => (
                      <span key={item} className="contact-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="contact-panel">
                  <div className="contact-panel__title">{t.contact.workflowTitle}</div>
                  <div className="contact-list">
                    {t.contact.workflowItems.map((item) => (
                      <div key={item} className="contact-list__item">
                        <span className="contact-list__dot" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-secondary">
                <div className="contact-info-item">
                  <span className="info-marker" />
                  <div>
                    <div className="info-label">{t.contact.locationLabel}</div>
                    <div className="info-value">{t.contact.location}</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="info-marker" />
                  <div>
                    <div className="info-label">{t.contact.timezoneLabel}</div>
                    <div className="info-value">{t.contact.timezone}</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="info-marker" />
                  <div>
                    <div className="info-label">{t.contact.statusLabel}</div>
                    <div className="info-value">{t.contact.status}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <span>{t.footerBrand}</span>
          <span>{t.footerPlatform}</span>
        </footer>
      </div>
    </>
  )
}
