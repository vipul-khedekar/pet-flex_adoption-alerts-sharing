import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <article className="bg-cream h-14 w-full flex justify-center items-center p-2 rounded-lg relative">
      <input
        className="bg-sea w-full p-2 pl-[2.25rem] pr-[5.25rem] rounded-md outline-none text-marine"
        type="text"
        placeholder="Search for specific adoption alerts"
      />

      <IoMdSearch className="absolute left-3 z-10 text-2xl" />

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
