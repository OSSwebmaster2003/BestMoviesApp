import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODhiYjc3ZTNhYzMxMTczMmMwMDQ0NThhODZjNjhhNSIsIm5iZiI6MTcyODM4MjU1Ny4yMzY2NTgsInN1YiI6IjY3MDUwM2Q2NWY5NTg5MjQ4OGMwMTc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ykQiylzRB3sZCu_KV0rh5pP9tMIV8fR65nuaH6JF_E",
  },
});

export default tmdbApi;
