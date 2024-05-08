import { defineStore } from 'pinia'
import axios from 'axios'
export const userUserInfoStore = defineStore('useUserInfoStore', {
  state: () => ({
    UserInfo: {}
  }),
  getters: {
    getUserInfoObj: (state) => {
      return state.UserInfo
    },
    getTokenObj:(state)=>{
    const jwt = state.UserInfo.JWTToken;
    const jwtHeadder = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    return jwtHeadder
    }
    
  },
  actions: {
    async GetUserInfoAction() {
        this.UserInfo=JSON.parse(localStorage.getItem("UserInfoObj"));
    },
  },
})
