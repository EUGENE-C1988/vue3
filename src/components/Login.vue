<script setup>
import { userLoginStore } from "@/store/LoginStore.js";
import { reactive, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const loginInfo = reactive({
  userID: "",
  userPassWord: "",
});

const store = userLoginStore();
const route = useRoute();
const router = useRouter();

const show1 = ref(false);

function onSubmit() {
  store.LoginAction(loginInfo);
  router.push("/home");
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <!-- <div class="alert alert-info">
      Username: test<br />
      Password: test
    </div> -->
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
