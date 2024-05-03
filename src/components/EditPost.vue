<template>
  <div>
    <h1 class="display-3"> Edit Post </h1>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="eid" class="form-label">Id</label>
          <input
            type="text"
            class="form-control"
            id="eid"
            v-model="form.id"
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="uid" class="form-label">User Id</label>
          <input
            type="text"
            class="form-control"
            id="uid"
            v-model="form.userId"
            required
            placeholder="Enter user id"
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="form.title"
            required
            placeholder="Enter title"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">Body</label>
          <input
            type="text"
            class="form-control"
            id="body"
            v-model="form.body"
            required
            placeholder="Enter body"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script setup>
import { usePostStore } from "@/store/PostStore.js";
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, onMounted } from "vue";

const store = usePostStore();
const route = useRoute();
const router = useRouter();
const form = reactive({});
const posts = computed(() => store.posts);

function onSubmit() {
  store.editPostAction(form);
  console.log(route);
  router.push("/");
}
onMounted(() => {
  console.log(posts.value);
  const rid = +route.params.id,
    ar = posts.value,
    p = ar.find((o) => o.id == rid);

  form.userId = p.userId;
  form.id = p.id;
  form.title = p.title;
  form.body = p.body;
});

</script>
<style scoped>
</style>

