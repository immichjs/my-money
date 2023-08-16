<template>
  <the-nav></the-nav>

  <the-header></the-header>

  <main class="ml-28">
    <router-view />
  </main>
</template>

<script setup>
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
</script>
