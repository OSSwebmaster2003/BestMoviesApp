<script setup>
import { RouterLink } from "vue-router";
import Contaier from "@/components/Common/Container.vue";

import logo from "@/assets/icons/logo.png";

const socialMediaUrls = [
  {
    label: "pi pi-instagram",
    url: "",
  },
  {
    label: "pi pi-telegram",
    url: "",
  },
  {
    label: "pi pi-facebook",
    url: "",
  },
  {
    label: "pi pi-twitter",
    url: "",
  },
];

const navigations = [
  {
    label: "Posters",
    path: "/posters",
  },
  {
    label: "Media",
    path: "/media",
  },
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "Actors",
    path: "/actors",
  },
  {
    label: "News",
    path: "/news",
  },
  {
    label: "Categories",
    path: "/categories",
  },
];
</script>

<template>
  <Contaier>
    <header class="w-full flex items-center justify-between">
      <!-- logo  -->
      <div class="flex flex-col gap-2">
        <RouterLink to="/">
          <img :src="logo" alt="" />
        </RouterLink>
        <div class="flex items-center justify-between">
          <div v-for="(link, index) in socialMediaUrls" :key="index">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span
                :class="link?.label"
                class="text-secondary-white cursor-pointer hover:text-white"
              ></span>
            </a>
          </div>
        </div>
      </div>

      <!-- navigation  -->
      <div class="flex items-center justify-center gap-4">
        <div v-for="(nav, index) in navigations" :key="index">
          <RouterLink
            :to="nav?.path"
            class="font-bold text-[17px] leading-[21px] hover:text-yellow"
            >{{ nav?.label }}</RouterLink
          >
        </div>
      </div>

      <!-- login search  -->
      <div class="flex items-center justify-end gap-3">
        <button
          class="search_btn w-[55px] h-[52px] flex items-center justify-center bg-white rounded-lg"
        >
          <RouterLink
            to="/search"
            class="border-none flex items-center justify-center"
          >
            <span
              class="pi pi-search bg-white text-blue font-bold text-xl"
            ></span>
          </RouterLink>
        </button>
        <button
          class="h-[52px] w-[138px] bg-blue login_btn rounded-xl font-bold"
        >
          <RouterLink to="/login" class="bg-none">Login</RouterLink>
        </button>
      </div>
    </header>
  </Contaier>
</template>

<style scoped>
.login_btn:hover {
  box-shadow: 0px 0px 15px 0px #4871ffcc;
}
.search_btn:hover {
  box-shadow: 0px 0px 15px 0px #ffffff;
}
</style>
