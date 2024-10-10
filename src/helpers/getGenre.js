import tmdbApi from "@/config/config";

let genres = [];
const fetchGenres = async () => {
  try {
    const response = await tmdbApi.get(`/genre/movie/list`);
    genres = response?.data?.genres;
  } catch (error) {
    console.log("Error fetching Genres", error);
  }
};
fetchGenres();

const getGenre = (genreIds) => {
  return genreIds
    .map((id) => {
      let genre = genres.find((g) => g.id === id);

      return genre ? genre?.name : "";
    })
    .filter((name) => name)
    .join(", ");
};

export default getGenre;
