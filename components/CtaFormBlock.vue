<template lang="pug">
section.sec.cta_form_block
  .container
    .row
      .cta_form_block__wrap
        .cta_form_block__img
          img(src="/images/img_3.jpg")
        .cta_form_block__form
          h2.cta_form_block__title Стань участником проекта
          form
            FieldInput.cta_form_block__input(v-model="name" label="Имя")
            FieldInput.cta_form_block__input(v-model="phone" label="Телефон")
            FieldInput.cta_form_block__input(v-model="email" label="Email")
            Button.cta_form_block__button(text="Присоединиться")
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const phone = ref('')
const email = ref('')

</script>

<style lang="scss">
  .cta_form_block {
    @include xs-block() {
      background-color: $color-text;
    }

    &__wrap {
      @include col();
      @include size(12);

      display: flex;
      background-color: $color-text;
      padding: 6rem;

      @include sm-block() {
        flex-direction: column;
      }

      @include xs-block() {
        padding: 1.5rem  0;
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: stretch;

      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;

        @include sm-block() {
          align-items: center;
        }
      }
    }
    &__img {
      margin-right: 6rem;
      max-width: 59.5rem;

      @include md-block() {
        max-width: 41.5rem;
        margin-right: 3rem;
      }

      @include sm-block() {
        margin-right: 0;
        max-width: none;
        margin-bottom: 3rem;
      }

      @include xs-block() {
        margin-bottom: 2rem;
      }
    }
    &__title {
      color: $color-white-light;

      @include sm-block() {
        text-align: center;
        margin-bottom: 3rem;
      }

      @include xs-block() {
        text-align: left;
      }
    }
    &__input {
      margin-bottom: 2.5rem;
      max-width: 35.3rem;
      width: 100%;
      margin-right: 0;

      @include xs-block() {
        max-width: none;
      }
    }
    &__button {
      margin-top: auto;
      margin-bottom: 0.8rem;

      @include sm-block() {
        margin-top: 2rem;
      }

      @include xs-block() {
        width: 100%;
      }
    }
  }
</style>