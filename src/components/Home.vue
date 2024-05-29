<template>
  <header>
    <Header />
  </header>
  <div>
    <v-card class="mx-auto my-8" elevation="16" max-width="344">
      <v-card-item>
        <v-card-title> WELCOME PAGE</v-card-title>

        <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style lang="scss" scoped></style>
