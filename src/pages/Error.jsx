import { IoPawSharp } from "react-icons/io5";

function Error() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 relative">
      <p className="text-3xl">
        Whoops! Looks like you have came to the wrong page.
      </p>

      <p className="text-center text-3xl relative z-20">
        This page doesn't exists.
      </p>

      <button
        className="bg-marine px-4 py-2 mt-4 rounded-md text-sea text-xl"
        type="button"
      >
        Return Home
      </button>

      <IoPawSharp className="absolute z-10 top-7 right-40 text-7xl text-choco rotate-45" />

      <IoPawSharp className="absolute z-10 top-24 left-60 text-6xl text-choco -rotate-12" />
    </main>
  );
}

export default Error;
