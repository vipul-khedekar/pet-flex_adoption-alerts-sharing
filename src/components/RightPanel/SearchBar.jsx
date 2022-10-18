import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar(props) {
  const { handleSearch, showAll } = props;

  const [searchQuery, setSearchQuery] = useState(``);

  return (
    <article className="bg-cream h-14 w-full flex justify-center items-center p-2 rounded-lg relative">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-sea w-full p-2 pl-[3rem] pr-[5.25rem] rounded-md outline-none text-marine"
        value={searchQuery}
        placeholder="Search for pet names or types"
        type="text"
      />

      <IoMdSearch
        onClick={() => handleSearch(searchQuery)}
        className=" bg-marine absolute p-1 left-3 z-10 rounded-md text-sea text-3xl"
      />

      <button
        onClick={() => showAll()}
        className="bg-marine text-sea text-sm px-2 py-1 rounded-md absolute z-10 right-3"
        type="button"
      >
        Show All
      </button>
    </article>
  );
}

export default SearchBar;
