module.exports = {
  base: "/Blog/",
  title: 'Hello World --from OutisLi',
  themeConfig: {
    logo: '/assets/img/good.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'LeetCode',
        items: [
          {
            text: '二叉树', items: [{ text: 'Installation', link: '/language/chinese/' },
            { text: 'xxx', link: '/language/japanese/' }]
          },
          {
            text: '滑动窗口', items: [{ text: 'Installation', link: '/language/chinese/' },
            { text: 'xxx', link: '/language/japanese/' }]
          },
        ]
      },
      {
        text: 'Chip',
        items: [
          {
            text: '一生一芯', items: [{ text: '预学习', link: '/Chip/Chip/一生一芯计划.md' },
            { text: 'B阶段', link: '/language/japanese/' },
            { text: 'A阶段', link: '/language/japanese/' }]
          },
          {
            text: 'Chisel', items: [{ text: 'Bootcamp', link: '/Chip/Chip/2024.02.21-Chisel.md' },
            { text: 'xxx', link: '/language/japanese/' }]
          },
          {
            text: 'Verilog', items: [{ text: 'Basic', link: '/Chip/Chip/2023.11.07-Verilog语法.md' },
            { text: 'xxx', link: '/language/japanese/' }]
          },
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebarDepth: 2,
    displayAllHeaders: false,
    activeHeaderLinks: true,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
}