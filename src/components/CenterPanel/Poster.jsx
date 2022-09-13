import { IoImageOutline } from "react-icons/io5";

function Poster() {
  return (
    <article className="h-36 w-full bg-cream flex flex-col justify-between items-center gap-3 p-4 rounded-lg">
      <textarea
        className="h-16 w-full p-2 rounded-lg resize-none"
        name="poster"
        id="poster"
        placeholder="Post an update or create an adoption alert"
      ></textarea>

      <div className="flex justify-between items-center gap-20">
        <IoImageOutline className="text-2xl justify-start scale-100 ease-in duration-150 cursor-pointer hover:scale-110" />

        <div className="flex justify-center items-center gap-4">
          <button
            className="bg-choco text-sunny px-3 py-1 rounded-md"
            type="button"
          >
            Post
          </button>

          <button
            className="bg-choco text-sunny px-3 py-1 rounded-md"
            type="button"
          >
            Alert
          </button>
        </div>
      </div>
    </article>
  );
}

export default Poster;
