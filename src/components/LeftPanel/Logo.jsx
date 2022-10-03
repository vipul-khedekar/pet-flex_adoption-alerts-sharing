import { IoMdPaw } from "react-icons/io";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <article className="bg-cream h-24 sm:w-60 lg:w-full flex justify-center items-center p-2 -mb-9 rounded-lg relative">
      <Link to={"/"}>
        <IoMdPaw className="text-7xl text-choco -rotate-45 absolute top-6 left-0 z-10" />
        <p className="text-5xl font-bold font-caveatBrush relative z-20">
          Pet Flex
        </p>
        <IoPaw className="text-7xl text-choco rotate-12 absolute top-0 right-0 z-10" />
      </Link>
    </article>
  );
}

export default Logo;
