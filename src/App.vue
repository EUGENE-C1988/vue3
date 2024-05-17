<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style>
/* Add your custom styles here */
.container {
  padding: 20px;
}
</style>
