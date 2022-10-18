import { useState } from "react";
import {
  IoPawOutline,
  IoPaw,
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function Interactions(props) {
  const { comments, mediaLink } = props;

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex justify-start items-center gap-4 px-2">
      {isLiked ? (
        <IoPaw
          onClick={() => toggleLike()}
          className="text-xl active:translate-y-1"
        />
      ) : (
        <IoPawOutline
          onClick={() => toggleLike()}
          className="text-xl active:translate-y-1"
        />
      )}

      <div
        className="flex items-center gap-1"
        to={`/home/post/${mediaLink.substr(112)}/comments`}
      >
        <IoChatbubbleEllipsesOutline className="text-xl active:translate-y-1" />

        <p className="text-xs underline underline-offset-2">
          {comments.length}
        </p>
      </div>

      <IoShareSocialOutline className="ml-auto text-xl active:translate-y-1" />
    </div>
  );
}

export default Interactions;
