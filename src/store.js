import { reactive } from "vue";

export const store = reactive({
    results: [],
    apiUrl: 'https://rickandmortyapi.com/api/character'
})