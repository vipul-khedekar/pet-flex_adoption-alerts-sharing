import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Error() {
  return (
    <aside className="flex flex-col justify-center items-center gap-4 relative">
      <article>
        <p className="font-caveatBrush text-4xl">
          Whoops! Looks like you have came to the wrong page.
        </p>

        <p className="relative z-20 font-caveatBrush text-4xl text-center">
          This page doesn't exists.
        </p>
      </article>

      <footer>
        <Link to={`/`}>
          <button
            className="bg-marine px-4 py-2 mt-4 rounded-md text-sea text-xl"
            type="button"
          >
            Return Home
          </button>
        </Link>
      </footer>

      <IoPawSharp className="absolute z-10 top-8 right-24 text-choco text-7xl rotate-45" />

      <IoPawSharp className="absolute z-10 top-16 left-32 text-choco text-6xl -rotate-12" />
    </aside>
  );
}

export default Error;
