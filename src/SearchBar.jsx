import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="w-full flex justify-center sm:h-auto h-10 px-6 sm:px-4 mt-20">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex  sm:flex-row bg-white border-2 border-b-mainColor rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="Enter movie title and year"
          className="flex-3 px-6 py-3 text-black border-none focus:outline-none rounded-t-full sm:rounded-t-none sm:rounded-l-full"
        />
        <button
          type="submit"
          className="sButton bg-mainColor  px-6 sm:py-3 text-white hover:bg-amber-900 transition-colors "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
