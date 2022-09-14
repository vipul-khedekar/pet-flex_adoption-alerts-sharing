import PetPic from "../images/profile-picture.jpg";

function PetCard() {
  return (
    <div className="h-80 w-60 flex flex-col gap-2 border border-choco p-2 rounded-lg">
      <p className="text-center font-bold">Pet Name</p>

      <img
        className="h-64 w-56 rounded-lg object-cover"
        src={PetPic}
        alt="pet-pic"
      />

      <div className="flex justify-between items-center gap-4 px-4">
        <p>Cat</p>

        <p>Breed</p>
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
