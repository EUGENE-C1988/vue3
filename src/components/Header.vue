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

const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = useMenuStore();
store.getMenuAction(userInfo.value.ID, jwtHeadder);
const navbarOptions = computed(() => store.getMenu);
</script>
<style></style>
