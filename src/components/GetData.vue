<template>
  <div>
    <h3>Sale Order{{ jwtHeadder }}</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="so in getAllSo" v-bind:key="so.id">
        <strong> Id : </strong> {{ so.id }} <br />
        <strong> Order Item : </strong> {{ so.orderItem }} <br />
        <strong> Order No : </strong> {{ so.orderNo }} <br />
        <strong> Price : </strong> {{ so.price }} <br />
        <strong> Product Name : </strong> {{ so.productName }} <br />
        <strong> Qty : </strong> {{ so.qty }} <br />
        <strong> Amount : </strong> {{ so.amount }} <br />
        <!-- <button @click="showModal = true">Show Modal</button> -->
        <button @click="toggleModal(so.id)">Edit</button>
        <button @click="deleteItem(so.id)">Delete</button>

        <!-- 使用这个 modal 组件，传入 prop -->
        <my-modal
          v-if="showModalStates[so.id]"
          :show="showModalStates[so.id]"
          :id="so.id"
          :orderNo="so.orderNo"
          :orderItem="so.orderItem"
          :price="so.price"
          :productName="so.productName"
          :qty="so.qty"
          :amount="so.amount"
          @close="toggleModal(so.id)"
        >
        </my-modal>
      </li>
    </ul>
  </div>
</template>

<script setup>
import MyModal from "@/components/MyModal.vue";
import { useSoStore } from "@/store/SoStore.js";
import { userUserInfoStore } from "@/store/UserInfoStore";
import { computed, ref } from "vue";

const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = useSoStore();
store.getSoAction(jwtHeadder);
const getAllSo = computed(() => store.getAllSo);
/* const showModal = ref(false); */
// Create a reactive state for showModal for each sale order
const showModalStates = ref({});

// Function to toggle showModal for a specific sale order
const toggleModal = (id) => {
  showModalStates.value[id] = !showModalStates.value[id];
};

const deleteItem = (id) => {
  store.removePostAction(id);
};
</script>

<style scoped></style>
