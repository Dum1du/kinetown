import React from "react";

function MovieSkel() {
  return (
    <div className="mt-20 flex flex-col items-center text-center blur-sm opacity-50 relative">
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
  );
}

export default MovieSkel;
