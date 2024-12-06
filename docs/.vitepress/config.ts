import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'

const base = '/expand-element/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "expand-element",
  description: "expand-element",
  base,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  sitemap: {
    hostname: 'https://fxss5201.github.io',
    transformItems: (items) => {
      return items.map(item => {
        return {
          ...item,
          url: base + item.url
        }
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '方法', link: '/api/globals' }
    ],

    sidebar: [
      {
        text: 'API',
        items: typedocSidebar,
      },
    ],

    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '最后更新于',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fxss5201/expand-element' },
    ],
    
    footer: {
      message: 'Released under the <a href="https://github.com/fxss5201/expand-element/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fxss5201">fxss5201</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      },
    }
  }
})
