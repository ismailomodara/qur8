export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Qur8',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Qur8' },
      { name: 'theme-color', content: '#00916E' },
      { name: 'Qur8', content: 'True' },
      { property: 'og:site_name', content: 'Qur8' },
      { hid: 'description', name: 'description', content:
          "Discover inspiring and essential lessons from the lives of some of the greatest historic figures, known as the Sahaba (The Companions of the Prophet). Keep up with their origin stories, key events, and accomplishments of these timeless heroes who fostered some of the most influential and prosperous civilizations.",
      },
      { hid: 'keywords', name: 'keywords', content: 'Islamic stories, sahaba, companions of the prophet, inspiring stories, origin stories of the sahaba',},
      { hid: 'og:url', property: 'og:url', content: "https://www.qur8.com"
      },
      { hid: 'og:title', property: 'og:title', content: "Qur8" },
      { hid: 'og:description', property: 'og:description', content: "Discover inspiring and essential lessons from the lives of some of the greatest historic figures, known as the Sahaba (The Companions of the Prophet). Keep up with their origin stories, key events, and accomplishments of these timeless heroes who fostered some of the most influential and prosperous civilizations."},
      { hid: 'og:image', property: 'og:image', content: "https://qur8.com/qur8card.png" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Qur8" },
      { hid: 'twitter:description', name: 'twitter:description', content: "Discover inspiring and essential lessons from the lives of some of the greatest historic figures, known as the Sahaba (The Companions of the Prophet). Keep up with their origin stories, key events, and accomplishments of these timeless heroes who fostered some of the most influential and prosperous civilizations." },
      { hid: 'twitter:image', name: 'twitter:image', content: "https://qur8.com/qur8card.png" },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: "https://qur8.com/qur8card.png"},
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', "@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', { src: '@/plugins/vuepdf', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
