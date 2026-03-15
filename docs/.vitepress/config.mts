import { defineConfig } from 'vitepress'
import markdownItPlantuml from 'markdown-it-plantuml'

export default defineConfig({
  title: '鼠鼠屋 🐭',
  description: '一些简单的东西',
  base: '/',
  lang: 'zh-CN',
  head: [],
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/Shimada666' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItPlantuml)
    }
  }
})
