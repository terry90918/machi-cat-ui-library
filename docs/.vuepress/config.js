module.exports = {
  title: 'Machi cat ui library',
  description: 'A Vue.js UI library for web',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
          ],
        },
      ],
    },
  },
}
