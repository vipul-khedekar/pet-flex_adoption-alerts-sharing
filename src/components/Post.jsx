import ProfilePicDefault from "../images/profile-pic-default.webp";
import PostPicDefault from "../images/post-pic-default.webp";

import Interactions from "./Interactions";

function Post(props) {
  const { username, tag, body, mediaLink, comments } = props.post;

  return (
    <section className="flex flex-col gap-2 mb-5">
      <header className="flex justify-start items-center gap-2">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={ProfilePicDefault}
          loading="lazy"
          alt="profile-pic"
        />

        <div>
          <p className="font-bold">{username}</p>

          <p className="text-xs">{`@${tag}`}</p>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center gap-2">
        <p className="self-start ml-2">{body}</p>

        <img
          className="h-52 lg:h-[17rem] w-full rounded-lg object-cover object-center"
          src={mediaLink || PostPicDefault}
          loading="lazy"
          alt="content-pic"
        />
      </section>

      <Interactions comments={comments} mediaLink={mediaLink} />

      <hr className="border-[0.5px] border-choco" />
    </section>
  );
}

export default Post;
