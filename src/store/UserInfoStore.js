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
     //const jwt = state.UserInfo.JWTToken;
    // const jwtHeadder = {
    //   headers: {
    //     Authorization: `Bearer ${jwt}`,
    //   },
    // }
    jwtHeadder = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQzNzk4MTYsImlhdCI6MTcxNDM3OTgxNiwibmJmIjoxNzE0Mzc5ODE2fQ.TZwQvlFouwxisH9IoWA1kNiIwdrYlOyqcZ-axtCyt9E`,
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
