<template lang="pug">
.loader
  img(src="/images/svg/icon-loader.svg")
</template>

<script setup>

</script>

<style lang="scss">
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    img {
      width: 7rem;
      height: 7rem;
    }
  }
</style>