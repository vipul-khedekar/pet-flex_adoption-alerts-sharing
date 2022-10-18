import DefaultProfilePic from "../images/profile-picture.jpg";

import Interactions from "./Interactions";

function Post(props) {
  const { username, tag, body, mediaLink, comments } = props.post;

  return (
    <div className="flex flex-col gap-2 mb-5">
      <div className="flex justify-start items-center gap-2">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={DefaultProfilePic}
          alt="profile-pic"
        />

        <div>
          <p className="font-bold">{username}</p>

          <p className="text-xs">{`@${tag}`}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <p className="self-start ml-2">{body}</p>

        <img
          className="h-52 lg:h-[17rem] w-full rounded-lg object-cover object-center"
          src={mediaLink || DefaultProfilePic}
          alt="content-pic"
        />
      </div>

      <Interactions comments={comments} mediaLink={mediaLink} />

      <hr className="border-[0.5px] border-choco" />
    </div>
  );
}

export default Post;
