<script setup>
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";
import getImageUrl from "@/helpers/getImageUrl.js";
import getGenre from "@/helpers/getGenre.js";
import tmdbApi from "@/config/config.js";

defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-full rounded-lg relative group cursor-pointer">
    <img
      :src="getImageUrl(movie?.poster_path)"
      :alt="movie?.title"
      class="w-full rounded-lg aspect-[3/4]"
    />
    <h1 class="font-bold text-lg mt-2">{{ movie?.title }}</h1>
    <p class="text-yellow text-[15px] mt-2">{{ getGenre(movie?.genre_ids) }}</p>
    <!-- rating  -->
    <span
      class="absolute top-3 right-3 w-[62px] h-8 rounded-md bg-light-green flex items-center justify-center text-lg font-bold"
      >{{ movie?.vote_average.toFixed(1) }}</span
    >
    <!-- shadow div  -->
    <div
      class="shadow_div hidden group-hover:flex items-center justify-center absolute w-full rounded-lg aspect-[3/4] top-0"
    >
      <button
        class="w-[80%] h-[70px] rounded-md bg-white flex items-center justify-center text-lg font-bold text-blue"
      >
        <RouterLink to="">About Movie</RouterLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
.shadow_div {
  background-color: rgba(0, 0, 255, 0.5);
}
</style>
