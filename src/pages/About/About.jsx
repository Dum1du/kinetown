import React from "react";
import NavigationBar from "../../NavigationBar";
import Footer from "../../footer";
import SearchBar from "../../SearchBar";
import "./about.css";

function About() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <NavigationBar currentPage="about" />

      {/*Section 1 */}

      <section className="flex justify-center px-10 py-16 bg-backgroundColor text-center mt-10">
        <div className="max-w-xl flex flex-col items-center">
          {/* Logo */}
          <div className="w-[300px] mb-8">
            <img
              src="./src/assets/cowboyLogoTXT.png"
              alt="Logo"
              className="w-full"
            />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold mb-4 text-[#7e5653]">
            What We Do{" "}
          </h2>

          {/* Paragraph */}
          <p className="text-[#E4B165] text-lg">
            We specialize in generating high-quality, accurate subtitles for
            videos, ensuring accessibility, clarity, and a seamless viewing
            experience. Whether it's for films, educational content, or digital
            media, our platform empowers creators to reach wider audiences
            through precise and professionally crafted subtitles.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between px-10 py-16 bg-backgroundColor lg:gap-x-10 ">
        {/*Vision */}
        <div className="lg:w-1/2 p-5 bg-black/50 backdrop-blur-sm rounded-xl shadow-md  text-center mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-[#7e5653] pb-6">
            Our Vision
          </h2>
          <p className="text-[#E4B165] text-lg pb-3">
            To become the leading platform for seamless subtitle creation,
            bridging communication gaps and making video content universally
            understandable.
          </p>
        </div>
        {/*Mission */}
        <div className="lg:w-1/2 p-5 bg-black/50 backdrop-blur-sm rounded-xl shadow-md  text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#7e5653] pb-6">
            Our Mission
          </h2>
          <p className="text-[#E4B165] text-lg pb-3">
            Our mission is to empower creators with easy-to-use tools that
            deliver high-quality subtitles, promoting accessibility,
            inclusivity, and global reach for every piece of video content.
          </p>
        </div>
      </section>

      {/* Section 3 Team Members */}
      <section className="flex flex-col items-center justify-center  w-full bg-backgroundColor text-[#4E2E2b] px-4 py-20">
        <h1 className="text-4xl font-bold  text-[#7e5653]  mb-10">
          Meet Our Team
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10 group relative">
          {[
            {
              name: "Dumidu Prabashana",
              role: "Software Engineer",
              desc: "A visionary in UI/UX design, Dumidu led the front-end development with a focus on creating an intuitive and seamless user experience.",
              image: "./src/assets/DumiduPic.jpg",
            },
            {
              name: "Fathima Ishfa",
              role: "Software Engineer",
              desc: "Fathima ensured the platform's accessibility and multilingual support, enabling inclusive subtitle solutions for global audiences.",
              image: "./src/assets/",
            },
            {
              name: "Naveen Oshada",
              role: "Software Engineer",
              desc: "With strong backend expertise, Naveen architected the system’s core logic and database integrations for speed and reliability.",
              image: "./src/assets/naveenpic.jpeg",
            },
            {
              name: "Asitha Wijerathana",
              role: "Software Engineer",
              desc: "Asitha handled the automation and AI-powered features, streamlining subtitle generation with intelligent algorithms.",
              image: "./src/assets/",
            },
            {
              name: "Supun Ekanayake",
              role: "Software Engineer",
              desc: "Supun focused on performance optimization and deployment, ensuring the platform runs efficiently across all devices.",
              image: "./src/assets/s_png.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="relative group/crew cursor-pointer transition-all duration-500"
            >
              {/* Image Border and Hover Effects */}
              <div className="group-hover:blur-sm group-hover:brightness-75 group-hover:scale-95 transition-all duration-500 group-hover/crew:blur-none group-hover/crew:brightness-100 group-hover/crew:scale-110">
                <div className="group relative w-44 h-44 mx-auto">
                  <div className="rainbow-border-wrapper group-hover:animate-spin-to-cursor w-full h-full rounded-full p-[3px] bg-[conic-gradient(from_0deg_at_50%_50%,red,orange,yellow,green,blue,indigo,violet,red)]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="absolute z-10 bottom-[-140px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover/crew:opacity-100 transition-all duration-500 bg-yellow-900 text-white px-6 py-4 rounded-lg w-72 shadow-xl">
                <p className="font-bold text-xl">{member.name}</p>
                <p className="text-md">{member.role}</p>
                <p className="mt-2 text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Section 3 */}
      <section className="flex flex-col items-center justify-center px-10 py-16 bg-backgroundColor text-center space-y-6 ">
        {/* Logo */}
        <div className="w-[300px]">
          <img src="./logo-without-bg.png" alt="Logo" className="w-full " />
        </div>
        <section className=" bg-black/50 backdrop-blur-sm rounded-xl shadow-md px-8 py-8">
          {/* Note */}
          <h1 className="text-red-600 mb-8">Note!</h1>
          <p className="text-[#E4B165] text-lg max-w-xl">
            "Subtitles are aggregated from external sources and enhanced through
            automated translation. While optimized for accuracy, they may
            contain inconsistencies and should not be considered definitive."
          </p>

          <p className="text-[#E4B165] text-lg max-w-xl">
            © 2025 KineTown. All rights reserved.
          </p>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default About;
