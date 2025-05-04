import React, { useEffect, useState } from "react";
import "./Trending.css";
import NavigationBar from "../../NavigationBar";
import axios from "axios";

const API_KEY = "fa0e2bfacce6d94257e6692c20cc2ac7"; 
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900">
      <NavigationBar currentPage="trending" />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2 mt-6">IMDb Top-Rated Movies</h1>
        <p className="text-gray-100">Most loved 20 movies of all time</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
  {movies.map((movie) => (
    <div
      key={movie.id}
      className="group bg-gray-200 rounded-2xl shadow-md overflow-hidden transform transition duration-300 scale-80 hover:scale-85 hover:bg-white"
    >
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-80 h-80 object-cover transition duration-300 group-hover:brightness-50"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
        <p className="text-gray-600">{movie.release_date?.split("-")[0]}</p>
        <p className="text-yellow-500 font-bold">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Trending;
