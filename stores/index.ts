import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Add your state here
    initialized: false,
  }),

  getters: {
    // Add your getters here
  },

  actions: {
    // Add your actions here
    init() {
      this.initialized = true
    },
  },
})
