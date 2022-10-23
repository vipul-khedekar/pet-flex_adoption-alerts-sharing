import ProfilePicGuest from "../../images/profile-pic-guest.webp";

function Profile() {
  const user = JSON.parse(localStorage.getItem(`currentUser`));

  return (
    <section className="h-60 sm:w-60 lg:w-full bg-cream p-4 mt-24 rounded-lg relative">
      <img
        className="h-52 w-52 rounded-lg absolute top-[-20%] left-[50%] translate-x-[-50%] object-cover"
        src={ProfilePicGuest}
        alt="profile-pic"
      />

      <div className="flex flex-col justify-center items-center gap-1 mt-40">
        <p className="text-xl font-bold">{user.username}</p>

        <p className="text-sm">{`(@${user.tag})`}</p>
      </div>
    </section>
  );
}

export default Profile;
