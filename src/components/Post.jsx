import DefaultProfilePic from "../images/profile-picture.jpg";
import Interactions from "./Interactions";

function Post() {
  return (
    <div className="flex flex-col gap-2 border-separate">
      <div className="flex justify-start items-center gap-2">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={DefaultProfilePic}
          alt="profile-pic"
        />

        <div>
          <p>Dummy Name</p>
          <p className="text-sm">@username</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start gap-2">
        <p>
          Hey, this is my cat. Look at my cat. This is the best cat in the
          world. Do you like it? Please like and comment!
        </p>

        <img
          className="h-40 w-full rounded-lg object-cover object-center"
          src={DefaultProfilePic}
          alt="content-pic"
        />
      </div>

      <Interactions />

      <hr className="border-[0.5px] border-choco" />
    </div>
  );
}

export default Post;
