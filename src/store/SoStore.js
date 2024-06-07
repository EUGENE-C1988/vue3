import { defineStore } from 'pinia'
import axios from 'axios'

export const useSoStore = defineStore('SaleOrderStore', {
    state: () => ({
    SaleOrders: []
  }),
  getters: {
    getAllSo: (state) => {
      return state.SaleOrders
    },
    getById:(state)=>(id)=>{
      return state.SaleOrders.find(item => item.id === id);
    },
  },
  actions: {
    async getSoAction(jwtHeadder) {
      const response = await axios.get(
        'https://localhost:7297/Card',jwtHeadder
      )
      this.SaleOrders = response.data
    },
    async addPostAction(post,jwtHeadder) {
      const response = await axios.post(
        'https://localhost:7297/Card', post, jwtHeadder
      )
      post.id = response.data
      this.SaleOrders.unshift(post)
    },
    async removePostAction(id,jwtHeadder) {
      await axios.delete(`https://localhost:7297/Card/${id}`, jwtHeadder);
      const index = this.SaleOrders.findIndex(item => item.id === id);
      if (index !== -1) {
        this.SaleOrders.splice(index, 1);
      }
    },
    async editPostAction(post,jwtHeadder) {
      console.log(post)
      await axios.put(
        `https://localhost:7297/Card/${post.id}`,
        post,jwtHeadder
      );
      const index = this.SaleOrders.findIndex(c => c.id === post.id)
      if (index !== -1) {
        this.SaleOrders.splice(index, 1, post)
      }
    },
  },
})
