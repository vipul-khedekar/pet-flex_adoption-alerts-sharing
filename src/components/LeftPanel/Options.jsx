import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoLogOutOutline,
  IoBookmarksOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Options() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: `TOGGLE_ACTIVE`, isUserActive: false });
    localStorage.setItem(`userActive`, JSON.stringify(false));
    localStorage.removeItem(`currentUser`);
  };

  return (
    <article className="h-14 sm:w-60 lg:w-full bg-cream flex justify-evenly items-center rounded-lg">
      <IoPersonOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110 active:translate-y-1" />

      <Link to={`/bookmarks`}>
        <IoBookmarksOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110 active:translate-y-1" />
      </Link>

      <Link to={`/notifications`}>
        <IoMdNotificationsOutline className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110 active:translate-y-1" />
      </Link>

      <IoLogOutOutline
        onClick={() => handleLogout()}
        className="text-2xl scale-100 ease-in duration-150 cursor-pointer hover:scale-110 active:translate-y-1"
      />
    </article>
  );
}

export default Options;
