<template>
  <div>
    <p>Product id {{ id }}</p>
  </div>
</template>

<script setup>

  const { id } = useRoute().params

  definePageMeta({
    layout: 'products'
  })

</script>

<style lang="scss" scoped>

</style>