import React from "react";
import "./Sorting.css";
import { useParams } from "react-router";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";

function Sorted() {
  const { genre } = useParams();
  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <NavigationBar />
      <SearchBar />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        {genre} Movies
      </h1>
      <Footer />
    </div>
  );
}

export default Sorted;
