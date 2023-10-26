<template lang="pug">
section.sec.subscribe
  .container
    .row
      .subscribe__wrap
        p.subscribe__title Подпишись на рассылку
        .subscribe__form
          FieldInput.subscribe__form-input(v-model="email")
          Button(text="Подписаться")
</template>

<script setup>
  import { ref } from 'vue'

  const email = ref('')

</script>

<style lang="scss">
  .subscribe {

    @include sm-block() {
      background-color: $color-text;
    }

    &__wrap {
      @include col();
      @include size(12);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2.7rem 3rem;
      background-color: $color-text;

      @include md-block() {
        flex-direction: column;
        align-items: flex-start;
      }

      @include sm-block() {
        padding: 1.5rem 0 2rem 0;
      }
    }

    &__title {
      font-size: 2.2rem;
      line-height: 3rem;
      font-weight: $extrabold;
      color: $color-white;

      @include md-block() {
        margin-bottom: 2rem;
      }

      @include sm-block() {
        font-size: 1.8rem;
      }
    }

    &__form {
      display: flex;
      align-items: flex-end;

      @include md-block() {
        width: 100%;
      }

      @include xs-block() {
        flex-direction: column;
        align-items: normal;
      }

      &-input {
        margin-right: 3.7rem;

        @include md-block() {
          flex: 1;
        }

        @include xs-block() {
          margin-right: 0;
          margin-bottom: 2rem;
        }

      }
    }
  }
</style>