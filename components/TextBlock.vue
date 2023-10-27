<template lang="pug">
section.sec.text-block
  .container
    .row
      .text-block__wrap
        slot

</template>

<style lang="scss">
  .text-block {
    .row {
      justify-content: center;
    }
    &__wrap {
      @include col();
      @include size(12);

      max-width: 88.4rem;

      p {
        display: block;
        margin-bottom: 2rem;

        @include sm-block() {
          margin-bottom: 1.5rem;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }

      ul {
        display: block;
        margin-bottom: 2rem;
        padding-left: 11.5rem;

        @include sm-block() {
          padding-left: 5.5rem;
        }

        @include xs-block() {
          padding-left: 2.5rem;
        }

        &:last-child {
          margin-bottom: 0;
        }
        li {
          padding-left: 1.8rem;
          display: block;
          position: relative;
          margin-bottom: .4rem;
          &:last-child {
            margin-bottom: 0;
          }

          &:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: .9rem;
            margin: auto;
            width: .8rem;
            height: .8rem;
            background-color: $color-text;
            border-radius: .1rem;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
</style>