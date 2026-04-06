# 个人品牌站

一个面向客户获取的个人品牌主页，展示项目案例、技术栈与联系方式，支持中英双语切换。

## 技术栈

- **框架**：Next.js 14（静态导出模式）
- **样式**：Tailwind CSS + CSS Variables
- **动效**：Framer Motion
- **语言**：React 18 + JavaScript

## 功能特性

- 中英双语（`zh` / `en`）切换，语言偏好持久化至 `localStorage`
- 暗色 / 亮色主题切换，读取系统偏好并支持手动覆盖
- 平滑滚动导航，滚动时自动高亮当前区块
- 项目案例、技术栈技能条、联系区块
- 全站静态导出，可直接部署至任意静态托管平台

## 本地开发

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 构建与导出

```bash
# 构建静态文件（输出至 dist/）
yarn build
```

构建产物位于 `dist/` 目录，可直接部署。

## 项目结构

```
├── pages/
│   ├── index.jsx        # 主页（单页应用）
│   ├── _app.jsx         # 全局 App 配置
│   └── _document.jsx    # 自定义 Document
├── data/
│   └── homeI18n.js      # 中英文案、项目数据、技术栈数据
├── styles/
│   └── globals.css      # 全局样式与 CSS 变量
├── public/              # 静态资源
└── next.config.js       # Next.js 配置（静态导出）
```

## 内容维护

所有页面文案、项目案例、技术栈数据均集中维护在 [data/homeI18n.js](data/homeI18n.js)，修改后重新构建即可生效。

## 部署

构建后将 `dist/` 目录上传至任意静态托管平台（Vercel、Netlify、GitHub Pages、Cloudflare Pages 等）。

若部署在非根路径下，在 `next.config.js` 中取消 `basePath` 注释并填写对应路径。
