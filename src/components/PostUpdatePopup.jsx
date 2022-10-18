import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function PostUpdatePopup() {
  const [textBody, setTextBody] = useState(``);
  const [mediaLink, setMediaLink] = useState(``);

  return (
    <aside className="h-72 w-[80vw] lg:w-[50vw] bg-sea flex flex-col gap-4 p-6 rounded-2xl absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] modal-shadow">
      <div className="flex justify-between items-center">
        <p className="font-bold">Post an update!</p>

        <Link to={"/"}>
          <IoClose className="bg-marine rounded-md text-sea text-2xl active:translate-y-1" />
        </Link>
      </div>

      <textarea
        onChange={(e) => setTextBody(e.target.value)}
        className="h-24 bg-cream p-4 rounded-md outline-none text-choco text-xl resize-none"
        value={textBody}
        placeholder="Post an update about your pet. Max characters 110."
        required
      ></textarea>

      <input
        onChange={(e) => setMediaLink(e.target.value)}
        className="h-10 bg-cream p-2 rounded-md outline-none text-choco text-xl overflow-y-hidden resize-none"
        placeholder="Image link of your pet."
        value={mediaLink}
        required
      />

      <Link to={"/"} className="self-end">
        <button
          className="h-10 w-40 bg-marine rounded-md text-sea text-lg"
          type="button"
        >
          Post
        </button>
      </Link>
    </aside>
  );
}

export default PostUpdatePopup;
