export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '@/scss/main.scss'
  ],
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `
                    @import "@/scss/abstracts/_variables.scss";
                    @import "@/scss/base/_grid.scss";
                  `
              }
          }
      }
  },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore'],
            },
        ],
    ],
    imports: {
        dirs: ['stores'],
    },
})
