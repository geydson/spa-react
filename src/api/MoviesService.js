import axios from "axios";

const API_KEY = "0ea11c23901ba2b5db3abca7dc413444";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMoviesById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}
