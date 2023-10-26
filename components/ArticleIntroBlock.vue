<template lang="pug">
section.article-intro-block
  .container
    .row
      .article-intro-block__wrap
        .article-intro-block__img
          img(src="/images/img_1-r.png")
        .article-intro-block__info
          h2.article-intro-block__title Мир динамичного 3D Цифрового Искусства
          .article-intro-block__review
            ul
              li
                img(src="/images/svg/icon-time.svg")
                | 13 мин время чтения
              li
                img(src="/images/svg/icon-eye.svg")
                | 360 прочитали статью
          .article-intro-block__text
            p Впечатляющий путь, где художническая креативность сливается с передовыми технологиями. Это искусство способно преобразить наше восприятие о том, что возможно в виртуальных мирах; как границы возможностей расширяются, и как велика сила человеческой фантазии, воплощенной в трехмерные шедевры
</template>

<script setup>

</script>

<style lang="scss">
  .article-intro-block {
    padding-bottom: 5rem;
    &__wrap {
      @include col();
      @include size(12);

      display: flex;
      justify-content: space-between;

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
      }

      @include sm-block() {
        margin-bottom: 1.5rem;
      }
    }

    &__img {
      flex-shrink: 0;
      width: 54.1rem;
      margin-right: 3rem;

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

    &__info {
      padding-top: 8.5rem;

      @media (max-width: 1250px) {
        padding-top: 0;
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