// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/sass/main.sass'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})