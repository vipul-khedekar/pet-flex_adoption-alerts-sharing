import DefaultProfilePic from "../../images/profile-picture.jpg";

function Profile() {
  const user = JSON.parse(localStorage.getItem(`currentUser`));

  return (
    <article className="bg-cream h-60 sm:w-60 lg:w-full p-4 mt-24 rounded-lg relative">
      <img
        className="h-52 w-52 object-cover rounded-lg absolute top-[-20%] left-[50%] translate-x-[-50%]"
        src={DefaultProfilePic}
        alt="profile-pic"
      />

      <div className="flex flex-col justify-center items-center gap-1 mt-40">
        <p className="text-xl">{user.username}</p>

        <p className="text-sm">{`(@${user.tag})`}</p>
      </div>
    </article>
  );
}

export default Profile;
