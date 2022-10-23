import { IoRemoveCircleSharp } from "react-icons/io5";

function BookmarkCard(props) {
  const { id, petName, petType, location, mediaLink } = props.bookmarkData;
  const removeBookmark = props.removeBookmark;

  return (
    <section className="flex justify-between items-center pr-4 border border-marine rounded-md">
      <img
        className="h-16 w-16 rounded-l-md object-cover"
        src={mediaLink}
        loading="lazy"
        alt={petName}
      />

      <section className="w-[55%] flex justify-between gap-8">
        <p className="w-14">{petName}</p>

        <p className="w-14">{petType}</p>

        <p className="w-14">{location}</p>
      </section>

      <IoRemoveCircleSharp
        onClick={() => removeBookmark(id)}
        className="text-2xl"
      />
    </section>
  );
}

export default BookmarkCard;
