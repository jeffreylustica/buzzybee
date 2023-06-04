import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <form className="mb-10">
      <div className="relative">
        <HiSearch className="absolute w-5 h-5 top-1/2 -translate-y-1/2 ml-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-full pl-10"
        />
      </div>
    </form>
  );
};

export default Search;
