<template lang="pug">
section.sec.image-block
  .container
    .row
      .image-block__wrap
        .image-block__img
          img(src="/images/img_2-r.png")
        p.image-block__label Опубликовано 20.08.2022,#[br]Unsplash
</template>

<style lang="scss">
  .image-block {
    &__wrap {
      @include col();
      @include size(12);
    }
    &__label {
      display: block;
      margin-top: 1rem;
      text-align: right;
      font-size: 1.4rem;
      line-height: 2rem;
      color: $color-grey;

      @include sm-block() {
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
</style>