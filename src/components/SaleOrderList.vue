<template>
  <header>
    <Header />
  </header>
  <div>
    <h3>Sale Order</h3>
    <v-data-table
      :headers="headers"
      :items="getAllSo"
      item-key="id"
      items-per-page="10"
      multi-sort
      fixed-header
      height="400"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.id"
                        label="ID"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.orderNo"
                        label="Order No"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.orderItem"
                        label="Order Item"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.productName"
                        label="Product Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.qty"
                        label="Qty"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.price"
                        label="Unit Price"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field
                        v-model="editedItem.amount"
                        label="Amount"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import { useSoStore } from "@/store/SoStore.js";
import { userUserInfoStore } from "@/store/UserInfoStore";
import { computed, ref, nextTick, watch, reactive } from "vue";

const userInfoStore = userUserInfoStore();
userInfoStore.GetUserInfoAction();
const userInfo = computed(() => userInfoStore.getUserInfoObj);
const jwtHeadder = userInfoStore.getTokenObj;

const store = useSoStore();
store.getSoAction(jwtHeadder);
const getAllSo = computed(() => store.getAllSo);

//vuetify data table
const headers = [
  { title: "ID", value: "id" },
  { title: "Order No", value: "orderNo", sortable: true },
  { title: "Order Item", value: "orderItem", sortable: true },
  {
    title: "Order Detail Info",
    align: "center",
    sortable: false,
    children: [
      { title: "Product Name", value: "productName", sortable: true },
      { title: "Qty", value: "qty", sortable: true },
      { title: "Unit Price", value: "price", sortable: true },
      { title: "Amount ", value: "amount", sortable: true },
      { title: "Actions", key: "actions", sortable: false },
    ],
  },
];
const dialog = ref(false);
const dialogDelete = ref(false);
const editedIndex = ref(-1);
const editedItem = ref({
  id: 0,
  orderNo: "",
  orderItem: 0,
  productName: "",
  qty: 0,
  amount: 0,
  price: 0,
});
const defaultItem = ref({
  id: 0,
  orderNo: "",
  orderItem: 0,
  productName: "",
  qty: 0,
  amount: 0,
  price: 0,
});
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Item" : "Edit Item";
});

function editItem(item) {
  editedIndex.value = getAllSo.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item) {
  editedIndex.value = getAllSo.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
}
function deleteItemConfirm() {
  store.removePostAction(editedItem.value.id, jwtHeadder);
  closeDelete();
}
function close() {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function closeDelete() {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function save() {
  if (editedIndex.value > -1) {
    //Modify
    store.editPostAction(editedItem.value, jwtHeadder);
  } else {
    //Add
    store.addPostAction(editedItem.value, jwtHeadder);
  }
  close();
}
</script>

<style scoped></style>
