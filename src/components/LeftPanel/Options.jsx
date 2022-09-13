import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoLogOutOutline,
  IoBookmarksOutline,
  IoPersonOutline,
} from "react-icons/io5";

function Options() {
  return (
    <article className="bg-cream h-16 sm:w-60 lg:w-full flex justify-evenly items-center rounded-lg">
      <IoPersonOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110" />

      <IoBookmarksOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110" />

      <IoMdNotificationsOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110" />

      <IoLogOutOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110" />
    </article>
  );
}

export default Options;
