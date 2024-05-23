<template>
  <div>
    <div>
      <vue-navigation-bar :options="navbarOptions" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import VueNavigationBar from "vue-navigation-bar";
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import { useMenuStore } from "@/store/MenuStore.js";

import { userUserInfoStore } from "@/store/UserInfoStore";
import axios from "axios";

const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = useMenuStore();
store.getMenuAction(userInfo.value.ID, jwtHeadder);
const navbarOptions = computed(() => store.getMenu);
//const navbarOptions = retiveMenu(userInfo.value.ID, jwtHeadder);

// function retiveMenu(ID, jwtHeadder) {
//   let data = [];
//   axios
//     .get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
//     .then((response) => {
//       data = response.data.bpi;
//     });
//   const navbarOptions = interpreterMenu(data);
//   return navbarOptions;
// }
</script>
<style></style>
