import { useState } from "react";
import {
  IoPawOutline,
  IoPaw,
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function Interactions(props) {
  const { comments, mediaLink } = props;

  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

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

      <Link
        to={`/home/post/${mediaLink.substr(112)}/comments`}
        className="flex items-center gap-1"
      >
        <IoChatbubbleEllipsesOutline className="text-xl active:translate-y-1" />
        <p className="text-xs underline underline-offset-2">
          {comments.length}
        </p>
      </Link>

      <IoShareSocialOutline className="ml-auto text-xl active:translate-y-1" />
    </div>
  );
}

export default Interactions;
