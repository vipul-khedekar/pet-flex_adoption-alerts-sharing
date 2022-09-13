import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoLogOutOutline,
  IoBookmarksOutline,
  IoPersonOutline,
} from "react-icons/io5";

function Options() {
  return (
    <article className="bg-cream h-16 w-64 flex justify-evenly items-center rounded-lg">
      <IoPersonOutline className="text-2xl scale-100 ease-in duration-150 hover:scale-110" />

      <IoBookmarksOutline className="text-2xl scale-100 ease-in duration-150 hover:scale-110" />

      <IoMdNotificationsOutline className="text-2xl scale-100 ease-in duration-150 hover:scale-110" />

      <IoLogOutOutline className="text-2xl scale-100 ease-in duration-150 hover:scale-110" />
    </article>
  );
}

export default Options;
