import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";
import axios from "axios";

function Home() {
  const TMDB_apiKey = import.meta.env.VITE_TMDB_API;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef();

  const scrollTop = () => {
    try {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const fetchLatestMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_apiKey}`,
          {
            params: {
              page: page,
              region: "US",
            },
          }
        );
        if (response.data.results) {
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestMovies();
  }, [page]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-backgroundColor"
    >
      <NavigationBar currentPage="home" />
      <SearchBar />

      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-highlightColor text-3xl md:text-4xl mb-4">
            Latest Movies
          </h1>
          <hr className="border-highlightColor mb-6" />

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-white text-xl">Loading movies...</div>
            </div>
          ) : (
            <>
              {/* <h2 className="text-white text-xl md:text-2xl text-center mb-6">
                #{page}
              </h2> */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="cursor-pointer group bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-150 scale-80 hover:scale-85"
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-80 sm:h-80 object-cover transition duration-300 group-hover:brightness-50"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-700 flex items-center justify-center">
                        <span className="text-white">No poster available</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-white font-semibold truncate">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {movie.release_date?.split("-")[0] || "Unknown year"}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-400 font-bold mr-1">
                          ⭐
                        </span>
                        <span className="text-yellow-400 font-bold">
                          {movie.vote_average?.toFixed(1) || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={() => {
                    setPage((p) => Math.max(1, p - 1));
                    scrollTop();
                  }}
                  disabled={page === 1 || isLoading}
                  className={`px-4 py-2 rounded-md ${
                    page === 1 || isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-highlightColor hover:bg-highlightColorDark"
                  } text-white transition`}
                >
                  Previous
                </button>
                <span className="text-white px-4 py-2 bg-gray-700 rounded-md">
                  Page {page}
                </span>
                <button
                  onClick={() => {
                    setPage((p) => p + 1);
                    scrollTop();
                  }}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-md ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-highlightColor hover:bg-highlightColorDark"
                  } text-white transition`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
