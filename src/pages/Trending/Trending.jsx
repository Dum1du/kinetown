import React from "react";
import "./Trending.css";
import NavigationBar from "../../NavigationBar";

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDJlLWFmNTEtODM1ZmRlN2RhZDIwXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    poster: "",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/71pV2hduj5L._AC_SY679_.jpg",
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/71NHMZD0kkL._AC_SY679_.jpg",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDJlLWFmNTEtODM1ZmRlN2RhZDIwXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    poster: "",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/71pV2hduj5L._AC_SY679_.jpg",
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/71NHMZD0kkL._AC_SY679_.jpg",
  }
];

function Trending() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <NavigationBar currentPage="trending" />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-4">IMDb Top-Rated Movies</h1>
        <p className="text-gray-500">Most loved movies of all time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
              <p className="text-gray-600">{movie.year}</p>
              <p className="text-yellow-500 font-bold">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
