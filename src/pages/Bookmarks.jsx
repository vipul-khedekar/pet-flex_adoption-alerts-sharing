import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    dispatch({ type: `ADD_BOOKMARK`, bookmarks: filteredList });
  };

  return (
    <aside className="h-auto w-[80vw] lg:w-[50vw] bg-sea flex flex-col justify-center items-center gap-4 p-6 rounded-2xl absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] modal-shadow overflow-y-scroll">
      {bookmarks.length !== 0 && (
        <header>
          <h3 className="text-2xl font-bold">Bookmarks</h3>
        </header>
      )}

      <article className="w-full flex flex-col gap-2">
        {bookmarks.length !== 0 ? (
          bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              bookmarkData={bookmark}
              removeBookmark={removeBookmark}
            />
          ))
        ) : (
          <p className="text-lg font-bold text-center">No bookmark added</p>
        )}
      </article>

      <footer className="self-end">
        <Link to={`/`}>
          <button
            className="h-10 w-40 bg-marine rounded-md text-sea text-lg"
            type="button"
          >
            Go Back
          </button>
        </Link>
      </footer>
    </aside>
  );
}

export default Bookmarks;
