function SearchBar() {
  return (
    <div className="border-none max-w-full items-center justify-center flex flex-col mt-20">
      <div className="search-bar flex items-start justify-start border-2 border-b-mainColor bg-white w-160 rounded-full">
        <input
          type="text"
          placeholder="Enter movie title and year"
          className="text-black w-160 flex justify-center px-10 py-2 border-none rounded-l-full focus:outline-none"
        />
        <text className="sButton bg-mainColor py-2 px-5 text-white border-none rounded-r-full hover:bg-amber-900 transition-colors cursor-pointer">
          Search
        </text>
      </div>
    </div>
  );
}

export default SearchBar;
