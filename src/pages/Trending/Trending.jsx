import React from "react";
import "./Trending.css";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";

function Trending() {
  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <NavigationBar currentPage="trending" />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        Imbd Top-Rated
      </h1>
      <Footer />
    </div>
  );
}

export default Trending;
