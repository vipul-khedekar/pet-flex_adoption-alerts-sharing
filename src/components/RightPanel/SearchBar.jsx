import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar(props) {
  const { handleSearch } = props;

  const [searchQuery, setSearchQuery] = useState(``);

  return (
    <article className="bg-cream h-14 w-full flex justify-center items-center p-2 rounded-lg relative">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-sea w-full p-2 pl-[2.25rem] pr-[5.25rem] rounded-md outline-none text-marine"
        value={searchQuery}
        type="text"
        placeholder="Search for pet names or types"
      />

      <IoMdSearch
        onClick={() => handleSearch(searchQuery)}
        className="absolute left-3 z-10 text-2xl"
      />

      <button
        className="bg-marine text-sea text-sm px-2 py-1 rounded-md absolute z-10 right-3"
        type="button"
      >
        Show All
      </button>
    </article>
  );
}

export default SearchBar;
