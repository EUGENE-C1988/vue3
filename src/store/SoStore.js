import { defineStore } from 'pinia'
import axios from 'axios'
import { userUserInfoStore } from "@/store/UserInfoStore";

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

    //  jwtHeadder = {
    //   headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQzNzk4MTYsImlhdCI6MTcxNDM3OTgxNiwibmJmIjoxNzE0Mzc5ODE2fQ.TZwQvlFouwxisH9IoWA1kNiIwdrYlOyqcZ-axtCyt9E`,
    //   },
    // }

      const response = await axios.get(
        'https://localhost:7297/Card',jwtHeadder
      )
      this.SaleOrders = response.data
    },
    async addPostAction(post) {
      const response = await axios.post(
        'https://localhost:7297/Card', post
      )
      this.SaleOrders.unshift(response.data)
    },
    async removePostAction(id) {
      await axios.delete(`https://localhost:7297/Card/${id}`);
      const index = this.SaleOrders.findIndex(item => item.id === id);
      if (index !== -1) {
        this.SaleOrders.splice(index, 1);
      }
    },
    async editPostAction(post) {
      await axios.put(
        `https://localhost:7297/Card/${post.id}`,
        post
      );
      const index = this.SaleOrders.findIndex(c => c.id === post.id)
      if (index !== -1) {
        this.SaleOrders.splice(index, 1, post)
      }
    },
  },
})
