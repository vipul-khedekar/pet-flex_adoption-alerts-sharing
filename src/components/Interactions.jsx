import {
  IoPawOutline,
  IoPaw,
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function Interactions() {
  return (
    <div className="flex justify-start items-center gap-4 px-2">
      {<IoPawOutline className="text-xl active:translate-y-1" /> || <IoPaw />}

      <IoChatbubbleEllipsesOutline className="text-xl active:translate-y-1" />
      <p className="-ml-3 text-xs underline underline-offset-2">{123}</p>

      <IoShareSocialOutline className="ml-auto text-xl active:translate-y-1" />
    </div>
  );
}

export default Interactions;
