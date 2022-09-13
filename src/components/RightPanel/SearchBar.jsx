import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <article className="h-14 w-full flex justify-center items-center p-2 rounded-lg relative">
      <input
        className="w-full p-2 pl-8 rounded-md"
        type="text"
        placeholder="Search for specific adoption alerts"
      />

      <IoMdSearch className="absolute left-3 text-2xl" />
    </article>
  );
}

export default SearchBar;
