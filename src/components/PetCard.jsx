import PetPic from "../images/profile-picture.jpg";

function PetCard(props) {
  const { petName, petType, location, mediaLink } = props.pet;

  return (
    <div className="h-80 w-60 flex flex-col gap-2 border border-choco p-2 rounded-lg">
      <p className="text-center font-bold">{petName}</p>

      <img
        className="h-36 w-56 rounded-lg object-cover scale-100 ease-in duration-150 hover:scale-105"
        src={mediaLink}
        alt="pet-pic"
      />

      <div className="flex justify-between items-center px-4">
        <p>{petType}</p>
        <p>{location}</p>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <button
          className="bg-choco px-3 py-1 rounded-md text-sunny"
          type="button"
        >
          Send message
        </button>

        <button
          className="bg-choco px-3 py-1 rounded-md text-sunny"
          type="button"
        >
          Bookmark
        </button>
      </div>
    </div>
  );
}

export default PetCard;
