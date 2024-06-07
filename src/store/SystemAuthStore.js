import { defineStore } from 'pinia'
import axios from 'axios'

export const SystemAuthStore = defineStore('SystemAuthStore', {
    state: () => ({
    SystemAuth: []
  }),
  getters: {
    getAllRole: (state) => {
      return state.SystemAuth
    },
  },
  actions: {
    async getRoleAuthAction(jwtHeadder) {
      const response = await axios.get(
        'https://localhost:7297/SystemAuth',jwtHeadder
      )
      this.SystemAuth = response.data
    },
  }
})