<template lang="pug">
section.sec.article_list_block
  .container
    .row
      h2 Похожие статьи
  .container
    .row
      .article_list_block__item
        .article_list_block__item-img(style="background-image: url('/images/img_4.jpg')")
        p.article_list_block__item-text Эволюция эстетики: современные тенденции в искусстве и дизайне
        Button(type="black" text="Читать").article_list_block__item-button
      .article_list_block__item
        .article_list_block__item-img(style="background-image: url('/images/img_5.jpg')")
        p.article_list_block__item-text Эстетика функциональности: современное искусство пром...
        Button(type="black" text="Читать").article_list_block__item-button
      .article_list_block__item
        .article_list_block__item-img(style="background-image: url('/images/img_6.jpg')")
        p.article_list_block__item-text Отражение личности: как дизайн выражает индивидуальность
        Button(type="black" text="Читать").article_list_block__item-button

</template>

<style lang="scss">
  .article_list_block {
    h2 {
      @include col();
      @include size(12);
    }
    &__item {
      @include col();
      @include size(4);
      @include size-sm(6);
      @include size-xs(12);

      @include sm-block() {
        margin-bottom: 3rem;
      }

      &-img {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        padding-top: 75%;
        width: 100%;
        margin-bottom: 2rem;
      }

      &-text {
        display: block;
        margin-bottom: 3rem;
        font-size: 2.2rem;
        font-weight: $extrabold;
        line-height: 3rem;

        @include md-block() {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }

        @include sm-block() {
          margin-bottom: 2rem;
        }
      }

      &-button {
        @include xs-block() {
          width: 100%;
        }
      }
    }
  }
</style>