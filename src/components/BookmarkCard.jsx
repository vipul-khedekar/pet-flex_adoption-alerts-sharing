function BookmarkCard(props) {
  const { id, petName, petType, location, mediaLink } = props.bookmarkData;

  return (
    <article className="flex justify-between items-center pr-4 rounded-md">
      <img
        className="h-16 w-16 rounded-l-md object-cover"
        src={mediaLink}
        alt={petName}
      />

      <div className="w-40 text-center">
        <p>{petName}</p>
        <p>{petType}</p>
      </div>

      <p>{location}</p>
    </article>
  );
}

export default BookmarkCard;
