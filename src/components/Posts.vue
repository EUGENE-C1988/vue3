<template>
  
  <div>
    <h3> Posts </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="p in getAllPosts" v-bind:key="p.id">
        <strong> User Id : </strong> {{ p.userId }} <br />
        <strong> Title : </strong> {{ p.title }} <br />
        <strong> Body : </strong> {{ p.body }} <br />
        <div class="mt-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button 
            data-bs-toggle="modal" data-bs-target="#myModal" 
            @click="removePostAction(p.id)"
            type="button" class="btn btn-danger"> Delete </button>
          </div>
          <router-link class="btn btn-success" :to="`/edit/${p.id}`">
              Edit
          </router-link>
        </div>
      </li>
    </ul>
  </div>
  <teleport to="#mydialog">
    <modal v-show="showModal" @close="showModal = false">
      <h1>訊息</h1>
      <p>資料成功的刪除!</p>
    </modal>
  </teleport>
</template>
<script setup>
import { usePostStore } from "@/store/PostStore.js";
import { computed ,ref } from "vue";
import Modal from "@/components/Modal.vue";
const showModal = ref(false);
function removePostAction(id) {
  showModal.value = true;
  store.removePostAction(id);
}
const store = usePostStore();
if (store.posts.length <= 0) {
  store.getPostsAction();
}
const getAllPosts = computed(() => store.getAllPosts);


</script>
<style scoped>
.list-group-item {
  color: brown;
}
</style>