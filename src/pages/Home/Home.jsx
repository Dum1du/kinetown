import React from "react";
import "./Home.css";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <NavigationBar currentPage="home" />
      <SearchBar />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        Home
      </h1>
      <Footer />
    </div>
  );
}

export default Home;
