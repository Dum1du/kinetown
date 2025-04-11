import React, { useState, useEffect } from "react";
import axios from "axios";
import "@fontsource/playfair-display";
import logo from "./assets/cowboyLogoTXT.png";
import "./App.css";
import DownloadBtn from "./DownloadBtn";
import { SpiningLoadingSmall, SpiningLoadingNormal } from "./SpiningLoading";
import MovieSkel from "./MovieSkel";
import PirateBtn from "./PirateBtn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";

const OMDB_URL = "https://www.omdbapi.com/";
const OMBD_apiKey = import.meta.env.VITE_OMBD_API;
const TMDB_apiKey = import.meta.env.VITE_TMDB_API;
const TMDB_URL = "https://api.themoviedb.org/3/movie/now_playing";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function SubtitleSearch() {
  //mail things
  const email = "dumidu.prabashana01@gmail.com";
  const subject = "moviezone.free.nf - idea about the app";
  const body =
    "Hello,\n\nI have an idea for the app...\n\nBest regards,\n[Your Name]";

  //normal web tasks
  const [query, setQuery] = useState("");
  const [subtitleName, setSubtitleName] = useState("");
  const [downloadLinks, setDownloadLinks] = useState({});
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("si");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [poster, setPostter] = useState(null);
  const [resultLoadig, setResultLoading] = useState(false);
  const [downloadType, setDownloadType] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);

  //recent movies
  const [recentMovie, setRecentMovie] = useState([]);
  const [loadingRecent, setLoadingRecent] = useState(false);

  //mail navigation
  const handleMailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  //Search Suggestions
  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        setLoading(true);
        try {
          const searchRes = await axios.get(OMDB_URL, {
            params: {
              apiKey: OMBD_apiKey,
              s: query,
            },
          });

          if (searchRes.data.Search) {
            console.log("search data found");
            setSuggestions(searchRes.data.Search);
          } else {
            console.log("search data notfound");
            setSuggestions([]);
          }
        } catch (error) {
          console.log("Error fetching data:", error);
          setSuggestions([]);
        } finally {
          setLoading(false);
        }
      };
      const debounce = setTimeout(fetchSuggestions, 500);
      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  //slideshow
  useEffect(() => {
    console.log("slideshow use effect started");
    const fetchRecentMovies = async () => {
      setLoadingRecent(true);
      console.log("started to load recents");
      try {
        const tmbdres = await axios.get(TMDB_URL, {
          params: {
            api_key: TMDB_apiKey,
            lang: "en-US",
            page: 1,
          },
        });
        setRecentMovie(tmbdres.data.results);
        console.log("Results got", tmbdres.data.results);
      } catch (error) {
        console.log("Error showing movies ", error);
      } finally {
        setLoadingRecent(false);
      }
    };
    fetchRecentMovies();
  }, []);

  const suggestionClick = (suggestion) => {
    setQuery(`${suggestion.Title} ${suggestion.Year}`);
    setSuggestions([]);
  };
  const slideItemClick = (movie) => {
    setQuery(`${movie.title} ${movie.release_date.substring(0, 4)}`);
  };

  const handleSearch = async () => {
    setSuggestions([]);
    if (!query) {
      setError("Please enter a movie title");
      setTimeout(() => setError(null), 700);
      return;
    }
    setResultLoading(true);

    window.scrollBy({ top: 500, behavior: "smooth" });

    try {
      // Step 1: Fetch from your backend
      const response = await axios.get(
        "https://subtitle-world-production.up.railway.app/search", //production
        // "http://localhost:5002/search",
        {
          params: { query },
        }
      );

      await fetchMoviePoster(query);
      setQuery("");
      console.log("API Response:", response.data);

      // Step 2: Update state
      setSubtitleName(response.data.subtitleName || "");
      setDownloadLinks(response.data.downloads || {});
      setDownloadType(response.data.type);

      console.log("State After Update (Incorrect):", {
        subtitleName,
        downloadLinks,
      }); // Debugging log

      setError(null);
    } catch (err) {
      console.error("Search Error:", err);
      setError("No subtitles found");
      setSubtitleName("");
      setDownloadLinks({});
      alert(`Sorry Couldn't find subtitle for : ${query}`);
      setQuery("");

      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setResultLoading(false);
    }
  };

  //fetch poster
  const fetchMoviePoster = async (movieName) => {
    try {
      const cleanMovieName = (name) =>
        name.replace(/\s*(\(|\[)?\d{4}(\)|\])?$/, "").trim();
      const extractYear = (name) => {
        const yearMatch = name.match(/\b(19|20)\d{2}\b/);
        return yearMatch ? yearMatch[0] : null;
      };

      const tmdbResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          cleanMovieName(movieName)
        )}&year=${extractYear(movieName)}&api_key=${TMDB_apiKey}`
      );
      const data = await tmdbResponse.json();

      if (!tmdbResponse.ok)
        throw new Error(data.status_message || "TMDB API error");

      if (data.results?.length > 0) {
        const posterUrl = `${TMDB_IMAGE_URL}${data.results[0].poster_path}`;
        setPostter(posterUrl);
      } else {
        console.log("Movie not found on TMDB");
        setPostter(null);
      }
    } catch (err) {
      console.error("TMDB Poster Fetch Error:", err);
      setPostter(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <div className="flex-25  selection:bg-cyan-200   px-4 flex flex-col items-center  w-[100%] bg-backgroundColor h-screen  pb-10">
        <nav className=" h-13  sm:absolute sm:w-[100%] border-b-2 border-[#E4B165] mb-2 bg-[#4B2E2B] w-screen flex items-center justify-center">
          <img src={logo} className="h-10" />
        </nav>

        <div className="z-1 h-55 flex slideshow mt-4 sm:mt-20 w-full max-w-2xl mx-auto overflow-hidden sm:max-w-[100%] sm:w-screen sm:h-55">
          {loadingRecent ? (
            <p className="dark:text-white">Loading movies...</p>
          ) : (
            <div className="poster flex   sm:max-w-[100%] sm:w-screen sm:h-100">
              {recentMovie.map((movie) => (
                <img
                  key={movie.id}
                  src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => slideItemClick(movie)}
                  className="rounded-2xl mx-2 sm:h-[50%] 
                hover:h-[52%] hover:border-2 hover:border-b-[#e4b165] 
                hover:border-x-[#cde465] hover:border-t-white dark:hover:border-t-backgroundColor cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>

        <div className="z-1 searchField h-45  mt-80 items-center flex flex-col absolute">
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter movie title and year"
              className="flex-1 p-2 border w-2xs  border-[#4B2E2B] border-y-2 rounded-l-lg bg-white"
            />
            <button
              onClick={handleSearch}
              type="submit"
              disabled={resultLoadig}
              className=" disabled:bg-gray-700 disabled:text-[14px] disabled:cursor-not-allowed px-4 py-2.5 bg-[#4B2E2B] text-[#E4B165] rounded-r-lg hover:bg-[#382320]  border-0 h-11 w-22"
            >
              {resultLoadig ? "Searching" : "Search"}
            </button>
          </div>
          <div>
            {error && <h3 className="text-red-700">{error}</h3>}
            {loading && (
              <div className="mt-5">
                <SpiningLoadingSmall />
              </div>
            )}
            {suggestions.length > 0 && (
              <ul className="scrollBar h-30 w-50 mr-20 sm:w-73 sm:mr-18 shadow-2xl">
                {suggestions.map((suggestion) => (
                  <li
                    className=" text-[12px] bg-white p-2.5 m-0.5  hover:opacity-100 cursor-pointer hover:bg-blue-500 hover:text-white"
                    key={suggestion.imdbID}
                    onClick={() => suggestionClick(suggestion)}
                  >
                    {suggestion.Title} ({suggestion.Year})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {resultLoadig && <MovieSkel />}
        {/* pirate download */}
        {downloadType === "pirate" &&
          !resultLoadig &&
          downloadLinks &&
          typeof downloadLinks === "object" &&
          Object.keys(downloadLinks).length > 0 && (
            <div className="mt-25 flex flex-col items-center text-center relative ">
              <h2 className="text-lg dark:text-white font-semibold">
                {subtitleName}
              </h2>
              <img
                src={poster}
                alt="Poster could't find"
                className="h-100 w-67 my-2 rounded-2xl dark:border-[#E4B165] border-4 dark:text-gray-400"
              />

              <div className="sm:flex sm:gap-2 sm:flex-wrap">
                {Object.entries(downloadLinks).map(([type, link]) => {
                  console.log("Rendering button for:", type, link); // Debugging log
                  if (typeof link !== "string" || !link.startsWith("http")) {
                    console.warn("Invalid link format:", link);
                    return null;
                  }
                  return <PirateBtn link={link} />;
                })}
              </div>
            </div>
          )}
        {/* auto download */}
        {!resultLoadig &&
          (downloadType === "openSub" || downloadType === "subdl") &&
          downloadLinks &&
          typeof downloadLinks === "object" &&
          Object.keys(downloadLinks).length > 0 && (
            <div className="mt-25 flex flex-col items-center text-center relative">
              <h2 className="text-lg dark:text-white font-semibold">
                {subtitleName}
              </h2>
              <img
                src={poster}
                alt="Poster could't find"
                className="h-100 w-67 my-2 rounded-2xl border-[#E4B165] border-4 dark:text-gray-400"
              />
              {/* Language selector */}
              <div className="mb-4 flex flex-col items-center ">
                <label
                  htmlFor="language-selector"
                  className="block text-sm dark:text-white font-medium"
                >
                  Select Language:
                </label>
                <select
                  id="language-selector"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-1 block items-center w-50 dark:text-white dark:bg-backgroundColor border border-gray-300 p-2 rounded-md"
                >
                  <option value="si">Sinhala</option>
                  <option value="en">English</option>
                  {/* Add other languages as needed */}
                </select>
              </div>

              <div className="sm:flex sm:gap-2 sm:flex-wrap">
                {Object.entries(downloadLinks).map(([type, link]) => {
                  console.log("Rendering button for:", type, link); // Debugging log
                  if (typeof link !== "string" || !link.startsWith("http")) {
                    console.warn("Invalid link format:", link);
                    return null;
                  }

                  return (
                    <DownloadBtn
                      key={`${type}-${link}`}
                      type={type}
                      language={language}
                      link={link}
                      subtitleName={subtitleName}
                      isActive={!activeBtn || activeBtn === type}
                      onSelect={(isPressed) => {
                        if (isPressed) {
                          setActiveBtn(type);
                        } else {
                          setActiveBtn(null);
                        }
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        {!resultLoadig &&
          downloadType === "subdl" &&
          downloadLinks &&
          typeof downloadLinks === "object" &&
          Object.keys(downloadLinks).length > 0 && (
            <p className="dark:text-[#D3C6B8] mt-5 text-center relative">
              Recommend to download the suitable file for your video file type
            </p>
          )}
      </div>
      <div className="flex-0.5 footer flex  flex-col sm:flex-row">
        <footer className="bg-[#4B2E2B] h-fit w-auto py-2 px-4 sm:px-2">
          <div className="flex flex-col sm:flex-row sm:mb-4">
            <div className="disclaimer flex-2 ">
              <h2 className="text-[#E4B165] text-center sm:text-2xl">Note!</h2>
              <p className="text-white text-center sm:mb-4">
                "Subtitles are aggregated from external sources and enhanced
                through automated translation. While optimized for accuracy,
                they may contain inconsistencies and should not be considered
                definitive."
              </p>
            </div>
            <hr className="bg-[#E4B165] mx-5 my-3 h-0.5" />
            <div className="contact flex-1">
              <h2 className="text-gray-300 text-center mt-2  text-[14px]">
                Meet the Developer :
              </h2>
              <div className="icons mb-3 flex  items-center justify-evenly mx-15 sm:border-l-1 sm:pl-5 sm:border-[#E4B165]">
                <IconButton onClick={handleMailClick}>
                  <MailOutlineIcon className="text-amber-50" />
                </IconButton>
                <IconButton href="https://github.com/Dum1du" target="_blank">
                  <GitHubIcon className="text-amber-50" />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/dumidu-prabashana-6bab75286/"
                  target="_blank"
                >
                  <LinkedInIcon className="text-amber-50" />
                </IconButton>
                <IconButton
                  href="https://web.facebook.com/dumidu.mahara/"
                  target="_blank"
                >
                  <FacebookIcon className="text-amber-50" />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-center text-[12px]">
              © {new Date().getFullYear()} MovieZone. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
