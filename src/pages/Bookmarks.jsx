import { useSelector } from "react-redux";
import BookmarkCard from "../components/BookmarkCard";

function Bookmarks() {
  const bookmarkList = useSelector((state) => state.bookmarks);

  return (
    <aside className="bg-sea h-auto w-[80vw] lg:w-[50vw] flex flex-col gap-4 p-6 rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 modal-shadow overflow-y-scroll">
      {bookmarkList.map((bookmark) => (
        <BookmarkCard key={bookmark.id} bookmarkData={bookmark} />
      ))}
    </aside>
  );
}

export default Bookmarks;
