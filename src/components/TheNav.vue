<template>
  <nav class="fixed flex w-20 flex-col bg-white p-4 h-screen border-r">
    <router-link to="/" class="flex items-center justify-center">
      <img
        src="../assets/images/cofrinho.png"
        alt="Logo do sistema"
        class="w-6"
      />
    </router-link>

    <div class="flex-1 flex flex-col justify-center items-center gap-2">
      <router-link
        :to="item.path"
        v-for="item in listItems"
        :key="item"
        class="flex items-center justify-center w-11 h-11 hover:bg-violet-500 rounded-lg group duration-100"
        active-class="bg-violet-500"
      >
        <v-icon
          :name="item.icon"
          scale="1.25"
          class="fill-slate-500 group-hover:fill-white"
          :class="{ 'fill-white': $route.path === item.path }"
        ></v-icon>
      </router-link>
    </div>

    <div class="flex items-center justify-center py-4">
      <button>
        <v-icon name="hi-logout" scale="1.25" fill="#9e9e9e"></v-icon>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { reactive } from "vue";

const listItems = reactive([
  { path: "/dashboard", name: "Dashboard", icon: "bi-grid" },
  { path: "/wallets", name: "Carteiras", icon: "la-wallet-solid" },
  { path: "/cards", name: "Cartões", icon: "bi-credit-card" },
  { path: "/transactions", name: "Transações", icon: "oi-arrow-switch" },
  { path: "/investments", name: "Investimentos", icon: "md-trendingup" },
]);
</script>
