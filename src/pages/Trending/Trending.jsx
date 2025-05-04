import React, { useEffect, useState } from "react";
import "./Trending.css";
import NavigationBar from "../../NavigationBar";
import axios from "axios";

const API_KEY = "fa0e2bfacce6d94257e6692c20cc2ac7";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Trending() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page); 
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Load next page
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-backgroundColor bg-cover">
      <NavigationBar currentPage="trending" />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2 mt-6">TMDB Top-Rated Movies</h1>
        <p className="text-gray-100">Most loved movies of all time</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="cursor-pointer group bg-gray-200 rounded-2xl shadow-md overflow-hidden transform transition duration-150 scale-80 hover:scale-85 hover:bg-white"
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

      {/* 👉 Load More Button */}
      <div className="text-center mt-6 mb-10">
        <button
          onClick={loadMore}
          disabled={isLoading}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-200"
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default Trending;
