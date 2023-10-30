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

  watch(
      () => store.dataMeta,
      (meta) => {
        useHead({
          title: meta?.title,
          meta: {
            name: "description",
            content: meta?.description
          }
        })
      }
  )

  onMounted(async () => {
    let url = '/'
    if ('article' in params) {
      url = params.article.join('/')
    }

    await store.fetchDataPage(url)
  })

</script>