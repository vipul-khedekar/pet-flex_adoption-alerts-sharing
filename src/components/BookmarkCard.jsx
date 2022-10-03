import { IoRemoveCircleSharp } from "react-icons/io5";

function BookmarkCard(props) {
  const { id, petName, petType, location, mediaLink } = props.bookmarkData;
  const removeBookmark = props.removeBookmark;

  return (
    <article className="flex justify-between items-center pr-4 rounded-md">
      <img
        className="h-16 w-16 rounded-l-md object-cover"
        src={mediaLink}
        alt={petName}
      />

      <p className="w-14">{petName}</p>

      <p className="w-14">{petType}</p>

      <p className="w-14">{location}</p>

      <IoRemoveCircleSharp
        onClick={() => removeBookmark(id)}
        className="text-2xl"
      />
    </article>
  );
}

export default BookmarkCard;
