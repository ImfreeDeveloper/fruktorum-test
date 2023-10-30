<template lang="pug">
section.sec.image-block
  .container
    .row
      .image-block__wrap
        .image-block__img
          .image-block__img-wrap
            img(:src="dataBlock.src")
            p.image-block__label {{ dataBlock.caption }}
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
    &__img {
      display: flex;
      justify-content: center;

      img {
        border-radius: 2px 220px 2px 2px;
        display: block;

        @include sm-block() {
          border-radius: 2px 110px 2px 2px;
        }

        @include xs-block() {
          border-radius: 2px 80px 2px 2px;
        }
      }
    }
  }
</style>