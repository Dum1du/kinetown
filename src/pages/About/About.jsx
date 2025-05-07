import React from "react";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";

function About() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <NavigationBar currentPage="about" />
      <SearchBar />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        About
      </h1>
      <Footer />
    </div>
  );
}

export default About;
