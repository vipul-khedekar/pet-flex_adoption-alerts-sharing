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
    <aside className="h-auto w-[80vw] lg:w-[50vw] bg-sea flex flex-col gap-4 p-6 rounded-2xl absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] modal-shadow overflow-y-scroll">
      {bookmarks.length !== 0 ? (
        bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.id}
            bookmarkData={bookmark}
            removeBookmark={removeBookmark}
          />
        ))
      ) : (
        <p className="font-bold text-center">No bookmark added</p>
      )}
    </aside>
  );
}

export default Bookmarks;
