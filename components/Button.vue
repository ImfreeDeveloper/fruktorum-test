<template lang="pug">
button(
  :class="classes"
) {{ text }}
</template>

<script setup>
  const { type, btnClass, width } = defineProps({
    type: {
      type: String,
      default: 'blue',
      validator: value => ['blue', 'black'].includes(value)
    },
    btnClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  })

  const classes = computed(() => ({
    'btn': true,
    [`btn_theme_${type}`]: true,
    [`${btnClass}`]: true
  }))

</script>

<style lang="scss">
  .btn {
    position: relative;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: $baseFont;
    display: flex;
    height: 4.6rem;
    align-items: center;
    justify-content: center;
    border-radius: .2rem;
    font-size: 1.8rem;
    font-weight: $normal;
    line-height: 1;
    transition: all 0.3s ease;
    flex-shrink: 0;
    padding: 0 5rem;
    cursor: pointer;
    color: $color-white;

    @include sm-block() {
      font-size: 1.6rem;
      padding: 0 4rem;
      height: 4.3rem;
    }

    &_theme {
      &_blue {
        border: .1rem solid $color-blue;
        background-color: $color-blue;

        &:hover {
          background-color: transparent;
        }
      }
      &_black {
        background-color: $color-text;

        &:hover {
          background-color: $color-blue;
        }
      }
    }
  }
</style>