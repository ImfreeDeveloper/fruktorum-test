import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.baseURL = 'https://devtwit8.ru/api/v1/page/?path=/'

    return {
        provide: {
            api: axios,
        },
    };
});