<script setup>
import bgPoster from "@/assets/bgPoster.png";
</script>

<template>
  <div class="fixed -z-10 inset-0 bg_poster">
    <img :src="bgPoster" alt="poster bg" class="w-full h-screen" />
  </div>
</template>

<style scoped>
.bg_poster {
  backdrop-filter: brightness(40%);
}
</style>
