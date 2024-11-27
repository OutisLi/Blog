module.exports = {
  title: 'Personal Blog --from Outis Li',
  base: "/Blog/",
  themeConfig: {
    logo: '/assets/img/good.png',
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Research',
        items: [
          {
            text: 'Geant4', link: '/Research/Research/2023-Geant4.md'
          },
          {
            text: 'CS', items: [{ text: 'Docker', link: '/Research/Research/2023.12.12-Docker.md' },
            { text: 'tbc', link: '/Chip/Chip/2.%202024.02.21-Chisel.md' }]
          },
          {
            text: 'tbc', items: [{ text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' },
            { text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' }]
          },
        ]
      },
      {
        text: 'LeetCode',
        items: [{
          text: 'Basic', items: [{ text: 'BFS', link: '/LeetCode/Leetcode/2024.02.22-BFS.md' },
          { text: '二叉树', link: '/LeetCode/Leetcode/2024.03.05-二叉树.md' },
          { text: '二分搜索', link: '/LeetCode/Leetcode/2024.03.11-二分搜索.md' },
          { text: '滑动窗口', link: '/LeetCode/Leetcode/2024.03.18-滑动窗口.md' }]
        },
        {
          text: 'tbc', items: [{ text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' },
          { text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' }]
        },
        ]
      },
      {
        text: 'Chip',
        items: [
          {
            text: '一生一芯', items: [{ text: '预学习', link: '/Chip/Chip/1.%20一生一芯计划.md' },
            { text: 'B阶段', link: '/Chip/Chip/1.%20一生一芯计划.md' },
            { text: 'A阶段', link: '/Chip/Chip/1.%20一生一芯计划.md' }]
          },
          {
            text: 'Chisel', items: [{ text: 'Outline', link: '/Chip/Chip/2.%202024.02.21-Chisel.md' },
            { text: 'Bootcamp', link: '/Chip/Chip/2024.02.21-Chisel/2024.02.21-ChiselBoot.md' }]
          },
          {
            text: 'Verilog', items: [{ text: 'Outline', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' },
            { text: 'Basic', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' }]
          },
        ]
      },
      {
        text: 'Others',
        items: [
          {
            text: 'tbc', items: [{ text: 'tbc', link: '/Chip/Chip/1.%20一生一芯计划.md' },
            { text: 'tbc', link: '/Chip/Chip/1.%20一生一芯计划.md' },
            { text: 'tbc', link: '/Chip/Chip/1.%20一生一芯计划.md' }]
          },
          {
            text: 'tbc', items: [{ text: 'tbc', link: '/Chip/Chip/2024.02.21-Chisel/2024.02.21-ChiselBoot.md' },
            { text: 'tbc', link: '/Chip/Chip/2.%202024.02.21-Chisel.md' }]
          },
          {
            text: 'tbc', items: [{ text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' },
            { text: 'tbc', link: '/Chip/Chip/3.%202023.11.07-Verilog语法.md' }]
          },
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    displayAllHeaders: false,
    activeHeaderLinks: true,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
      },
      sidebarDepth: 2,
    },
    'vuepress-plugin-mathjax': {},
    'plugin-copy-code': {}
  },
}