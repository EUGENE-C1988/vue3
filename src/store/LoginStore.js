import { defineStore } from 'pinia'
import axios from 'axios'
export const userLoginStore = defineStore('LoginStore', {
  state: () => ({
    UserInfo: {}
  }),
  getters: {
    getUserInfoObj: (state) => {
      return state.UserInfo
    },   
  },
  actions: {
    async LoginAction(loginInfo) {
      const response = await axios.post(
        'https://localhost:7297/Login',loginInfo
      )
      localStorage.setItem("UserInfoObj",JSON.stringify(response.data));
      //this.UserInfo=response.data;
    },
  },
})
