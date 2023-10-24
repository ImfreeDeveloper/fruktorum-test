// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '@/scss/main.scss'
  ],
  // vite: {
  //     css: {
  //         preprocessorOptions: {
  //             scss: {
  //                 additionalData: `
  //                   @import "@/scss/_var.scss";
  //                   @import "@/scss/_color.scss";
  //                 `
  //             }
  //         }
  //     }
  // }
})
