import React, { useEffect, useRef, useState } from "react";
import "./Sorting.css";
import { useParams } from "react-router";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";
import axios from "axios";

function Sorted() {
  const TMDB_apiKey = import.meta.env.VITE_TMDB_API;
  const genreChecks = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Horror: 27,
    "Sci-Fi": 878,
  };
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const { genre } = useParams();
  const genID = genreChecks[genre];

  const containerRef = useRef();

  const scrollTop = () => {
    // Try multiple scroll targets
    try {
      // First try scrolling the container
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      // Then try scrolling the window
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // Fallback to instant scroll
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_apiKey}`,
          {
            params: {
              with_genres: genID,
              page: page,
              sort_by: "popularity.desc", // Get most popular action movies first
            },
          }
        );
        if (response.data.results) {
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen w-screen bg-backgroundColor overflow-y-auto"
    >
      <NavigationBar />
      <SearchBar />
      <div className="action-movies my-8 mx-auto">
        <div className="flex justify-between pr-6">
          <h1 className="text-highlightColor sm:text-4xl">
            Popular {genre} Movies
          </h1>
          <h1 className="text-white sm:text-2xl flex justify-center">
            #{page}
          </h1>
        </div>
        <hr className="text-highlightColor mb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer group bg-gray-200 rounded-2xl shadow-md overflow-hidden transform transition duration-150 scale-80 hover:scale-85 hover:bg-white"
            >
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-80 sm:h-80 object-cover transition duration-300 group-hover:brightness-50"
                />
              )}
              <div className="movie-info">
                <h3 className="text-lg font-semibold text-gray-800">
                  {movie.title}
                </h3>
                <p className="text-gray-600">
                  Release: {movie.release_date?.split("-")[0]}
                </p>
                <p className="text-yellow-500 font-bold">
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={() => {
              setPage((p) => Math.max(1, p - 1));
              scrollTop();
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-white">Page {page}</span>
          <button
            onClick={() => {
              setPage((p) => p + 1);
              scrollTop();
            }}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sorted;
