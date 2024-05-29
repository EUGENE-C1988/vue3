<template>
  <div></div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
localStorage.removeItem("UserInfoObj");
const router = useRouter();
router.push("/");
</script>
