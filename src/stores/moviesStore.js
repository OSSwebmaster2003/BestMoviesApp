import { defineStore } from "pinia";
import tmdbApi from "@/config/config";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => ({
    movies: [],
    categories: [],
    isLoadingCategories: true,
    isLoadingMovies: true,
    selectedCategory: null,
  }),

  actions: {
    async fetchCategories() {
      try {
        const response = await tmdbApi.get(`/genre/movie/list`);
        this.categories = response?.data?.genres;
      } catch (error) {
        console.log("Error fetching categories", error);
      } finally {
        this.isLoadingCategories = false;
      }
    },
    async fetchMoviesByCategory(genreId) {
      try {
        const genreParam = genreId ? `with_genres=${genreId}` : ``;
        const response = await tmdbApi.get(`/discover/movie?${genreParam}`);
        this.movies = response?.data?.results;
      } catch (error) {
        console.log("Error fetching Movies", error);
      } finally {
        this.isLoadingMovies = false;
      }
    },

    setSelectedCategory(genreId) {
      this.selectedCategory = genreId;
      this.fetchMoviesByCategory(genreId);
    },
  },
});
