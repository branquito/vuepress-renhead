module.exports = {
  title: 'Things to consider regarding front-end usage',
  description: 'General tips on custom component`s usage',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Blog', link: '/blog/' }],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/section-A/', '/guide/section-B/', '/guide/section-C/']
      },
      {
        title: 'Docs',
        collapsable: true,
        children: [['/', 'Home']]
      }
    ]
  }
}
