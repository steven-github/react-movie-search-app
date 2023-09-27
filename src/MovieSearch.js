// MovieSearch.js
import React, { useState } from "react";
import { fetchMovies } from "./api";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="p-4">
      <input type="text" placeholder="Search for movies..." value={query} onChange={(e) => setQuery(e.target.value)} className="border rounded-lg p-2 mr-2" />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Search
      </button>
      <ul className="mt-4">
        {movies.map((movie) => (
          <li key={movie.id} className="text-xl mb-2">
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
