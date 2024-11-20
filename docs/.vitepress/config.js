// .vitepress/config.js
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    nav: [
      {text: 'Home',link: '/'},
      {text: 'Github',link: 'https://github.com/liu464847593/pnpm-workspace-demo.git'},
    ],
    sidebar: [
      {text: 'select',link: '/componentDocs/select.md'}
    ]
  },
}
