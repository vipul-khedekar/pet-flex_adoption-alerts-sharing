import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function CreateAlertPopup() {
  const navigateTo = useNavigate();

  const [petName, setPetName] = useState(``);
  const [petType, setPetType] = useState(``);
  const [location, setLocation] = useState(``);
  const [mediaLink, setMediaLink] = useState(``);

  const handleSubmit = () => {
    setPetName(``);
    setPetType(``);
    setLocation(``);
    setMediaLink(``);
    setTimeout(() => {
      navigateTo(`/`);
    }, 1200);
  };

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
              onChange={(e) => setPetName(e.target.value)}
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              value={petName}
              type="text"
              id="petName"
              placeholder="Pet name"
              required
            />
          </div>

          <div>
            <label className="m-2 text-sm" htmlFor="petType">
              Pet Type
            </label>

            <input
              onChange={(e) => setPetType(e.target.value)}
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              value={petType}
              type="text"
              id="petType"
              placeholder="Pet type"
              required
            />
          </div>

          <div>
            <label className="m-2 text-sm" htmlFor="location">
              Location
            </label>

            <input
              onChange={(e) => setLocation(e.target.value)}
              className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
              value={location}
              type="text"
              id="Location"
              placeholder="Location"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label className="ml-2 text-sm" htmlFor="imageLink">
            Image link
          </label>

          <input
            onChange={(e) => setMediaLink(e.target.value)}
            className="bg-cream h-10 w-full p-2 -mt-1 rounded-md text-choco text-xl outline-none"
            value={mediaLink}
            type="text"
            id="imageLink"
            placeholder="Image link"
            required
          />
        </div>

        <div className="flex justify-between items-center gap-20">
          <button
            onClick={() => handleSubmit()}
            className="bg-marine h-10 w-40 px-3 py-2 rounded-md text-lg text-sea"
            type="submit"
          >
            Alert
          </button>
        </div>
      </form>
    </aside>
  );
}

export default CreateAlertPopup;
