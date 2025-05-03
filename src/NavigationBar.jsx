import React from "react";
import logo from "./assets/cowboyLogoTXT.png";
import { Link } from "react-router";

//add genres if needed
const genres = ["Action", "Comody", "Drama", "Horror", "Romantic"];

function NavigationBar({ currentPage }) {
  return (
    <nav className="h-13 sm:absolute sm:w-full border-b-2 border-[#E4B165] mb-2 bg-[#4B2E2B] w-screen flex items-center relative">
      <img src={logo} className="h-10 ml-6 absolute left-4" />

      <ul className="flex space-x-8 text-white text-sm sm:text-base mx-auto items-center">
        <li
          style={{
            backgroundColor: currentPage === "home" && "#221514",
            pointerEvents: currentPage === "home" ? "none" : "auto",
          }}
          className="px-7 h-12 py-3"
        >
          <Link to="/" className="hover:text-[#E4B165]">
            Home
          </Link>
        </li>

        <li className="relative group">
          <div className="px-4 py-2 hover:text-[#E4B165] cursor-pointer">
            Categories
          </div>

          <div className="absolute top-full left-0 bg-[#4B2E2B] text-white rounded shadow-lg z-10 w-33 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200">
            <ul className="flex flex-col">
              {genres.map((genre) => (
                <li
                  key={genre}
                  className="block px-4 py-2 hover:bg-[#E4B165] hover:text-black"
                >
                  <Link to={`/categories/${genre}`}>{genre}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li
          style={{
            backgroundColor: currentPage === "trending" && "#221514",
            pointerEvents: currentPage === "trending" ? "none" : "auto",
          }}
          className="px-7 h-12 py-3"
        >
          <Link to="/trendinglist" className="hover:text-[#E4B165]">
            Top-Rated
          </Link>
        </li>
        <li
          style={{
            backgroundColor: currentPage === "about" && "#221514",
            pointerEvents: currentPage === "about" ? "none" : "auto",
          }}
          className="px-7 h-12 py-3"
        >
          <Link to="/about" className="hover:text-[#E4B165]">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
