<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Common/Header.vue";
import Footer from "@/components/Common/Footer.vue";
</script>

<template>
  <div class="w-full">
    <Header />
    <main>
      <RouterView></RouterView>
    </main>
    <Footer />
  </div>
</template>
