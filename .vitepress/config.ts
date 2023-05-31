import { defineConfig } from 'vitepress'
import { sidebar } from './router'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "home",
  description: "record",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Page', link: '/markdown-examples' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdatedText: 'Last Updated'
  },
  lastUpdated: true,
})
