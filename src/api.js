// api.js
import axios from "axios";

const apiKey = "34c076c99e98ae37f5430a9fd3eadca0";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
