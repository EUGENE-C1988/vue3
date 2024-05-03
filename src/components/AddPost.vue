<template>
  <div>
    <h3>Add Post</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="uid" class="form-label">User Id</label>
        <input type="text" class="form-control" id="uid" 
        v-model="form.userId" required placeholder="Enter user id" />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" 
        v-model="form.title" required placeholder="Enter title" />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Body</label>
        <input type="text" class="form-control" id="body" 
        v-model="form.body" required placeholder="Enter body" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { usePostStore } from "@/store/PostStore.js";
import { reactive } from "vue";

const store = usePostStore();
const form = reactive({
  userId: "",
  title: "",
  body: "",
});

function onSubmit() {
  store.addPostAction(form);
  form.userId = "";
  form.title = "";
  form.body = "";
}

</script>
