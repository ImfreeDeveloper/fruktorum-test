<template lang="pug">
.quote
  .quote__mark
    img(src="/images/svg/icon-quotes.svg")
  .quote__text
    p «Медиахудожник работает с современным искусством. Слово „медиа“ появляется, потому что он работает в новых формах. Медиа как пространство, в котором может существовать произведение. Например, холст, покрытый красками, или превращённый в скульптуру камень — это старые медиа. Компьютер и игры на нём — новые медиа.
    span Ярослав Кравцов, #[br]основатель студии «Мастерская 15»

</template>

<style lang="scss">
  .quote {
    display: flex;
    margin-top: 4rem;
    @include sm-block() {
      margin-top: 2rem;
    }
    &__mark {
      flex-shrink: 0;
      margin-right: 3.6rem;
      opacity: 0.7;
      position: relative;
      top: 1rem;

      @include sm-block() {
        margin-right: 1.6rem;
        width: 5rem;
      }
    }
    &__text {
      p {
        display: block;
        font-style: italic;
        margin-bottom: 1.5rem;
      }
      span {
        display: block;
        font-size: 1.4rem;
        line-height: 2rem;
        color: $color-grey;

        @include sm-block() {
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
      }
    }
  }
</style>