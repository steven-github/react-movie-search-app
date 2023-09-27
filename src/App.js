// App.js
import React from "react";
import MovieSearch from "./MovieSearch";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4">Movie Search App</h1>
        <MovieSearch />
      </div>
    </div>
  );
}

export default App;
