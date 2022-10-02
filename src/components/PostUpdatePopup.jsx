import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function PostUpdatePopup() {
  const [textBody, setTextBody] = useState(``);
  const [mediaLink, setMediaLink] = useState(``);

  return (
    <aside className="bg-sea h-72 w-[80vw] lg:w-[50vw] flex flex-col gap-4 p-6 rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 modal-shadow">
      <div className="flex justify-between items-center">
        <p className="font-bold">Post an update!</p>

        <Link to={"/"}>
          <IoClose className="bg-marine rounded-md text-2xl text-sea active:translate-y-1" />
        </Link>
      </div>

      <textarea
        onChange={(e) => setTextBody(e.target.value)}
        className="bg-cream h-24 p-4 rounded-md text-choco text-xl resize-none outline-none"
        value={textBody}
        placeholder="Post an update about your pet. Max characters 110."
        required
      ></textarea>

      <input
        onChange={(e) => setMediaLink(e.target.value)}
        className="bg-cream h-10 p-2 rounded-md text-choco text-xl overflow-y-hidden resize-none outline-none"
        placeholder="Image link of your pet."
        value={mediaLink}
        required
      />

      <Link to={"/"} className="self-end">
        <button
          className="h-10 w-40 bg-marine rounded-md text-lg text-sea"
          type="button"
        >
          Post
        </button>
      </Link>
    </aside>
  );
}

export default PostUpdatePopup;
