import Head from 'next/head'
import { useEffect } from 'react'

const techGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React / Next.js', subtitle: 'SPA, SSR, RSC aware UI architecture', level: '94%' },
      { name: 'Tailwind CSS', subtitle: 'Design tokens and utility-first systems', level: '90%' },
      { name: 'TypeScript', subtitle: 'Strict types for scalable frontend delivery', level: '92%' },
      { name: 'ECharts', subtitle: 'Interactive dashboards and live data visuals', level: '86%' },
    ],
  },
  {
    title: 'Backend & DB',
    items: [
      { name: 'Node.js', subtitle: 'API, BFF and automation workflows', level: '88%' },
      { name: 'Prisma', subtitle: 'Schema-first data modeling and migrations', level: '82%' },
      { name: 'PostgreSQL', subtitle: 'Relational data design and query optimization', level: '84%' },
      { name: 'Redis', subtitle: 'Caching, rate limit and queue support', level: '76%' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Cloudflare', subtitle: 'Pages, Workers and edge-first deployment', level: '85%' },
      { name: 'Docker', subtitle: 'Portable local and CI runtime environments', level: '79%' },
      { name: 'Git / GitHub', subtitle: 'Branching, review and release workflow', level: '91%' },
      { name: 'Supabase', subtitle: 'Rapid backend integration and auth setup', level: '80%' },
    ],
  },
]

const projects = [
  {
    id: '01',
    title: 'RBAC + ABAC 权限管理后台',
    description: '企业级混合权限模型，支持角色、属性、按钮级与数据级控制，适配复杂中后台业务权限拆分。',
    tags: ['Admin', 'RBAC', 'ABAC', 'React'],
  },
  {
    id: '02',
    title: 'LowCode 动态表单设计器',
    description: '通过拖拽式交互生成表单结构，自动输出 JSON Schema，降低运营配置门槛。',
    tags: ['LowCode', 'Schema', 'DnD', 'TypeScript'],
  },
  {
    id: '03',
    title: '商品 SKU 与规格配置系统',
    description: '支持多规格套餐组合与笛卡尔积算法计算，面向电商复杂商品配置场景。',
    tags: ['E-commerce', 'Algorithm', 'SKU', 'Node.js'],
  },
  {
    id: '04',
    title: '运营数据可视化大屏',
    description: '基于 ECharts 与 WebSocket 实现实时刷新，突出异常指标与业务趋势观察。',
    tags: ['ECharts', 'WebSocket', 'Realtime', 'Dashboard'],
  },
  {
    id: '05',
    title: '个人品牌与作品展示平台',
    description: '当前站点，采用静态部署思路构建，强调性能、辨识度与独立开发者表达。',
    tags: ['Portfolio', 'Cloudflare Pages', 'Static', 'UX'],
  },
  {
    id: '06',
    title: 'Web3 数字钱包与交易前端',
    description: '接入 Ethers.js 与 MetaMask，支持 ERC-20 资产交互与基础交易流程。',
    tags: ['Web3', 'Ethers.js', 'MetaMask', 'ERC-20'],
  },
]

const blogPosts = [
  { date: '2026-03-18', title: '从权限粒度设计到前端落地 / Permission Models in Production' },
  { date: '2026-02-07', title: '低代码表单引擎的状态管理拆解 / State Patterns for Builders' },
  { date: '2025-12-21', title: '独立开发者如何做技术选型 / Building with Constraints' },
]

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>代码民工 | Frontend Developer / Indie Hacker</title>
        <meta
          name="description"
          content="代码民工的个人品牌与作品展示站，聚焦前端开发、独立开发与现代 Web 产品构建。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="site-shell">
        <div className="noise-layer" aria-hidden="true" />
        <header className="site-nav">
          <a className="brandmark" href="#hero">
            <span className="brandmark__dot" />
            <span>代码民工</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section id="hero" className="hero section">
            <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
            <div className="hero__glow hero__glow--violet" aria-hidden="true" />
            <div className="hero__copy" data-reveal>
              <div className="hero-badge">
                <span className="hero-badge__dot" />
                <span>Available for selective freelance / shipping products</span>
              </div>
              <p className="eyebrow">Frontend Developer / Indie Hacker</p>
              <h1>
                代码民工
                <span>构建有辨识度的 Web 产品界面与可持续迭代的前端系统。</span>
              </h1>
              <p className="hero__summary">
                中文为主，兼顾 English context。专注 React / Next.js、后台系统、可视化和独立开发，追求清晰结构、克制动效与稳定交付。
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  查看作品
                </a>
                <a className="button button--ghost" href="mailto:suijiafeng@hotmail.com">
                  联系我
                </a>
              </div>
            </div>

            <aside className="terminal-card" data-reveal aria-label="Terminal introduction">
              <div className="terminal-card__chrome">
                <span className="mac-dot mac-dot--red" />
                <span className="mac-dot mac-dot--yellow" />
                <span className="mac-dot mac-dot--green" />
              </div>
              <div className="terminal-card__body">
                <div>
                  <span className="prompt">$</span> whoami
                </div>
                <div className="terminal-output">代码民工 / suijiafeng</div>
                <div>
                  <span className="prompt">$</span> cat profile.txt
                </div>
                <div className="terminal-output">Frontend Developer</div>
                <div className="terminal-output">Indie Hacker</div>
                <div className="terminal-output">Building for clarity, speed and edge delivery.</div>
                <div>
                  <span className="prompt">$</span> ls stack
                </div>
                <div className="terminal-output">React Next.js TypeScript Node.js PostgreSQL Cloudflare</div>
                <div className="terminal-line">
                  <span className="prompt">$</span> <span className="cursor" />
                </div>
              </div>
            </aside>
          </section>

          <section id="stack" className="section">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Tech Stack</p>
              <h2>按能力域拆分，而不是堆砌关键词。</h2>
            </div>
            <div className="stack-groups">
              {techGroups.map((group) => (
                <div key={group.title} className="stack-group" data-reveal>
                  <div className="stack-group__header">
                    <h3>{group.title}</h3>
                    <span>{group.items.length.toString().padStart(2, '0')} items</span>
                  </div>
                  <div className="stack-grid">
                    {group.items.map((item) => (
                      <article key={item.name} className="skill-card">
                        <div className="skill-card__top">
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.subtitle}</p>
                          </div>
                          <span>{item.level}</span>
                        </div>
                        <div className="skill-bar">
                          <span className="skill-bar__fill" data-reveal />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Projects</p>
              <h2>偏业务、偏系统、偏交付的项目组合。</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-card" data-reveal>
                  <span className="project-card__index">{project.id}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href="https://github.com/suijiafeng" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href="#contact">Demo</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="blog" className="section">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Blog</p>
              <h2>暂存的写作方向与占位文章列表。</h2>
            </div>
            <div className="blog-list">
              {blogPosts.map((post) => (
                <a key={post.date + post.title} className="blog-item" href="#contact" data-reveal>
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="blog-item__title">{post.title}</span>
                  <span className="blog-item__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="section contact-section" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2>如果你在做产品、后台系统、可视化或个人品牌站点，可以直接联系我。</h2>
            <div className="contact-links">
              <a href="mailto:suijiafeng@hotmail.com">suijiafeng@hotmail.com</a>
              <a href="https://github.com/suijiafeng" target="_blank" rel="noreferrer">
                github.com/suijiafeng
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <span>© 2026 代码民工</span>
          <span>Built for Cloudflare Pages</span>
        </footer>
      </div>
    </>
  )
}
