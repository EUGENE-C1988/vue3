import { defineStore } from "pinia";
import axios from "axios";

export const SystemRoleStore = defineStore("SystemRoleStore", {
  state: () => ({
    AllRoles: [],
  }),
  getters: {
    getAllRoles: (state) => {
      return state.AllRoles;
    },
  },
  actions: {
    async getRolesAction(jwtHeadder) {
      const response = await axios.get(
        "https://localhost:44307/SysAuth",
        jwtHeadder
      );
      this.AllRoles = response.data;
    },
  },
});
