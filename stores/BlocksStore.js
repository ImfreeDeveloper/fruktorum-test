export const useBlocksStore = defineStore('blocksStore', () => {

    const loading = ref(true)
    const dataPageType = ref('')
    const dataMeta = ref({})
    const dataBody = ref([])

    const fetchDataPage = async (url = '') => {
        const { $api } = useNuxtApp()

        loading.value = true

        try {
            let { data } = await $api.get(url)

            dataPageType.value = data.page_type
            dataMeta.value = data.meta
            dataBody.value = data.body

        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {
                loading.value = false
            }, 2000)
        }
    }

    // const count = computed(() => counter.value)

    return {
        loading,
        dataPageType,
        dataMeta,
        dataBody,
        fetchDataPage
    }
})