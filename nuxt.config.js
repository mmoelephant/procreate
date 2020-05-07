module.exports = {
  mode: 'universal',
  head: {
    title: '云南省住房和城乡建设厅科学技术计划项目管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '云南省住房和城乡建设厅科学技术计划项目管理系统'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['element-ui/lib/theme-chalk/index.css', '@assets/main.css'],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/api',
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/vue-html-pdf.js', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {}
  }
}
