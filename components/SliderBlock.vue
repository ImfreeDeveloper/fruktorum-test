<template lang="pug">
section.sec.slider-block
  .container
    .row
      .slider-block__wrap
        carousel(v-model="currentSlide")
          slide(v-for="slide in dataSlides" :key="slide.id")
            .slider-block__item(:style="`background-image: url(${slide.url})`")
          template(#addons)
            Navigation
        div.slider-block__count
          p {{ currentSlide + 1 }} / {{ dataSlides.length }}
</template>

<script setup>
  import { ref } from 'vue'

  const currentSlide = ref(0)
  const dataSlides = ref([
    {
      id: 0,
      url: '/images/2.jpg'
    },
    {
      id: 1,
      url: '/images/1.jpg'
    },
    {
      id: 2,
      url: '/images/3.jpg'
    },
    {
      id: 3,
      url: '/images/4.jpg'
    },
    {
      id: 4,
      url: '/images/5.jpg'
    },
    {
      id: 5,
      url: '/images/6.jpg'
    },
    {
      id: 6,
      url: '/images/7.jpg'
    }
  ])


</script>

<style lang="scss">
  .slider-block {
    &__wrap {
      @include col();
      @include size(12);

      .carousel__track {
        margin: 0;
      }

      .carousel__prev, .carousel__next {
        width: 6rem;
        height: 6rem;
        background-color: $color-text;
        border-radius: .2rem;
        color: $color-white-light;

        @include md-block() {
          width: 4rem;
          height: 4rem;
        }

        @include sm-block() {
          margin: 0;
        }
      }
    }
    &__item {
      width: 111rem;
      padding-top: 41%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      @include sm-block() {
        width: 100%;
        padding-top: 50%;
      }
    }
    &__count {
      margin-top: 2.5rem;
      text-align: center;

      @include sm-block() {
        margin-top: 1.5rem;
      }
    }
  }
</style>