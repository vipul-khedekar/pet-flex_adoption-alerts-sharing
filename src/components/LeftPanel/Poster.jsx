import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

function Poster() {
  return (
    <article className="h-28 w-full bg-cream flex flex-col justify-between items-center gap-3 p-4 rounded-lg">
      <Link to={"/home/create-post"}>
        <button
          className="bg-choco flex justify-center items-center gap-2 text-sunny px-3 py-1 rounded-md"
          type="button"
        >
          Post an update{" "}
          <MdOutlineTipsAndUpdates className="hidden lg:flex text-2xl" />
        </button>
      </Link>

      <Link to={"/home/create-alert"}>
        <button
          className="bg-choco flex justify-center items-center gap-2 text-sunny px-3 py-1 rounded-md"
          type="button"
        >
          Create an adoption alert{" "}
          <AiOutlineNotification className="hidden lg:flex text-2xl" />
        </button>
      </Link>
    </article>
  );
}

export default Poster;