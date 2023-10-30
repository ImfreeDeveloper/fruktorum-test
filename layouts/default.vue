<template lang="pug">
.wrapper
  Header
  main.content
    slot
  Footer
</template>

<script setup>
  const store = useBlocksStore()
  const route = useRoute()
  const params = route.params

  onMounted(async () => {
    let url = '/'
    if ('article' in params) {
      url = params.article.join('/')
    }

    await store.fetchDataPage(url)
  })

</script>