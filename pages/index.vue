<template lang="pug">
div.app
  Loading(v-if="loading")
  div.app-wrap(v-else)
    //ArticleIntroBlock
    //TextBlock
    //  h2 Слияние Искусства и Технологии
    //  p В эпоху цифровых инноваций и технологического прогресса, искусство также находит свое уникальное выражение в цифровой среде. Одной из самых захватывающих областей в этой эволюции является мир динамичного 3D цифрового искусства. Это искусство, объединяющее в себе креативность и передовые технологии, позволяет художникам воплотить свои фантазии в удивительных трехмерных произведениях.
    //  p Динамичное 3D цифровое искусство - это плод сотрудничества между художниками и технологами. Оно предоставляет художникам возможность создавать виртуальные миры, в которых зритель может окунуться и участвовать. Благодаря передовым программным инструментам и техникам моделирования, художники могут добиться невероятной реалистичности и детализации в своих работах.
    //  Quote
    //ImageBlock
    //TextBlock
    //  h3 Будущее Динамичного 3D Цифрового Искусства
    //  p С каждым днем технологии продолжают развиваться, открывая новые горизонты для динамичного 3D цифрового искусства,  котороенаходит применение во многих сферах.
    //  ul
    //    li Роль в развлекательной индустрии (фильмы, игры, анимация)
    //    li Дизайн интерьера и архитектурная визуализация
    //    li Применение в медицинском моделировании и образовании
    //  p Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.
    //SliderBlock
    //FormSubscribe
    ArticleListBlock(:data-block="dataBody[0].data")
    //CtaFormBlock
</template>

<script setup>
  import ArticleIntroBlock from "~/components/listBlock/ArticleIntroBlock.vue";
  import TextBlock from "~/components/listBlock/TextBlock.vue";
  import ImageBlock from "~/components/listBlock/ImageBlock.vue";
  import SliderBlock from "~/components/listBlock/SliderBlock.vue";
  import FormSubscribe from "~/components/listBlock/FormSubscribe.vue";
  import ArticleListBlock from "~/components/listBlock/ArticleListBlock.vue";
  import CtaFormBlock from "~/components/listBlock/CtaFormBlock.vue";

  const store = useBlocksStore()

  const { loading, dataPageType, dataMeta, dataBody } = storeToRefs(store);

  onMounted(async () => {
    await store.fetchDataPage()
  });

</script>

<style scoped>

</style>