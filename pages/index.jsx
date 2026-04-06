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
  const [theme, setTheme] = useState('dark')

  const t = homeI18n[lang]

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'zh') setLang(saved)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const presetTheme = document.documentElement.dataset.theme

    if (presetTheme === 'light' || presetTheme === 'dark') {
      setTheme(presetTheme)
      return
    }

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    setTheme(mediaQuery.matches ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

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
            <div className="nav-controls">
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
                <button
                  type="button"
                  className={`lang-toggle__item ${lang === 'zh' ? 'is-active' : ''}`}
                  onClick={() => toggleLang('zh')}
                  aria-label={t.languageLabelZh}
                  aria-pressed={lang === 'zh'}
                >
                  中
                </button>
                <button
                  type="button"
                  className={`lang-toggle__item ${lang === 'en' ? 'is-active' : ''}`}
                  onClick={() => toggleLang('en')}
                  aria-label={t.languageLabelEn}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
              </div>
              {/* <div className="theme-toggle" aria-label={t.themeSwitcher}>
                <button
                  type="button"
                  className={`theme-toggle__item ${theme === 'light' ? 'is-active' : ''}`}
                  onClick={() => toggleTheme('light')}
                  aria-label={t.themeLight}
                  aria-pressed={theme === 'light'}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.25" />
                    <path d="M12 1.75v2.5M12 19.75v2.5M4.75 4.75l1.8 1.8M17.45 17.45l1.8 1.8M1.75 12h2.5M19.75 12h2.5M4.75 19.25l1.8-1.8M17.45 6.55l1.8-1.8" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`theme-toggle__item ${theme === 'dark' ? 'is-active' : ''}`}
                  onClick={() => toggleTheme('dark')}
                  aria-label={t.themeDark}
                  aria-pressed={theme === 'dark'}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.08 14.64A8.75 8.75 0 1 1 9.36 3.92a7.1 7.1 0 0 0 10.72 10.72Z" />
                  </svg>
                </button>
              </div> */}
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

          <section className="trust-strip-section">
            <div className="trust-strip section">
              {t.trustItems.map((item, i) => (
                <motion.div
                  key={`trust-${i}-${lang}`}
                  className="trust-item"
                  {...revealProps}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <span className="trust-item__value">{item.value}</span>
                  <span className="trust-item__label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section
            id="cases"
            ref={setSectionRef('cases')}
            className="section"
          >
            <div className="section-heading">
              <p className="eyebrow">{t.sections.cases}</p>
              <h2>{t.casesHeading}</h2>
              <p className="section-heading__description">{t.casesDescription}</p>
            </div>
            <div className="cases-grid">
              {projects.map((project, i) => (
                <motion.article
                  key={project.id}
                  className="case-card"
                  {...cardRevealProps}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (i % 2) * 0.08,
                  }}
                >
                  <div className="case-card__meta">
                    <span className="case-type">{project[lang].caseType}</span>
                    <span className="case-id">{project.id}</span>
                  </div>
                  <h3>{project[lang].title}</h3>
                  <div className="case-details">
                    <div className="case-detail">
                      <span className="case-detail__label">{t.caseLabels.problem}</span>
                      <span className="case-detail__value">{project[lang].problem}</span>
                    </div>
                    <div className="case-detail">
                      <span className="case-detail__label">{t.caseLabels.role}</span>
                      <span className="case-detail__value">{project[lang].role}</span>
                    </div>
                    <div className="case-detail case-detail--result">
                      <span className="case-detail__label">{t.caseLabels.result}</span>
                      <span className="case-detail__value case-result">{project[lang].result}</span>
                    </div>
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="case-card__footer">
                    <button type="button" className="case-cta" onClick={() => scrollToSection('contact')}>
                      {t.casesContactLink}
                    </button>
                  </div>
                </motion.article>
              ))}
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
            id="contact"
            ref={setSectionRef('contact')}
            className="section contact-section"
          >
            <div className="contact-header">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p className="contact-subtitle">{t.contact.subtitle}</p>
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
                      <span key={item} className="contact-chip">{item}</span>
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
