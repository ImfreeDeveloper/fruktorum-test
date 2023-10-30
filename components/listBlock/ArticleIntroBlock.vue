<template lang="pug">
section.sec.article-intro-block
  .container
    .row
      .article-intro-block__wrap
        .article-intro-block__img
          img(:src="dataBlock.image")
        .article-intro-block__info
          h2.article-intro-block__title {{ dataBlock.title }}
          .article-intro-block__review
            ul
              li
                img(src="/images/svg/icon-time.svg")
                | {{ dataBlock.reading_time }} время чтения
              li
                img(src="/images/svg/icon-eye.svg")
                | {{ dataBlock.views_count }} прочитали статью
          .article-intro-block__text
            p {{ dataBlock.short_description }}
</template>

<script setup>
const props = defineProps({
  dataBlock: {
    type: Object,
    required: true,
  },
})

</script>

<style lang="scss">
  .article-intro-block {

    &__wrap {
      @include col();
      @include size(12);

      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1250px) {
        align-items: center;
      }

      @include sm-block() {
        flex-direction: column;
      }
    }

    &__title {
      display: block;
      font-size: 5.6rem;
      font-weight: $extrabold;
      line-height: 6.6rem;
      margin-bottom: 3rem;
      
      @media (max-width: 1250px) {
        font-size: 5.1rem;
        line-height: 6.1rem;
      }

      @include md-block() {
        font-size: 3.6rem;
        line-height: 4.6rem;
        margin-bottom: 2rem;
      }

      @include sm-block() {
        font-size: 2.4rem;
        line-height: 3rem;
        margin-bottom: 1.5rem;
      }
    }

    &__img {
      flex-shrink: 0;
      width: 54.1rem;
      margin-right: 3rem;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      img {
        border-radius: 2px 40% 2px 2px;
      }

      @media (max-width: 1250px) {
        width: 50.1rem;
      }

      @include md-block() {
        width: 38.1rem;
      }

      @include sm-block() {
        margin-right: 0;
        margin-bottom: 1.5rem;
      }

      @include xs-block() {
        max-width: 38rem;
        width: 100%;
      }
    }

    &__review {
      margin-bottom: 5rem;

      @media (max-width: 1250px) {
        margin-bottom: 3rem;
      }

      @include md-block() {
        margin-bottom: 2rem;
      }

      @include sm-block() {
        margin-bottom: 1.5rem;
      }

      ul {
        li {
          font-size: 1.4rem;
          line-height: 2rem;
          color: $color-grey;
          padding-left: 2.2rem;
          position: relative;
          margin-bottom: .4rem;

          @include sm-block() {
            font-size: 1.2rem;
            line-height: 1.3;
          }

          img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            opacity: .6;
          }
        }
      }
    }
  }
</style>