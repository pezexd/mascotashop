import { acceptHMRUpdate, defineStore } from 'pinia'

export const useExample = defineStore('example', () => ({
  data: '',
}))

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExample, import.meta.hot))
