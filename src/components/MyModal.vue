<template>
  <form @submit.prevent="onSubmit">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <label for="id">ID</label>
        <input v-model="soitem.id" id="id" type="text" disabled />
        <br />
        <label for="orderno">Order No</label>
        <input v-model="soitem.orderNo" id="orderno" type="text" disabled />
        <br />
        <label for="orderitem">Order Item</label>
        <input v-model="soitem.orderItem" id="orderitem" type="text" disabled />
        <br />
        <label for="price">Price</label>
        <input v-model.number="soitem.price" id="price" type="number" />
        <br />
        <label for="productname">Product Name</label>
        <input v-model="soitem.productName" id="productname" type="text" />
        <br />
        <label for="qty">Qty</label>
        <input v-model="soitem.qty" id="qty" type="text" />
        <br />
        <label for="amount">Amount</label>
        <input
          v-model.number="soitem.amount"
          id="amount"
          type="text"
          disabled
        />
        <br />

        <!-- <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div> -->

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="$emit('close')">
              Close
            </button>
            <button type="submit" class="modal-default-button">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useSoStore } from "@/store/SoStore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, onMounted } from "vue";
const props = defineProps({
  show: Boolean,
  id: String,
});
const store = useSoStore();
const form = reactive({});
const route = useRoute();
const router = useRouter();
const soitem = store.getById(props.id);
function onSubmit() {
  //建立更新物件
  form.id = soitem.id;
  form.orderNo = soitem.orderNo;
  form.orderItem = soitem.orderItem;
  form.price = soitem.price;
  form.productName = soitem.productName;
  form.qty = soitem.qty;
  form.amount = soitem.amount;
  store.editPostAction(form);
  $emit("close");
  console.log(route);
  router.push("/");
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 600px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
