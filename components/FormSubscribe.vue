<template lang="pug">
section.subscribe
  .container
    .row
      .subscribe__wrap
        p.subscribe__title Подпишись на рассылку
        .subscribe__form
          FieldInput.subscribe__form-input
          Button(text="Подписаться")
</template>

<style lang="scss">
  .subscribe {
    &__wrap {
      @include col();
      @include size(12);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2.7rem 3rem;
      background-color: $color-text;

    }

    &__title {
      font-size: 2.2rem;
      line-height: 3rem;
      font-weight: $extrabold;
      color: $color-white;
    }

    &__form {
      display: flex;
      align-items: flex-end;
      &-input {
        margin-right: 3.7rem;
      }
    }
  }
</style>