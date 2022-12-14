import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AdoptionsList from "../data/adoptionsList.json";

function PetCard(props) {
  const dispatch = useDispatch();

  const { id, petName, petType, location, mediaLink } = props.pet;

  const bookmarks = useSelector((state) => state.bookmarks);
  const [bookmarkList, setBookmarkList] = useState(bookmarks);

  const addBookmark = (id) => {
    if (bookmarkList.length > 0) {
      for (let i = 0; i < bookmarkList.length; i++) {
        if (bookmarkList[i].id === id) {
          return;
        }
      }
    }

    const newBookmarks = AdoptionsList.find((pet) => {
      return pet.id === id;
    });
    bookmarkList.unshift(newBookmarks);

    setBookmarkList(bookmarkList);
    dispatch({
      type: `ADD_BOOKMARK`,
      bookmarks: bookmarkList,
    });
  };

  return (
    <section className="h-80 lg:w-56 flex flex-col gap-2 p-2 border border-choco rounded-lg">
      <p className="font-bold text-center">{petName}</p>

      <img
        className="h-36 w-56 lg:w-52 rounded-lg object-cover scale-100 ease-in duration-150 hover:scale-105"
        src={mediaLink}
        loading="lazy"
        alt="pet-pic"
      />

      <div className="flex justify-between items-center px-4">
        <p>{petType}</p>

        <p>{location}</p>
      </div>

      <section className="flex flex-col gap-2 px-4">
        <button
          className="bg-choco px-3 py-1 rounded-md text-sunny"
          type="button"
        >
          Send message
        </button>

        <button
          onClick={() => addBookmark(id)}
          className="bg-choco px-3 py-1 rounded-md text-sunny"
          type="button"
        >
          Bookmark
        </button>
      </section>
    </section>
  );
}

export default PetCard;
