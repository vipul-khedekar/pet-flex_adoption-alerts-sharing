import { IoPawSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 relative">
      <p className="font-caveatBrush text-4xl">
        Whoops! Looks like you have came to the wrong page.
      </p>

      <p className="text-center font-caveatBrush text-4xl relative z-20">
        This page doesn't exists.
      </p>

      <Link to={`/`}>
        <button
          className="bg-marine px-4 py-2 mt-4 rounded-md text-sea text-xl"
          type="button"
        >
          Return Home
        </button>
      </Link>

      <IoPawSharp className="absolute z-10 top-7 right-32 text-7xl text-choco rotate-45" />

      <IoPawSharp className="absolute z-10 top-20 left-32 text-6xl text-choco -rotate-12" />
    </main>
  );
}

export default Error;
