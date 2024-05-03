<template>
  <header>
    <Header />
  </header>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* Add your custom styles here */
.container {
  padding-top: 20px;
}
</style>
