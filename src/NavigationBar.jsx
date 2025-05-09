import React, { useEffect, useState } from "react";
import logo from "./assets/cowboyLogoTXT.png";
import { Link } from "react-router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

//add genres if needed
const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Horror",
  "Sci-Fi",
];

function NavigationBar({ currentPage }) {
  const [isCLicked, setIsCLiked] = useState(true);
  const [width, setWIdth] = useState(window.innerWidth);
  const [menuDraw, setisMenuDrawed] = useState(false);

  useEffect(() => {
    const handleSize = () => setWIdth(window.innerWidth);

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const drawerBTN = () => {
    if (menuDraw === true) {
      setisMenuDrawed(false);
      console.log("drawer closed");
    } else {
      setisMenuDrawed(true);
      console.log("drawer opened");
    }
  };

  const menuBTN = () => {
    if (isCLicked === true) {
      setIsCLiked(false);
    } else {
      setIsCLiked(true);
    }
  };

  return (
    <nav className="h-13 sm:absolute sm:w-full border-b-2 border-[#E4B165] mb-2 bg-[#4B2E2B] w-full flex sm:items-center fixed z-100">
      <img
        src={logo}
        className="sm:h-10 sm:ml-6 absolute sm:left-4 h-7 ms-3 ml-5 mt-2.5"
      />

      {width < 750 && (
        <div className="z-70 fixed">
          {menuDraw ? (
            <div className="ms-23  mt-3  ">
              <IconButton className="" onClick={() => drawerBTN()}>
                <CloseIcon className="text-highlightColor border-2 border-highlightColor rounded-2xl" />
              </IconButton>
            </div>
          ) : (
            <div className="fixed right-4 mt-2">
              <MenuIcon onClick={() => drawerBTN()} className="text-white" />
            </div>
          )}
        </div>
      )}

      <ul
        className="flex flex-col sm:flex-row sm:space-x-8 text-white text-sm sm:text-base mx-auto  sm:items-center items-start z-50 fixed sm:relative right-0
       w-[80%] sm:w-fit pl-2 bg-mainColor sm:bg-none h-screen sm:h-auto gap-2.5 sm:gap-0 pt-18 sm:pt-0 pr-2 "
        style={{
          visibility:
            width < 750 ? (menuDraw ? "visible" : "hidden") : "visible",
        }}
      >
        <a
          href="/"
          className="hover:text-[#E4B165] sm:text-center sm:px-7 h-12 py-3 w-[100%] sm:w-40 pl-8 rounded-2xl sm:hover:bg-[#221514] sm:bg-none"
          style={{
            backgroundColor:
              (currentPage === "home" || width < 750) && "#221514",
            pointerEvents: currentPage === "home" ? "none" : "auto",
          }}
          onClick={() => drawerBTN()}
        >
          <li>Home</li>
        </a>

        {width < 750 ? (
          <li className="relative group w-[100%] pl-8 py-3 rounded-2xl bg-[#221514] sm:bg-none">
            <div
              className="sm:px-4 py-2  hover:text-[#E4B165] cursor-pointer"
              onClick={() => menuBTN()}
            >
              Categories{" "}
              {isCLicked ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>

            <div
              className="sm:absolute top-full left-0 sm:bg-[#4B2E2B] text-white rounded shadow-lg z-70 w-33 sm:opacity-0 
          sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:pointer-events-none transition-opacity duration-200"
            >
              {isCLicked && (
                <ul className="flex flex-col">
                  {genres.map((genre) => (
                    <a
                      href={`/categories/${genre}`}
                      onClick={() => drawerBTN()}
                    >
                      <li
                        key={genre}
                        className="block px-6 py-2 hover:bg-[#E4B165] hover:text-black w-33 hover:cursor-pointer"
                      >
                        {genre}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ) : (
          <li className="relative group">
            <div className="sm:px-4 py-2 hover:text-[#E4B165] cursor-pointer">
              Categories
            </div>

            <div
              className="sm:absolute top-full left-0 sm:bg-[#4B2E2B] text-white rounded shadow-lg z-70 w-33 sm:opacity-0 
          sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:pointer-events-none transition-opacity duration-200"
            >
              <ul className="flex flex-col">
                {genres.map((genre) => (
                  <a href={`/categories/${genre}`}>
                    <li
                      key={genre}
                      className="block px-4 py-2 hover:bg-[#E4B165] hover:text-black w-33 hover:cursor-pointer"
                    >
                      {genre}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </li>
        )}

        <Link
          to="/trendinglist"
          className="hover:text-[#E4B165] sm:text-center sm:px-7 h-12  w-[100%] pl-8 py-3 rounded-2xl hover:bg-[#221514] sm:bg-none"
          style={{
            backgroundColor:
              (currentPage === "trending" || width < 750) && "#221514",
            pointerEvents: currentPage === "trending" ? "none" : "auto",
          }}
          onClick={() => drawerBTN()}
        >
          <li>Top-Rated</li>
        </Link>
        <Link
          to="/about"
          className="hover:text-[#E4B165] sm:text-center sm:px-7 h-12 py-3 w-[100%] pl-8 rounded-2xl hover:bg-[#221514] sm:bg-none"
          style={{
            backgroundColor:
              (currentPage === "about" || width < 750) && "#221514",
            pointerEvents: currentPage === "about" ? "none" : "auto",
          }}
          onClick={() => drawerBTN()}
        >
          <li className="">About</li>
        </Link>
      </ul>
      {width < 750 && (
        <div
          className="bg-backgroundColor w-screen h-screen z-40 opacity-85"
          style={{ visibility: menuDraw ? "visible" : "hidden" }}
          onClick={() => drawerBTN()}
        ></div>
      )}
    </nav>
  );
}

export default NavigationBar;
