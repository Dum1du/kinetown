import React, { useState, useEffect } from "react";

function MovieSkel() {
  const [showtext, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000); // Show text after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <div className="mt-20 flex flex-col items-center text-center ">
      <div className="flex flex-col items-center blur-sm opacity-50 relative">
        <div className="h-4 w-20 bg-gray-200 animate-pulse"></div>
        <div className="h-100 w-75 my-2 bg-gray-200 animate-pulse rounded-2xl"></div>
        {/* Language selector */}
        <div className="mb-4 flex flex-col items-center ">
          <div className="block h-4 bg-gray-200 w-20 animate-pulse"></div>
        </div>

        <div className="sm:flex sm:gap-2 sm:flex-wrap">
          <div className="bg-gray-200 w-35 h-7 mb-4 rounded-2xl animate-pulse"></div>
          <div className="bg-gray-200 w-35 h-7 rounded-2xl animate-pulse"></div>
        </div>
      </div>
      <div className="animate-pulse mt-30 flex items-center absolute">
        {showtext && (
          <h3 className="font-rubikDirt text-2xl font-bold text-[#e4b165]">
            Hold yer horses!
          </h3>
        )}
      </div>
    </div>
  );
}

export default MovieSkel;
