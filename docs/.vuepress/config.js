const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

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
        text: 'about',
        link: '/about/',
      },
      {
        text: '算法',
        link: '/LeetCode/A',
      },
    ],
    sidebar: {
      // '/blog/css/': utils.genSidebar('css', filehelper.getFileName(rootpath+"/blog/css/"), false),
      // '/blog/javascript/': utils.genSidebar('页面js相关', filehelper.getFileName(rootpath+"/blog/javascript/"), false),
      // '/blog/html/': utils.genSidebar('页面html相关', filehelper.getFileName(rootpath+"/blog/html/"), false),
      // '/blog/plugins/': utils.genSidebar('插件', filehelper.getFileName(rootpath+"/blog/plugins/"), false),
      // '/blog/ui/': utils.genSidebar('组件', filehelper.getFileName(rootpath+"/blog/ui/"), false),
      '/about/': utils.genSidebar('关于', filehelper.getFileName(rootpath+"/about/"), false),
      '/LeetCode/': utils.genSidebar('算法', filehelper.getFileName(rootpath+"/LeetCode/"), false),
    }, // 侧边栏配置
  },
}