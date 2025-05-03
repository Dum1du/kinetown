import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="bg-gray-400 flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className=" text-8xl text-black">404 Not Found Page</h1>
      <Link to="/" className="text-red-800 font-bold hover:cursor-pointer">
        Did you mean KineTown Home?
      </Link>
    </div>
  );
}

export default NotFound;
