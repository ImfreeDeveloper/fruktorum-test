import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component( 'Carousel', Carousel)
    nuxtApp.vueApp.component( 'Slide', Slide)
    nuxtApp.vueApp.component( 'Navigation', Navigation)
})