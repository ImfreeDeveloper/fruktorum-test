<template lang="pug">
section.sec.slider-block
  .container
    .row
      .slider-block__wrap
        carousel(v-model="currentSlide")
          slide(v-for="(slide, idx) in dataBlock" :key="idx")
            .slider-block__item(:style="`background-image: url(${slide})`")
          template(#addons)
            Navigation
        div.slider-block__count
          p {{ currentSlide + 1 }} / {{ dataBlock.length }}
</template>

<script setup>
  import { ref } from 'vue'

  const currentSlide = ref(0)

  const props = defineProps({
    dataBlock: {
      type: Object,
      required: true,
    },
  })

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
        margin: 0;

        @include md-block() {
          width: 4rem;
          height: 4rem;
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