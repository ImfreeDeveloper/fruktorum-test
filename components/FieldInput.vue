<template lang="pug">
.field-input
  .field-input__wrap
    input(
      :type="props.typeField"
      autocomplete="off"
      placeholder=""
      :maxlength="props.maxLength"
      required
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    )
    label(v-if="isShow") Email

</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    typeField: {
      type: String,
      required: false,
      default: "text"
    },
    maxLength: {
      type: Number,
      required: false,
      default: 10
    },
  })

  const isShow = ref(true)

  const setFocus = (isFocus) => {
    isShow.value = !isFocus
  }
</script>

<style lang="scss">
  .field-input {
    &__wrap {
      position: relative;
      border-bottom: .1rem solid $color-grey;
      input {
        display: block;
        color: $color-white;
        font-size: 1.8rem;
        padding: 0 .8rem .2rem .8rem;
      }
      label {
        position: absolute;
        font-size: 1.8rem;
        line-height: 1;
        left: .8rem;
        bottom: 0.4rem;
        color: $color-grey
      }
    }
  }
</style>