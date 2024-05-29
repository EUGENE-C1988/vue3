<template>
  <div>
    <form @submit.prevent="onSubmit">
      <v-responsive class="mx-auto" max-width="300">
        <h2>Login</h2>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Account
        </div>
        <v-text-field
          v-model="loginInfo.userID"
          variant="outlined"
          hide-details="auto"
          placeholder="Account"
          prepend-inner-icon="mdi-account-circle-outline"
          density="compact"
          clearable
        ></v-text-field>
        <br />
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
        </div>
        <v-text-field
          v-model="loginInfo.userPassWord"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          variant="outlined"
          hide-details="auto"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          density="compact"
          clearable
        ></v-text-field>
        <br />
        <v-btn type="submit" size="large">SIGN IN</v-btn>
      </v-responsive>
    </form>
  </div>
</template>
<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const loginInfo = ref({
  userID: "",
  userPassWord: "",
});

const route = useRoute();
const router = useRouter();

const show1 = ref(false);

function onSubmit() {
  retrieveUserInfo();
}

async function retrieveUserInfo() {
  const fetchData = await axios.post(
    "https://localhost:7297/Login",
    loginInfo.value
  );

  localStorage.setItem("UserInfoObj", JSON.stringify(fetchData.data));
  //debugger;
  router.push("/home");
}
</script>
