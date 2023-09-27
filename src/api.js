// api.js
import axios from "axios";

const apiKey = "YOUR_TMDB_API_KEY";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
