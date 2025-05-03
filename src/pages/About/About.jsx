import React from "react";
import "./About.css";
import NavigationBar from "../../NavigationBar";

function About() {
  return (
    <div className="flex flex-col min-h-screen w-auto ">
      <NavigationBar currentPage="about" />
      <h1 className="flex items-center justify-center h-screen text-9xl text-black">
        About
      </h1>
    </div>
  );
}

export default About;
