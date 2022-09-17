import { IoClose } from "react-icons/io5";

function PostUpdatePopup() {
  return (
    <aside className="bg-sea h-72 w-[80vw] lg:w-[50vw] flex flex-col gap-4 p-6 rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 modal-shadow">
      <div className="flex justify-between items-center">
        <p className="font-bold">Post an update!</p>

        <IoClose className="bg-marine rounded-md text-2xl text-sea active:translate-y-1" />
      </div>

      <textarea
        className="bg-cream h-24 p-4 rounded-md text-choco text-xl resize-none outline-none"
        placeholder="Post an update about your pet. Max characters 110."
        required
      ></textarea>

      <input
        className="bg-cream h-10 p-2 rounded-md text-choco text-xl overflow-y-hidden resize-none outline-none"
        placeholder="Image link of your pet."
        required
      />

      <button
        className="h-10 w-40 bg-marine rounded-md self-end text-lg text-sea"
        type="button"
      >
        Post
      </button>
    </aside>
  );
}

export default PostUpdatePopup;
