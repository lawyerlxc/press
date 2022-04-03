module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Lucas',
  description: '这是我的一个个人 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'study',
        link: '/study/',
      }
    ],
    sidebar: {
      '/study/': [
        {
          text: '记录',
          children: [
            '/study/README.md', 
            '/study/SVG.md',
            '/study/算法视频笔记.md', 
            '/study/bashrc.md', 
          ]
        },
      ],
      '/': [
        ''
      ]
    }
  },
}