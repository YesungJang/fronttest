// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'AI職務経歴自動生成（β版）｜株式会社キャリアデザインセンター',
      link: [{ rel: 'icon', type: 'image/png', href: 'https://cdc.type.jp/favicon.ico' }],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },

  srcDir: 'src',
  ssr: false,
  compatibilityDate: '2024-09-02',
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/style.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
});
