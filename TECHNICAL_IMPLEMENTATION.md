# MyCompany 网站 - 技术实施方案

> 将产品设计转化为技术架构和代码实施计划

---

## 📐 系统架构图

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend Layer                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Next.js Pages & Components                           │ │
│  ├──────────────────────────────────────────────────────┤ │
│  │ • Home (首页展示)         • Article (文章阅读)      │ │
│  │ • ProductHub (产品展示)   • PersonalCenter (用户中心)│ │
│  │ • NewsBoard (热度排行)    • Search (搜索)           │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────┬────────────────────────────────────────┘
                     │ NextAuth.js / API Routes
┌────────────────────▼────────────────────────────────────────┐
│                      API Layer (Next.js)                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ • /api/auth/*           (认证)                        │ │
│  │ • /api/articles/*       (文章CRUD)                    │ │
│  │ • /api/comments/*       (评论系统)                    │ │
│  │ • /api/users/*          (用户数据)                    │ │
│  │ • /api/analytics/*      (数据上报)                    │ │
│  │ • /api/email/*          (邮件相关)                    │ │
│  │ • /api/recommendations* (推荐算法)                    │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/WebSocket
┌────────────────────▼────────────────────────────────────────┐
│                   Backend Services                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐   │
│  │  Supabase   │  │   Resend     │  │   PostHog      │   │
│  │  (DB+Auth)  │  │  (Email API) │  │  (Analytics)   │   │
│  └─────────────┘  └──────────────┘  └────────────────┘   │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐   │
│  │  Stripe      │  │  Algolia     │  │  OpenAI/LLM    │   │
│  │  (Payment)   │  │  (Search)    │  │  (AI Features) │   │
│  └──────────────┘  └──────────────┘  └────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗂️ 项目文件结构升级

### 当前结构 → 建议结构演进

```
当前状态:
my-official-website/
├── pages/
├── components/
├── content/articles/
├── public/
├── styles/
└── package.json

↓

升级后:
my-official-website/
├── pages/
│   ├── _app.jsx
│   ├── index.jsx (首页改版)
│   ├── article/[slug].jsx (文章详页)
│   ├── auth/
│   │   ├── login.jsx
│   │   └── callback.jsx
│   ├── user/
│   │   └── [id]/index.jsx (个人中心)
│   ├── search.jsx (搜索结果页)
│   ├── trending.jsx (热门排行)
│   └── api/
│       ├── auth/[...nextauth].js
│       ├── articles.js
│       ├── comments.js
│       ├── users.js
│       ├── analytics.js
│       ├── email.js
│       └── recommendations.js
│
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── SEO.jsx
│   ├── article/
│   │   ├── ArticleCard.jsx
│   │   ├── ArticleHeader.jsx
│   │   ├── CommentSection.jsx
│   │   └── RelatedArticles.jsx
│   ├── user/
│   │   ├── UserProfile.jsx
│   │   ├── SavedArticles.jsx
│   │   └── Preferences.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedArticles.jsx
│   │   ├── TrendingBoard.jsx
│   │   └── Newsletter.jsx
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   └── Loader.jsx
│   └── tracking/
│       └── EventTracker.jsx
│
├── lib/
│   ├── supabase.js (DB客户端)
│   ├── auth.js (认证逻辑)
│   ├── analytics.js (埋点)
│   ├── recommend.js (推荐算法)
│   ├── email.js (邮件模板)
│   └── utils.js
│
├── hooks/
│   ├── useAuth.js
│   ├── useArticles.js
│   ├── useUser.js
│   └── useAnalytics.js
│
├── content/
│   ├── articles/ (Markdown - 逐步迁移到DB)
│   └── config.js (内容配置)
│
├── public/
├── styles/
├── docs/
│   ├── PRODUCT_DESIGN.md
│   ├── API_REFERENCE.md
│   ├── DATABASE_SCHEMA.md
│   └── DEPLOYMENT.md
│
├── .env.local (环境变量)
├── jsconfig.json
├── next.config.js
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🗄️ 数据库设计 (Supabase PostgreSQL)

### 表结构设计

```sql
-- 1. Users (用户表)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  email_verified_at TIMESTAMP,
  provider VARCHAR(50), -- 'google', 'github', etc
  provider_id VARCHAR(255),
  subscribed_to_newsletter BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Articles (文章表)
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  content_html TEXT,
  author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'published', -- 'draft', 'published', 'archived'
  featured BOOLEAN DEFAULT FALSE,
  featured_image_url TEXT,
  category VARCHAR(100),
  tags TEXT[], -- Array of tags
  view_count INT DEFAULT 0,
  like_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  share_count INT DEFAULT 0,
  reading_time INT, -- Estimated reading time in minutes
  seo_description TEXT,
  seo_keywords TEXT[],
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

-- 3. Comments (评论表)
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id UUID, -- For nested replies
  content TEXT NOT NULL,
  like_count INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'approved', -- 'pending', 'approved', 'spam'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

-- 4. Likes (点赞表)
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, article_id)
);

-- 5. Saves (收藏表)
CREATE TABLE saves (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, article_id)
);

-- 6. Analytics Events (分析事件表)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name VARCHAR(100) NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  article_id UUID REFERENCES articles(id) ON DELETE SET NULL,
  properties JSONB, -- 灵活存储事件属性
  session_id VARCHAR(255),
  ip_address VARCHAR(50),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_event_name (event_name),
  INDEX idx_user_id (user_id),
  INDEX idx_created_at (created_at)
);

-- 7. Newsletter Subscriptions (邮件订阅)
CREATE TABLE newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_email_sent_at TIMESTAMP,
  unsubscribe_token VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Trending Score (热度计算 - 物化视图)
CREATE TABLE trending_scores (
  article_id UUID PRIMARY KEY REFERENCES articles(id) ON DELETE CASCADE,
  score FLOAT,
  rank INT,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX idx_articles_author_id ON articles(author_id);
CREATE INDEX idx_comments_article_id ON comments(article_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
```

---

## 🔑 关键API端点设计

### Authentication APIs
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/google (OAuth)
POST /api/auth/github (OAuth)
GET /api/auth/session
POST /api/auth/refresh-token
```

### Articles APIs
```
GET /api/articles                    # 获取文章列表(分页、过滤、排序)
POST /api/articles                   # 创建文章(需认证)
GET /api/articles/[id]               # 获取文章详情
PUT /api/articles/[id]               # 更新文章(作者权限)
DELETE /api/articles/[id]            # 删除文章(作者权限)
GET /api/articles/trending           # 获取热门文章
GET /api/articles/search?q=keyword   # 搜索文章
GET /api/articles/[id]/related       # 获取相关文章推荐
```

### Comments APIs
```
GET /api/articles/[id]/comments      # 获取文章评论
POST /api/articles/[id]/comments     # 发布评论(需认证)
PUT /api/comments/[id]               # 编辑评论
DELETE /api/comments/[id]            # 删除评论
POST /api/comments/[id]/like         # 为评论点赞
```

### User APIs
```
GET /api/users/me                    # 获取当前用户信息
PUT /api/users/me                    # 更新用户信息
GET /api/users/[id]                  # 获取用户公开信息
GET /api/users/me/saved-articles    # 获取用户收藏
GET /api/users/me/reading-history    # 获取阅读历史
POST /api/users/[id]/follow          # 关注用户
```

### Analytics APIs
```
POST /api/analytics/track            # 上报事件
GET /api/analytics/page-views        # 获取浏览量统计
GET /api/analytics/user-behavior     # 获取用户行为数据
GET /api/analytics/funnel            # 获取转化漏斗数据
```

### Newsletter APIs
```
POST /api/email/subscribe            # 订阅邮件
POST /api/email/unsubscribe          # 取消订阅
GET /api/email/preferences           # 获取邮件偏好
PUT /api/email/preferences           # 更新邮件偏好
```

---

## 🚀 开发优先级与时间线

### Phase 1: 地基建设 (第1-2周)

**任务1: 数据库与认证**
- [ ] Supabase项目创建
- [ ] 数据表设计和创建
- [ ] NextAuth.js配置
- [ ] Google/GitHub OAuth集成
- [ ] RLS(行级安全)配置

**任务2: 基础API**
- [ ] /api/auth/* 认证接口
- [ ] /api/articles/* 文章CRUD接口
- [ ] /api/users/me 用户信息接口
- [ ] 错误处理和日志

**任务3: 邮件集成**
- [ ] Resend账户创建
- [ ] 邮件模板设计
- [ ] /api/email/subscribe 订阅接口
- [ ] 测试邮件发送

### Phase 2: 核心功能 (第3-4周)

**任务4: 用户界面**
- [ ] 登录页面
- [ ] 个人中心页面
- [ ] 文章编辑页面
- [ ] 用户偏好设置

**任务5: 社交功能**
- [ ] 评论系统实现
- [ ] 点赞功能
- [ ] 收藏功能
- [ ] 评论组件UI

**任务6: 埋点追踪**
- [ ] PostHog集成
- [ ] 关键事件定义
- [ ] 分析组件创建
- [ ] 数据上报

### Phase 3: 优化与完善 (第5-6周)

**任务7: 搜索与推荐**
- [ ] Algolia集成(或ElasticSearch)
- [ ] 全文搜索功能
- [ ] 热度计算算法
- [ ] 推荐算法实现

**任务8: 性能优化**
- [ ] 缓存策略(Redis)
- [ ] 数据库查询优化
- [ ] 前端懒加载
- [ ] CDN配置

**任务9: 监控与文档**
- [ ] Sentry错误追踪
- [ ] API文档(Swagger)
- [ ] 部署文档
- [ ] 运维指南

---

## 💻 核心代码示例

### 1. NextAuth.js 配置

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile, provider }) {
      // 将用户信息保存到Supabase
      const { data, error } = await supabase
        .from('users')
        .upsert([{
          email: user.email,
          username: user.name,
          avatar_url: user.image,
          provider,
          provider_id: profile.id,
        }], { onConflict: 'email' })

      return !!data && !error
    },
    async session({ session, token }) {
      // 在session中添加用户ID
      session.user.id = token.sub
      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
}

export default NextAuth(authOptions)
```

### 2. 文章API端点示例

```javascript
// pages/api/articles/index.js
import { createClient } from '@supabase/supabase-js'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 获取文章列表
      const { page = 1, limit = 10, category, sort = 'newest' } = req.query

      let query = supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')

      if (category) {
        query = query.eq('category', category)
      }

      // 排序
      if (sort === 'trending') {
        query = query.order('view_count', { ascending: false })
      } else if (sort === 'popular') {
        query = query.order('like_count', { ascending: false })
      } else {
        query = query.order('published_at', { ascending: false })
      }

      const start = (page - 1) * limit
      query = query.range(start, start + limit - 1)

      const { data, error } = await query

      if (error) throw error

      res.status(200).json({ success: true, data })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  } else if (req.method === 'POST') {
    try {
      // 创建文章(需认证)
      const session = await getServerSession(req, res, authOptions)
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' })
      }

      const { title, content, category, tags } = req.body

      // 生成slug
      const slug = title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')

      const { data, error } = await supabase
        .from('articles')
        .insert([{
          slug,
          title,
          content,
          author_id: session.user.id,
          category,
          tags: tags || [],
          status: 'draft',
        }])
        .select()

      if (error) throw error

      res.status(201).json({ success: true, data: data[0] })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }
}
```

### 3. 评论系统组件

```jsx
// components/article/CommentSection.jsx
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export default function CommentSection({ articleId }) {
  const { data: session } = useSession()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [articleId])

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/articles/${articleId}/comments`)
      const data = await res.json()
      setComments(data.data || [])
    } catch (error) {
      console.error('Failed to fetch comments:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!session) {
      // 提示用户登录
      alert('请先登录')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      })

      if (res.ok) {
        setNewComment('')
        await fetchComments()
      }
    } catch (error) {
      console.error('Failed to post comment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">评论 ({comments.length})</h3>

      {session ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="分享你的想法..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
          />
          <button
            type="submit"
            disabled={loading || !newComment.trim()}
            className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? '发布中...' : '发布评论'}
          </button>
        </form>
      ) : (
        <p className="mb-8 text-gray-600">
          <a href="/api/auth/signin" className="text-indigo-600 hover:underline">
            登录
          </a>
          后发表评论
        </p>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-4 border-gray-200 pl-4 py-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{comment.user.username}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mt-2">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## 🔐 安全性检查清单

- [ ] 环境变量保护 (.env.local不上传)
- [ ] CORS配置
- [ ] 认证令牌安全(HTTPOnly cookies)
- [ ] SQL注入防护(使用参数化查询)
- [ ] XSS防护(输入验证和清理)
- [ ] CSRF保护
- [ ] 速率限制(API防止滥用)
- [ ] 数据验证(前后端双重验证)

---

## 📊 环境变量配置

```bash
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# OAuth Providers
GOOGLE_CLIENT_ID=xxxxx
GOOGLE_CLIENT_SECRET=xxxxx
GITHUB_ID=xxxxx
GITHUB_SECRET=xxxxx

# Email (Resend)
RESEND_API_KEY=xxxxx

# Analytics (PostHog)
NEXT_PUBLIC_POSTHOG_KEY=xxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Search (Algolia - 可选)
NEXT_PUBLIC_ALGOLIA_APP_ID=xxxxx
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=xxxxx
```

---

## ✅ 部署检查清表

### 预发布检查
- [ ] 所有环境变量配置
- [ ] 数据库备份
- [ ] 邮件模板测试
- [ ] OAuth配置验证
- [ ] CDN加速配置
- [ ] SSL证书
- [ ] 域名DNS配置

### 发布后监控
- [ ] 实时日志监控
- [ ] 错误率监控
- [ ] API响应时间
- [ ] 用户反馈通道
- [ ] 回滚方案准备

---

**下一步行动:**
1. 根据这个技术实施方案制定详细的sprint计划
2. 准备Supabase项目和所有第三方服务账户
3. 开始第一阶段的基础建设(认证 + 数据库 + API)

