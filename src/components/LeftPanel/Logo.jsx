import { IoMdPaw } from "react-icons/io";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <article className="h-24 sm:w-60 lg:w-full bg-cream flex justify-center items-center p-2 -mb-9 rounded-lg relative">
      <Link to={"/"}>
        <IoMdPaw className="text-choco text-7xl absolute z-10 top-6 left-0 -rotate-45" />

        <p className="font-caveatBrush text-5xl font-bold relative z-20">
          Pet Flex
        </p>

        <IoPaw className="text-choco text-7xl absolute z-10 top-0 right-0 rotate-12" />
      </Link>
    </article>
  );
}

export default Logo;
