export const projects = [
  {
    id: '01',
    zh: {
      title: '多租户后台权限系统',
      caseType: '企业后台 / 权限平台',
      problem: '团队规模扩大后，角色关系和权限层级迅速变复杂，传统人工维护方式既低效，也容易留下权限风险。',
      role: '以前端负责人身份参与方案设计与交互落地，负责权限模型梳理、核心界面实现和关键流程体验优化。',
      result: '系统可支撑千人规模组织结构，权限审批和配置成本显著下降，人工处理环节减少约 80%。',
    },
    en: {
      title: 'Multi-tenant Access Control System',
      caseType: 'Enterprise Admin / Access Control',
      problem: 'As the organization grew, role relationships and permission layers became too complex for manual management, creating both inefficiency and security risk.',
      role: 'Worked as the frontend lead across solution design and interaction delivery, covering permission model refinement, core UI implementation, and workflow usability.',
      result: 'The system now supports 1,000+ organizational structures, with configuration and approval overhead reduced significantly and manual steps cut by around 80%.',
    },
    tags: ['Admin', 'RBAC', 'ABAC', 'React'],
  },
  {
    id: '02',
    zh: {
      title: '低代码表单引擎',
      caseType: '配置平台 / 低代码工具',
      problem: '业务侧频繁调整表单和配置流程，如果每次都依赖研发介入，响应速度和协作成本都会被不断放大。',
      role: '负责拖拽式表单引擎的核心架构设计、JSON Schema 规范定义，以及关键编辑体验的实现。',
      result: '表单配置能力向业务侧开放后，研发介入频率明显下降，自助配置覆盖大部分常见场景，相关需求减少约 60%。',
    },
    en: {
      title: 'Low-Code Form Engine',
      caseType: 'Low-Code / Configuration Platform',
      problem: 'Frequent changes to forms and configuration flows created delivery bottlenecks when every adjustment depended on engineering support.',
      role: 'Owned the core architecture of the drag-and-drop form engine, the JSON Schema definition model, and the implementation of the key editing experience.',
      result: 'After opening configuration capability to the business side, most routine changes could be handled independently and related engineering requests dropped by about 60%.',
    },
    tags: ['LowCode', 'Schema', 'DnD', 'TypeScript'],
  },
  {
    id: '03',
    zh: {
      title: '电商 SKU 配置工作台',
      caseType: '电商后台 / 配置工具',
      problem: '多规格商品的组合关系复杂，人工维护 SKU 不仅效率低，还很容易在上架流程中产生配置错误。',
      role: '负责 SKU 笛卡尔积生成逻辑、配置工作台核心交互以及关键操作链路的可用性优化。',
      result: '商品配置和上架流程明显提速，整体效率提升约 3 倍，人工操作导致的错误率接近 0。',
    },
    en: {
      title: 'E-commerce SKU Config Workbench',
      caseType: 'E-commerce Admin / Config Tool',
      problem: 'Managing multi-variant products manually made SKU configuration slow, repetitive, and highly error-prone during the listing process.',
      role: 'Built the Cartesian-product SKU generation logic, designed the main configuration workbench interactions, and optimized critical operation flows for usability.',
      result: 'The configuration and listing workflow became roughly 3x faster, while manual-operation errors dropped to near zero.',
    },
    tags: ['E-commerce', 'Algorithm', 'SKU', 'Node.js'],
  },
  {
    id: '04',
    zh: {
      title: '运营实时监控大屏',
      caseType: '数据可视化 / 实时大屏',
      problem: '核心运营数据分散在多个系统中，缺少统一视图和实时预警能力，导致异常发现和业务决策普遍滞后。',
      role: '负责数据接入链路、图表表达设计、前端展示实现，以及异常预警逻辑的落地。',
      result: '异常识别速度从小时级缩短到分钟级，数据反馈更及时，运营判断和响应效率明显提升。',
    },
    en: {
      title: 'Real-time Operations Dashboard',
      caseType: 'Data Visualization / Large-screen Display',
      problem: 'Key operations data was spread across multiple systems with no unified view or real-time alerting, which delayed anomaly detection and decision-making.',
      role: 'Handled the data integration flow, chart expression design, frontend implementation, and the delivery of anomaly alert logic.',
      result: 'Detection speed improved from hours to minutes, giving the operations team much faster feedback and response capability.',
    },
    tags: ['ECharts', 'WebSocket', 'Realtime', 'Dashboard'],
  },
  {
    id: '05',
    zh: {
      title: '个人品牌获客站',
      caseType: '品牌官网 / 静态站点',
      problem: '普通作品集往往只能展示做过什么，却很难完整传达个人能力边界、专业判断和品牌辨识度。',
      role: '独立完成信息架构、文案整理、视觉表达、前端实现与多语言支持，整体以个人品牌塑造为目标。',
      result: '站点以轻量、清晰、可持续维护为原则完成交付，首屏加载控制在 1.5 秒内，并支持中英文切换。',
    },
    en: {
      title: 'Personal Brand & Lead-gen Site',
      caseType: 'Brand Website / Static Site',
      problem: 'A typical portfolio can show past work, but it rarely communicates personal positioning, professional judgment, and brand identity in a clear way.',
      role: 'Handled the full process independently, including information architecture, copy strategy, visual direction, frontend implementation, and bilingual support.',
      result: 'Delivered as a lightweight and maintainable personal brand site, with first-screen loading under 1.5 seconds and smooth bilingual presentation.',
    },
    tags: ['Next.js', 'Cloudflare Pages', 'i18n', 'UX'],
  },
  {
    id: '06',
    zh: {
      title: 'Web3 钱包前端',
      caseType: '区块链 / DApp 前端',
      problem: '链上操作本身就存在较高理解门槛，如果交互流程设计不够清晰，用户很容易在关键步骤中产生犹豫或误操作。',
      role: '负责 Ethers.js 集成、钱包交互流程梳理，以及关键链上操作步骤的前端体验优化。',
      result: '完成 ERC-20 资产管理相关能力支持后，核心操作路径更短、更清晰，主要交互步骤减少约 40%。',
    },
    en: {
      title: 'Web3 Wallet Frontend',
      caseType: 'Blockchain / DApp Frontend',
      problem: 'Blockchain actions already carry a high cognitive barrier, and unclear interaction flows make hesitation and user error even more likely.',
      role: 'Focused on Ethers.js integration, wallet interaction flow design, and the frontend simplification of critical on-chain actions.',
      result: 'With ERC-20 asset management fully supported, the core paths became shorter and clearer, reducing the main interaction steps by about 40%.',
    },
    tags: ['Web3', 'Ethers.js', 'MetaMask', 'ERC-20'],
  },
]

export const navItems = [
  { key: 'hero', zh: '首页', en: 'Home' },
  { key: 'cases', zh: '案例', en: 'Cases' },
  { key: 'contact', zh: '联系', en: 'Contact' },
]

export const homeI18n = {
  zh: {
    pageTitle: '代码民工 · 前端工程师 & 独立开发者',
    metaDesc:
      '代码民工，前端工程师，专注复杂中后台、配置平台与数据可视化，兼顾工程质量、业务理解与产品体验。',
    brand: '代码民工',
    badge: '前端工程师 · 上海 · 开放交流与合作',
    eyebrow: 'Frontend Engineer / Indie Developer',
    heroSubtitle: '把复杂业务做清楚，把产品体验做完整',
    heroSummary:
      '专注中后台系统、配置平台与数据可视化。我关心的不只是代码能跑，更关心结构是否稳定、交互是否顺手、产品是否真正可用。做过权限系统、低代码表单引擎、电商 SKU 配置工作台、实时运营大屏等复杂业务项目，习惯在业务复杂度、工程质量和产品完成度之间找到平衡。',
    ctaPrimary: '查看案例',
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
    trustItems: [
      { value: '6+', label: '复杂业务场景实践' },
      { value: '0-1', label: '支持完整交付过程' },
      { value: '工程 + 体验', label: '同时关注可维护性与完成度' },
      { value: '双语', label: '支持中英文协作沟通' },
    ],
    stackHeading: '我的能力边界',
    stackDescription:
      '围绕复杂前端系统展开，覆盖中后台工程、配置型产品、数据可视化与交付链路。我更在意这些能力能否在真实项目里形成稳定产出，而不只是停留在技术名词层面。',
    casesHeading: '做过什么，解决了什么',
    casesDescription:
      '这些不是简单的技术罗列，而是我参与过的真实业务场景。我更希望用问题、职责和结果来说明自己做了什么。',
    caseLabels: {
      problem: '业务背景',
      role: '我的职责',
      result: '结果',
    },
    itemCountSuffix: '项',
    casesContactLink: '如果你也在做这类项目，欢迎聊聊',
    contact: {
      eyebrow: '联系方式',
      title: '可以聊项目，也可以只是打个招呼',
      subtitle:
        '如果你正在做中后台系统、配置平台、数据可视化项目，或者只是想交流前端工程和产品实现上的问题，都欢迎联系我。',
      fitTitle: '我更感兴趣的项目类型',
      fitItems: ['后台系统 / 工作台', '数据可视化 / 大屏', '低代码 / 配置平台', '品牌官网 / 作品站'],
      workflowTitle: '通常的合作方式',
      workflowItems: ['先对齐背景、范围和目标', '按阶段推进，过程透明', '支持远程协作，文档和代码可完整交接'],
      emailCard: {
        title: '发邮件',
        description: '适合项目沟通、合作咨询，或者直接交流具体问题。',
        link: 'suijiafeng@hotmail.com',
      },
      githubCard: {
        title: '看看我的代码',
        description: '如果你想更快了解我的实现风格、技术兴趣和项目痕迹，可以先从 GitHub 开始。',
        link: 'github.com/suijiafeng',
      },
      emailMeta: '邮箱',
      githubMeta: 'GitHub',
      locationLabel: '位置',
      timezoneLabel: '时区',
      statusLabel: '当前状态',
      location: '上海，中国',
      timezone: 'UTC+8 (CST)',
      status: '开放交流与合作',
      responseTime: '通常在 24 小时内回复',
    },
    footerBrand: '© 2026 代码民工 · 复杂业务前端 / 产品体验导向',
    footerPlatform: 'Built with Next.js & Cloudflare Pages',
    terminal: {
      whoami: '代码民工 / suijiafeng',
      focus: 'Complex Frontend · Product-minded UI · Reliable Delivery',
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
            subtitle: '面向复杂业务场景构建稳定、可扩展的现代前端应用',
            level: '94%',
          },
          {
            name: 'Tailwind CSS',
            subtitle: '高效搭建一致的界面系统，兼顾开发效率与视觉完成度',
            level: '90%',
          },
          {
            name: 'TypeScript',
            subtitle: '用类型系统降低复杂项目中的认知成本和维护风险',
            level: '92%',
          },
          {
            name: 'ECharts/ReCharts',
            subtitle: '把复杂业务数据转化为可读、可交互、可决策的可视化界面',
            level: '86%',
          },
        ],
      },
      {
        title: '数据 & 部署',
        items: [
          { name: 'Node.js', subtitle: '支持服务端逻辑、构建流程和工程自动化', level: '88%' },
          {
            name: 'Prisma',
            subtitle: '用清晰的数据建模方式支撑复杂业务结构和后端协作',
            level: '82%',
          },
          {
            name: 'PostgreSQL',
            subtitle: '理解关系型数据设计与查询能力在业务系统中的重要性',
            level: '84%',
          },
          {
            name: 'Docker',
            subtitle: '让开发、测试和部署环境更稳定，减少交付过程中的环境偏差',
            level: '79%',
          },
          {
            name: 'Git / GitHub',
            subtitle: '以版本管理、协作流程和持续交付保证工程质量',
            level: '91%',
          },
        ],
      },
    ],
    sections: {
      stack: '能力',
      cases: '案例',
    },
  },
  en: {
    pageTitle: '代码民工 · Frontend Engineer & Indie Developer',
    metaDesc:
      '代码民工, a frontend engineer focused on complex admin systems, configuration platforms, and data visualization, with equal attention to engineering quality, business clarity, and product experience.',
    brand: '代码民工',
    badge: 'Frontend Engineer · Shanghai · Open to Collaboration',
    eyebrow: 'Frontend Engineer / Indie Developer',
    heroSubtitle: 'Making complex business systems clear and product experiences complete',
    heroSummary:
      'I focus on admin systems, configuration platforms, and data visualization. I care not only about whether the code works, but whether the structure is maintainable, the interactions feel right, and the product is truly usable. My work includes access control systems, low-code form builders, e-commerce SKU tools, and real-time dashboards, with a consistent focus on balancing business complexity, engineering quality, and product experience.',
    ctaPrimary: 'View Cases',
    ctaSecondary: 'Say Hi',
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
    trustItems: [
      { value: '6+', label: 'complex business scenarios' },
      { value: '0-1', label: 'full delivery involvement' },
      { value: 'Engineering + UX', label: 'maintainability with product polish' },
      { value: 'Bilingual', label: 'Chinese and English collaboration' },
    ],
    stackHeading: 'What I work across',
    stackDescription:
      'My work centers on complex frontend systems, covering admin engineering, configuration-heavy products, data visualization, and delivery workflows. What matters to me is not the number of tools, but whether they lead to reliable outcomes in real projects.',
    casesHeading: 'What I built and what it solved',
    casesDescription:
      'These are not just technology lists. They reflect real business contexts I worked in, explained through the problem, my role, and the outcome.',
    caseLabels: {
      problem: 'Context',
      role: 'My Role',
      result: 'Outcome',
    },
    itemCountSuffix: 'items',
    casesContactLink: 'If you are building something similar, let’s talk',
    contact: {
      eyebrow: 'Get In Touch',
      title: 'Happy to talk about projects or just say hello',
      subtitle:
        'If you are working on admin systems, configuration platforms, data dashboards, or simply want to exchange ideas about frontend engineering and product implementation, feel free to reach out.',
      fitTitle: 'Projects I am most interested in',
      fitItems: ['Admin systems / workbenches', 'Data visualization / dashboards', 'Low-code / config platforms', 'Brand websites'],
      workflowTitle: 'How I usually work',
      workflowItems: ['Align on context, scope, and goals first', 'Move in phases with clear progress', 'Remote-friendly with complete docs and code handoff'],
      emailCard: {
        title: 'Send an email',
        description: 'Best for project discussions, collaboration inquiries, or specific technical topics.',
        link: 'suijiafeng@hotmail.com',
      },
      githubCard: {
        title: 'See my code',
        description: 'If you want a quicker sense of how I build, think, and ship, GitHub is a good place to start.',
        link: 'github.com/suijiafeng',
      },
      emailMeta: 'Email',
      githubMeta: 'GitHub',
      locationLabel: 'Location',
      timezoneLabel: 'Timezone',
      statusLabel: 'Status',
      location: 'Shanghai, China',
      timezone: 'UTC+8 (CST)',
      status: 'Open to collaboration',
      responseTime: 'Usually replies within 24 hours',
    },
    footerBrand: '© 2026 代码民工 · Complex frontend systems, product-minded delivery',
    footerPlatform: 'Built with Next.js & Cloudflare Pages',
    terminal: {
      whoami: '代码民工 / suijiafeng',
      focus: 'Complex Frontend · Product-minded UI · Reliable Delivery',
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
            subtitle: 'Building stable and scalable modern frontend applications for complex product scenarios',
            level: '94%',
          },
          {
            name: 'Tailwind CSS',
            subtitle: 'Creating consistent UI systems with both speed and visual finish in mind',
            level: '90%',
          },
          {
            name: 'TypeScript',
            subtitle: 'Using types to reduce complexity and maintenance risk in larger projects',
            level: '92%',
          },
          {
            name: 'ECharts',
            subtitle: 'Turning operational data into interfaces that are readable, interactive, and decision-friendly',
            level: '86%',
          },
        ],
      },
      {
        title: 'Data & Delivery',
        items: [
          {
            name: 'Node.js',
            subtitle: 'Supporting server-side logic, build pipelines, and engineering automation',
            level: '88%',
          },
          {
            name: 'Prisma',
            subtitle: 'Working with clear data models to support complex business structures and backend collaboration',
            level: '82%',
          },
          {
            name: 'PostgreSQL',
            subtitle: 'Understanding how relational data design supports serious business systems',
            level: '84%',
          },
          {
            name: 'Docker',
            subtitle: 'Keeping development and deployment environments consistent across delivery stages',
            level: '79%',
          },
          {
            name: 'Git / GitHub',
            subtitle: 'Using version control, collaboration flow, and delivery discipline to protect engineering quality',
            level: '91%',
          },
        ],
      },
    ],
    sections: {
      stack: 'Capabilities',
      cases: 'Cases',
    },
  },
}
