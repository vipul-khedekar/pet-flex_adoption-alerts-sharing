import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

function Poster() {
  return (
    <section className="h-auto w-full bg-cream flex flex-col justify-between items-center gap-3 p-4 rounded-lg island">
      <Link to={`/home/create-post`}>
        <button
          className="bg-choco flex justify-center items-center gap-2 px-3 py-1 rounded-md text-sunny"
          type="button"
        >
          Post an update{" "}
          <MdOutlineTipsAndUpdates className="hidden lg:flex text-xl" />
        </button>
      </Link>

      <Link to={`/home/create-alert`}>
        <button
          className="bg-choco flex justify-center items-center gap-2 px-3 py-1 rounded-md text-base lg:text-sm text-sunny"
          type="button"
        >
          Create an adoption alert{" "}
          <AiOutlineNotification className="hidden lg:flex text-xl" />
        </button>
      </Link>
    </section>
  );
}

export default Poster;
