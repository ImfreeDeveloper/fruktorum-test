<template lang="pug">
div.list-component
  Loading(v-if="loading")
  div.list-component__wrap(v-else)
    component(
      v-for="item in bodyList"
      :key="item.id"
      :is="item.type"
      :data-block="item.data"
    )
</template>

<script setup>

import ArticleListBlock from "~/components/listBlock/ArticleListBlock.vue"
import ArticleIntroBlock from "~/components/listBlock/ArticleIntroBlock.vue";
import TextBlock from "~/components/listBlock/TextBlock.vue";
import ImageBlock from "~/components/listBlock/ImageBlock.vue";
import SliderBlock from "~/components/listBlock/SliderBlock.vue";
import FormSubscribe from "~/components/listBlock/FormSubscribe.vue";
import CtaFormBlock from "~/components/listBlock/CtaFormBlock.vue";

const store = useBlocksStore()

const { loading, dataBody } = storeToRefs(store)

const NAMES = {
  'article_intro_block': ArticleIntroBlock,
  'article_list_block': ArticleListBlock,
  'cta_form_block': CtaFormBlock,
  'subscribe_form_block': FormSubscribe,
  'image_block': ImageBlock,
  'slider_block': SliderBlock,
  'text_block': TextBlock,
}

const bodyList = computed(() =>
    dataBody.value.map((el) => {
      el.type = markRaw(NAMES[el.type])

      return el
    })
)

</script>