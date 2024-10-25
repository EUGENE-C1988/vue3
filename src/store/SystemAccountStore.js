import { defineStore } from "pinia";
import axios from "axios";

export const SystemAccountStore = defineStore("SystemAccountStore", {
  state: () => ({
    AllAccounts: [],
  }),
  getters: {
    getAllAccounts: (state) => {
      return state.AllAccounts;
    },
  },
  actions: {
    async getAccountsAction(jwtHeadder) {
      const response = await axios.get(
        "https://localhost:44307/SysAuth/A",
        jwtHeadder
      );
      this.AllAccounts = response.data;
    },
  },
});
