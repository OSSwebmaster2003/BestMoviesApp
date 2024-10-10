<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Container from "@/components/Common/Container.vue";
import PopularMovieCard from "@/components/Home/PopularMovieCard.vue";
import { useMoviesStore } from "@/stores/moviesStore.js";

const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();

const selectGenre = (genreId) => {
  moviesStore.setSelectedCategory(genreId);
};

const handleClickCategory = (genreId) => {
  selectGenre(genreId);
  router.push({
    query: { ...route.query, genreId: genreId ? genreId : undefined },
  });
};

watch(
  () => route.query.genreId,
  (newGenreId) => {
    selectGenre(newGenreId);
  },
  { immediate: true }
);

onMounted(() => {
  moviesStore.fetchCategories();
  moviesStore.fetchMoviesByCategory();
});
</script>

<template>
  <Container>
    <div class="w-full mt-4">
      <!-- category tab  -->
      <div class="flex items-center justify-between w-full gap-10">
        <h1 class="font-extrabold text-[65px]">Now at the cinema</h1>
        <span class="w-[52px] h-[2px] border-none bg-white mt-3"></span>
        <div
          class="no_scrollbar mt-3 w-auto max-w-[600px] overflow-auto flex flex-row items-center justify-start whitespace-nowrap gap-5"
        >
          <div
            class="text-lg cursor-pointer text-gray hover:text-white"
            :class="route.query.genreId == null ? 'text-white' : ''"
            @click="handleClickCategory(null)"
          >
            All
          </div>
          <div
            v-for="cat in moviesStore.categories"
            @click="handleClickCategory(cat?.id)"
            :key="cat?.id"
            :class="route.query.genreId == cat?.id ? 'text-white' : ''"
            class="text-lg cursor-pointer text-gray hover:text-white"
          >
            {{ cat?.name }}
          </div>
        </div>
      </div>

      <!-- movies list  -->
      <div class="grid w-full grid-cols-4 gap-5 mt-10">
        <PopularMovieCard
          v-for="movie in moviesStore.movies"
          :key="movie?.id"
          :movie="movie"
        />
      </div>

      <div class="flex items-center justify-center w-full mt-10">
        <button
          class="border-2 border-white bg-none flex items-center justify-center w-[200px] h-[60px] rounded-xl font-semibold text-lg hover:bg-white hover:text-blue"
        >
          All Popular
        </button>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.no_scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
