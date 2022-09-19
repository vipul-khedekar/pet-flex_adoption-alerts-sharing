import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function CreateAlertPopup() {
  return (
    <aside className="bg-sea h-72 w-[80vw] lg:w-[50vw] flex flex-col gap-4 p-6 rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 modal-shadow">
      <div className="flex justify-between items-center">
        <p className="font-bold">Create an adoption alert!</p>

        <Link to={"/"}>
          <IoClose className="bg-marine rounded-md text-2xl text-sea active:translate-y-1" />
        </Link>
      </div>

      <form className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-between items-center gap-4">
          <div>
            <label className="ml-2 text-sm" htmlFor="petName">
              Pet name
            </label>

            <input
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              type="text"
              id="petName"
              placeholder="Pet name"
              required
            />
          </div>

          <div>
            <label className="m-2 text-sm" htmlFor="animalType">
              Animal type
            </label>

            <input
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              type="text"
              id="animalType"
              placeholder="Animal type"
              required
            />
          </div>

          <div>
            <label className="m-2 text-sm" htmlFor="breedType">
              Breed type
            </label>

            <input
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              type="text"
              id="breedType"
              placeholder="Breed type"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label className="ml-2 text-sm" htmlFor="imageLink">
            Image link
          </label>

          <input
            className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
            type="text"
            id="imageLink"
            placeholder="Image link"
            required
          />
        </div>

        <Link to={"/"} className="self-end">
          <button
            className="bg-marine h-10 w-40 px-3 py-2 rounded-md text-lg text-sea"
            type="submit"
          >
            Alert
          </button>
        </Link>
      </form>
    </aside>
  );
}

export default CreateAlertPopup;
