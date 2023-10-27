<template lang="pug">
.field-input(:class="{'is-active': isFocus, 'is-filled': !!modelValue.trim() && !isFocus }")
  .field-input__wrap
    input(
      :type="props.typeField"
      autocomplete="off"
      placeholder=""
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="props.maxLength"
      required
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    )
    label(v-if="isShow && !modelValue.trim()") {{ label }}

</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    typeField: {
      type: String,
      required: false,
      default: "text"
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    maxLength: {
      type: Number,
      required: false,
      default: 50
    },
    modelValue: {
      type: String,
      required: true,
      default: ''
    },
  })

  defineEmits(['update:modelValue'])

  const isShow = ref(true)
  const isFocus = ref(false)

  const setFocus = (show) => {
    isFocus.value = show
    isShow.value = !show
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
        position: relative;
        z-index: 1;

        @include sm-block() {
          font-size: 1.6rem;
        }
      }
      label {
        position: absolute;
        font-size: 1.8rem;
        line-height: 1;
        left: .8rem;
        bottom: 0.4rem;
        color: $color-grey;

        @include sm-block() {
          font-size: 1.6rem;
        }
      }
    }
    &.is-active {
      .field-input__wrap {
        border-bottom: .1rem solid $color-blue;
      }
    }
    &.is-filled {
      .field-input__wrap {
        border-bottom: .1rem solid $color-white;
      }
    }
  }
</style>