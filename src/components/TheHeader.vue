<template>
  <header class="ml-20 flex justify-between items-center px-8">
    <section class="flex justify-between w-full relative py-6">
      <h1 class="text-lg font-medium text-zinc-700">
        Bem vindo de volta, <span class="text-violet-700">Michel França</span>
      </h1>
      <div class="flex items-center gap-3">
        <v-icon name="hi-solid-bell" class="fill-zinc-700" scale="1"></v-icon>
        <div
          class="flex items-center cursor-pointer gap-0.5"
          @click="toggleDropdownProfile()"
        >
          <img
            src="https://picsum.photos/512/512"
            alt="Foto de perfil"
            class="w-10 rounded-full"
          />
          <v-icon
            name="md-keyboardarrowleft-round"
            class="fill-zinc-500 duration-100"
            :class="{ '-rotate-90': activeDropdownProfile }"
          ></v-icon>
        </div>
      </div>

      <div
        class="absolute w-44 flex flex-col -bottom-28 right-0 bg-white text-xs border profile-dropdown"
        v-if="activeDropdownProfile"
      >
        <router-link
          :to="item.path"
          v-for="item in dropdownProfile"
          :key="item"
          class="hover:bg-violet-700 hover:text-white px-4 py-2.5 font-medium text-zinc-500 duration-100 tracking-wider"
          >{{ item.name }}</router-link
        >
        <button
          class="px-4 py-2.5 text-start hover:bg-violet-700 text-zinc-500 font-medium tracking-wider hover:text-white"
        >
          Sair
        </button>

        <div
          class="absolute w-[8px] h-[8px] border bg-white rotate-45 -z-10 right-[35px] -top-[5px]"
        ></div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { reactive, ref } from "vue";

const activeDropdownProfile = ref(false);

const dropdownProfile = reactive([
  { path: "/profile", name: "Minha conta" },
  { path: "/configuration", name: "Configurações" },
]);

function toggleDropdownProfile() {
  activeDropdownProfile.value = !activeDropdownProfile.value;
}
</script>

<style scoped>
.profile-dropdown::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 34px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0px 5px 5px;
  border-color: transparent transparent white;
}
</style>
