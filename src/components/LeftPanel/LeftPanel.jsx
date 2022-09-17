import { Link } from "react-router-dom";

import Logo from "./Logo";
import Profile from "./Profile";
import Options from "./Options";
import Poster from "./Poster";

function LeftPanel() {
  return (
    <section className="flex flex-col flex-1 justify-start items-center gap-4">
      <Link to={"/"}>
        <Logo />
      </Link>

      <Profile />

      <Poster />

      <Options />
    </section>
  );
}

export default LeftPanel;
