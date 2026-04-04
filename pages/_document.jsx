import { Head, Html, Main, NextScript } from 'next/document'

const bootstrapScript = `
  (function () {
    try {
      var root = document.documentElement;
      var savedTheme = localStorage.getItem('theme');
      var savedLang = localStorage.getItem('lang');
      var theme = savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

      root.dataset.theme = theme;

      if (savedLang === 'zh' || savedLang === 'en') {
        root.lang = savedLang;
      }
    } catch (error) {}
  })();
`

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
