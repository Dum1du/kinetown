import React from "react";
import "./Home.css";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <NavigationBar currentPage="home" />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        Home
      </h1>
      <Footer />
    </div>
  );
}

export default Home;
