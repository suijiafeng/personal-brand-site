export const projects = [
  {
    id: '01',
    zh: {
      title: '企业级权限管理系统',
      description:
        'RBAC+ABAC混合权限模型，精细化权限控制，从角色到数据级别的全方位安全保障。让复杂的企业组织架构变得简单可管理。',
    },
    en: {
      title: 'Enterprise Access Control System',
      description:
        'A hybrid RBAC + ABAC model with fine-grained control from roles to data-level permissions, designed for complex enterprise access scenarios.',
    },
    tags: ['Admin', 'RBAC', 'ABAC', 'React'],
  },
  {
    id: '02',
    zh: {
      title: '低代码表单设计器',
      description:
        '拖拽式表单构建，自动生成JSON Schema，让运营人员也能轻松创建复杂表单。降低技术门槛，提升业务响应速度。',
    },
    en: {
      title: 'Low-Code Form Builder',
      description:
        'A drag-and-drop form builder with automatic JSON Schema generation, enabling operations teams to configure complex forms with lower engineering involvement.',
    },
    tags: ['LowCode', 'Schema', 'DnD', 'TypeScript'],
  },
  {
    id: '03',
    zh: {
      title: '智能商品配置系统',
      description:
        '多规格SKU管理，笛卡尔积算法优化，电商复杂商品配置的完美解决方案。让商品管理既专业又简单。',
    },
    en: {
      title: 'Product Configuration System',
      description:
        'Supports multi-variant SKU management with Cartesian-product generation for complex e-commerce product configuration workflows.',
    },
    tags: ['E-commerce', 'Algorithm', 'SKU', 'Node.js'],
  },
  {
    id: '04',
    zh: {
      title: '实时运营数据大屏',
      description:
        'ECharts + WebSocket实时数据可视化，异常指标智能预警，业务趋势一目了然。让数据驱动决策变得直观高效。',
    },
    en: {
      title: 'Real-time Operations Dashboard',
      description:
        'Built with ECharts and WebSocket for real-time visualization, anomaly monitoring, and operational trend tracking in large-screen dashboards.',
    },
    tags: ['ECharts', 'WebSocket', 'Realtime', 'Dashboard'],
  },
  {
    id: '05',
    zh: {
      title: '个人品牌展示平台',
      description:
        '你正在浏览的这个网站，Cloudflare Pages静态部署，极致性能与优雅设计。独立开发者的数字名片，技术与艺术的完美融合。',
    },
    en: {
      title: 'Personal Brand Website',
      description:
        'This site itself, deployed on Cloudflare Pages with a static-first approach, focused on performance, visual identity, and independent developer presentation.',
    },
    tags: ['Portfolio', 'Cloudflare Pages', 'Static', 'UX'],
  },
  {
    id: '06',
    zh: {
      title: 'Web3数字钱包界面',
      description:
        'Ethers.js + MetaMask深度集成，ERC-20资产管理，区块链交易流程优化。让Web3交互变得简单直观。',
    },
    en: {
      title: 'Web3 Wallet Interface',
      description:
        'Integrated with Ethers.js and MetaMask to support ERC-20 asset interaction and core transaction flows in a Web3 frontend.',
    },
    tags: ['Web3', 'Ethers.js', 'MetaMask', 'ERC-20'],
  },
]

export const navItems = [
  { key: 'hero', zh: '首页', en: 'Home' },
  { key: 'stack', zh: '技术栈', en: 'Stack' },
  { key: 'projects', zh: '项目', en: 'Projects' },
  { key: 'contact', zh: '联系', en: 'Contact' },
]

export const homeI18n = {
  zh: {
    pageTitle: '代码民工 · 前端架构师 & 独立开发者',
    metaDesc:
      '代码民工的个人品牌与作品展示站，专注企业级前端工程、现代化Web架构与用户体验设计。打造有灵魂的数字产品，让技术服务于创意。',
    brand: '代码民工',
    badge: '🔥 热招项目 · 透明开发',
    eyebrow: '前端架构师 / 独立开发者',
    heroSubtitle: '用代码构建梦想，用设计诠释价值',
    heroSummary:
      '深耕 React / Next.js 生态，擅长构建高性能、可扩展的企业级前端应用。从复杂的后台管理系统到炫酷的数据可视化，从传统Web到前沿Web3，我致力于用技术解决真实世界的业务问题。相信好的设计能改变世界，好的代码能创造未来。',
    ctaPrimary: '作品集',
    ctaSecondary: '联系我',
    languageSwitcher: '切换语言',
    languageLabelZh: '中',
    languageLabelEn: 'EN',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    menuLabel: '移动端菜单',
    themeSwitcher: '切换主题',
    themeLight: '日',
    themeDark: '夜',
    terminalLabel: '终端介绍',
    terminalCommands: {
      whoami: 'whoami',
      commits: 'git log --oneline -3',
      focus: 'echo $FOCUS',
    },
    stackHeading: '技术能力全景图，精准匹配业务需求',
    stackDescription:
      '围绕前端架构、数据系统与交付链路展开，不只是技术罗列，而是面向真实业务场景的能力组合。',
    projectsHeading: '从概念到交付，完整的产品生命周期',
    projectsDescription:
      '这些项目覆盖后台系统、配置平台、数据可视化与个人品牌站点，重点体现复杂需求拆解与稳定交付能力。',
    itemCountSuffix: '项',
    projectPrimaryLink: 'GitHub',
    projectSecondaryLink: '联系',
    contact: {
      eyebrow: '联系方式',
      title: '让我们一起创造',
      subtitle:
        '我始终对新的机会和激动人心的项目感兴趣。无论您有问题还是只是想打个招呼，请随时联系我。',
      fitTitle: '更适合合作的项目',
      fitItems: ['后台系统 / 工作台', '数据可视化 / 大屏', '低代码 / 配置平台', '品牌官网 / 作品站'],
      workflowTitle: '合作方式',
      workflowItems: ['需求梳理与方案对齐', '按阶段交付与同步进度', '支持远程协作与文档沉淀'],
      emailCard: {
        title: '给我发邮件',
        description: '给我发邮件讨论合作、机会，或只是聊聊技术。',
        link: 'suijiafeng@hotmail.com',
      },
      githubCard: {
        title: '查看我的作品',
        description: '在GitHub上探索我的项目和贡献。',
        link: 'github.com/suijiafeng',
      },
      emailMeta: '邮箱',
      githubMeta: 'GitHub',
      locationLabel: '位置',
      timezoneLabel: '时区',
      statusLabel: '状态',
      location: '上海，中国',
      timezone: 'UTC+8 (CST)',
      status: '可接受项目',
      responseTime: '响应时间：通常在24小时内',
    },
    footerBrand: '© 2026 代码民工 · 让技术更有温度',
    footerPlatform: '基于 Cloudflare Pages 构建',
    terminal: {
      whoami: '代码民工 / suijiafeng',
      focus: 'React · Next.js · Edge Delivery',
      commits: [
        'feat: RBAC admin system v2',
        'feat: lowcode form builder',
        'fix: dashboard realtime perf',
      ],
    },
    techGroups: [
      {
        title: '前端技术栈',
        items: [
          {
            name: 'React / Next.js',
            subtitle: '现代化React生态，SSR/SSG/RSC全栈支持，打造极致用户体验',
            level: '94%',
          },
          {
            name: 'Tailwind CSS',
            subtitle: '原子化设计系统，高效构建美观一致的界面，设计与开发无缝衔接',
            level: '90%',
          },
          {
            name: 'TypeScript',
            subtitle: '类型安全保障，构建可维护的大型前端应用，减少运行时错误',
            level: '92%',
          },
          {
            name: 'ECharts',
            subtitle: '专业数据可视化，实时交互图表，业务数据一目了然',
            level: '86%',
          },
        ],
      },
      {
        title: '数据 & 部署',
        items: [
          { name: 'Node.js', subtitle: '服务端渲染与自动化流程', level: '88%' },
          {
            name: 'Prisma',
            subtitle: '现代化ORM，类型安全数据库操作，优雅的数据建模体验',
            level: '82%',
          },
          {
            name: 'PostgreSQL',
            subtitle: '企业级关系数据库，复杂查询优化，数据一致性保障',
            level: '84%',
          },
          {
            name: 'Docker',
            subtitle: '容器化部署，环境一致性，本地开发与生产环境统一',
            level: '79%',
          },
          {
            name: 'Git / GitHub',
            subtitle: '版本控制最佳实践，代码审查，CI/CD自动化部署流程',
            level: '91%',
          },
        ],
      },
    ],
    sections: {
      stack: '技术栈',
      projects: '参与项目',
    },
  },
  en: {
    pageTitle: '代码民工 · Frontend Engineer & Indie Developer',
    metaDesc:
      'A portfolio site by 代码民工, focused on enterprise frontend engineering, modern web architecture, and user experience design.',
    brand: '代码民工',
    badge: 'Open to Selected Projects · Transparent Delivery',
    eyebrow: 'Frontend Engineer / Indie Developer',
    heroSubtitle: 'Building products with code, expressing value through design.',
    heroSummary:
      'Focused on the React and Next.js ecosystem, with experience building high-performance and scalable frontend applications. My work spans admin systems, data visualization, and Web3 interfaces, with an emphasis on solving real product problems through solid engineering and clear interaction design.',
    ctaPrimary: 'Explore My Work',
    ctaSecondary: 'Get in Touch',
    languageSwitcher: 'Switch language',
    languageLabelZh: 'ZH',
    languageLabelEn: 'EN',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuLabel: 'Mobile menu',
    themeSwitcher: 'Switch theme',
    themeLight: 'Day',
    themeDark: 'Night',
    terminalLabel: 'Terminal introduction',
    terminalCommands: {
      whoami: 'whoami',
      commits: 'git log --oneline -3',
      focus: 'echo $FOCUS',
    },
    stackHeading:
      'A capability map aligned with real product and engineering needs.',
    stackDescription:
      'Structured around frontend architecture, data systems, and delivery workflows, this section highlights practical capabilities rather than a simple list of tools.',
    projectsHeading:
      'Projects covering the full path from concept to delivery.',
    projectsDescription:
      'These projects span admin systems, configuration platforms, data visualization, and personal brand websites, with a focus on requirement decomposition and stable delivery.',
    itemCountSuffix: 'items',
    projectPrimaryLink: 'GitHub',
    projectSecondaryLink: 'Contact',
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Build Together",
      subtitle:
        'I am always open to interesting opportunities and meaningful projects. If you have a question, a product idea, or a potential collaboration, feel free to reach out.',
      fitTitle: 'Best-fit project types',
      fitItems: ['Admin systems / workbenches', 'Data visualization / dashboards', 'Low-code / configuration platforms', 'Brand websites / portfolios'],
      workflowTitle: 'How I usually work',
      workflowItems: ['Clarify requirements and scope first', 'Deliver in phases with visible progress', 'Remote collaboration with clear documentation'],
      emailCard: {
        title: 'Email Me',
        description: 'Use email for project inquiries, collaboration opportunities, or technical discussions.',
        link: 'suijiafeng@hotmail.com',
      },
      githubCard: {
        title: 'View My Work',
        description: 'Browse my projects and public contributions on GitHub.',
        link: 'github.com/suijiafeng',
      },
      emailMeta: 'Email',
      githubMeta: 'GitHub',
      locationLabel: 'Location',
      timezoneLabel: 'Timezone',
      statusLabel: 'Status',
      location: 'Shanghai, China',
      timezone: 'UTC+8 (CST)',
      status: 'Open to projects',
      responseTime: 'Typical response time: within 24 hours',
    },
    footerBrand: '© 2026 代码民工 · Bringing more clarity to technology',
    footerPlatform: 'Built for Cloudflare Pages',
    terminal: {
      whoami: '代码民工 / suijiafeng',
      focus: 'React · Next.js · Edge Delivery',
      commits: [
        'feat: RBAC admin system v2',
        'feat: lowcode form builder',
        'fix: dashboard realtime perf',
      ],
    },
    techGroups: [
      {
        title: 'Frontend Stack',
        items: [
          {
            name: 'React / Next.js',
            subtitle: 'Modern React ecosystem with SSR, SSG, and RSC support for production-grade interfaces.',
            level: '94%',
          },
          {
            name: 'Tailwind CSS',
            subtitle:
              'Utility-first styling and design system implementation for fast and consistent UI delivery.',
            level: '90%',
          },
          {
            name: 'TypeScript',
            subtitle: 'Strong typing for large-scale frontend applications, maintainability, and safer refactoring.',
            level: '92%',
          },
          {
            name: 'ECharts',
            subtitle:
              'Interactive data visualization for dashboards, monitoring, and business-facing analytics interfaces.',
            level: '86%',
          },
        ],
      },
      {
        title: 'Backend & Data',
        items: [
          {
            name: 'Node.js',
            subtitle: 'Used for server-side rendering, automation workflows, and frontend-adjacent service integration.',
            level: '88%',
          },
          {
            name: 'Prisma',
            subtitle: 'Type-safe ORM for schema design, data modeling, and maintainable database access.',
            level: '82%',
          },
          {
            name: 'PostgreSQL',
            subtitle: 'Relational database design, query optimization, and data consistency for business systems.',
            level: '84%',
          },
          {
            name: 'Docker',
            subtitle: 'Containerized deployment and environment consistency across local development and production.',
            level: '79%',
          },
          {
            name: 'Git / GitHub',
            subtitle: 'Version control, code review, and CI/CD-oriented collaboration workflows.',
            level: '91%',
          },
        ],
      },
    ],
    sections: {
      stack: 'Tech Stack',
      projects: 'Selected Projects',
    },
  },
}
