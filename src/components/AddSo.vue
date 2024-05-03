<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="orderno">Order No</label>
      <input id="orderno" v-model="soitem.orderNo" type="text" />
      <br />
      <label for="orderitem">Order Item</label>
      <input id="orderitem" v-model="soitem.orderItem" type="text" />
      <br />
      <label for="price">Price</label>
      <input id="price" v-model="soitem.price" type="number" />
      <br />
      <label for="productname">Product Name</label>
      <input id="productname" v-model="soitem.productName" type="text" />
      <br />
      <label for="qty">Qty</label>
      <input id="qty" v-model="soitem.qty" type="text" />
      <br />
      <label for="amount">Amount</label>
      <input id="amount" v-model="soitem.amount" type="text" />
      <br />
      <button type="submit" class="modal-default-button">OK</button>
    </div>
  </form>
</template>

<script setup>
import { useSoStore } from "@/store/SoStore.js";
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";
const store = useSoStore();
const router = useRouter();
const soitem = reactive({
  orderNo: "",
  orderItem: 0,
  price: 0,
  productName: "",
  qty: 0,
  amount: 0,
});

function onSubmit() {
  store.addPostAction(soitem);
  clearSoItem();
  router.push("/");
}

function clearSoItem() {
  soitem.orderNo = "";
  soitem.orderItem = 0;
  soitem.price = 0;
  soitem.productName = "";
  soitem.qty = 0;
  soitem.amount = 0;
}
</script>

<style scoped></style>
