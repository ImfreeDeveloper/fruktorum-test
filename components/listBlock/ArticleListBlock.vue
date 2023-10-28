<template lang="pug">
section.sec.article_list_block
  .container
    .row
      h2 {{ dataBlock.title }}
  .container
    .row
      .article_list_block__item(v-for="article of dataBlock.articles")
        .article_list_block__item-img(:style="`background-image: url(${article.image})`")
        p.article_list_block__item-text {{ article.title }}
        Button(type="black" text="Читать" @click="goToLink(article.link)").article_list_block__item-button

</template>

<script setup>

const props = defineProps({
  dataBlock: {
    type: Object,
    required: true,
  },
})

const goToLink = (link) => {
  console.log(link)
}

</script>

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
        background-size: cover;
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