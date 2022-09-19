import { useState } from "react";
import {
  IoPawOutline,
  IoPaw,
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function Interactions(props) {
  const { comments } = props;

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

      <IoChatbubbleEllipsesOutline className="text-xl active:translate-y-1" />
      <p className="-ml-3 text-xs underline underline-offset-2">
        {comments.length}
      </p>

      <IoShareSocialOutline className="ml-auto text-xl active:translate-y-1" />
    </div>
  );
}

export default Interactions;
