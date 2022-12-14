import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar(props) {
  const { handleSearch, showAll } = props;

  const [searchQuery, setSearchQuery] = useState(``);

  return (
    <form
      onSubmit={(e) => handleSearch(e, searchQuery)}
      className="h-14 w-full bg-cream flex justify-center items-center p-2 rounded-lg relative island"
    >
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-sea p-2 pl-[3rem] pr-[5.25rem] rounded-md outline-none text-marine"
        value={searchQuery}
        placeholder="Search for pet names or types"
        type="text"
      />

      <IoMdSearch className=" bg-marine p-1 rounded-md absolute z-10 left-3 text-sea text-3xl" />

      <button
        onClick={() => showAll()}
        className="bg-marine px-2 py-1 rounded-md absolute z-10 right-3 text-sea text-sm"
        type="button"
      >
        Show All
      </button>
    </form>
  );
}

export default SearchBar;
