import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookmarkCard from "../components/BookmarkCard";

function Bookmarks() {
  const dispatch = useDispatch();

  const bookmarkList = useSelector((state) => state.bookmarks);
  const [bookmarks, setBookmarks] = useState(bookmarkList);

  const removeBookmark = (id) => {
    const filteredList = bookmarks.filter((bookmark) => {
      return bookmark.id !== id;
    });

    setBookmarks(filteredList);
    dispatch({ type: `ADD_BOOKMARK`, bookmarks: bookmarks });
  };

  return (
    <aside className="bg-sea h-auto w-[80vw] lg:w-[50vw] flex flex-col gap-4 p-6 rounded-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 modal-shadow overflow-y-scroll">
      {bookmarks.length !== 0 ? (
        bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.id}
            bookmarkData={bookmark}
            removeBookmark={removeBookmark}
          />
        ))
      ) : (
        <p className="text-center font-bold">No bookmark added</p>
      )}
    </aside>
  );
}

export default Bookmarks;
