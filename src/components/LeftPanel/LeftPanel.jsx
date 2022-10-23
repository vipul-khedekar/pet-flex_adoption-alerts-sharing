import Logo from "./Logo";
import Profile from "./Profile";
import Options from "./Options";
import Poster from "./Poster";

function LeftPanel() {
  return (
    <article className="flex flex-col flex-1 justify-start items-center gap-4">
      <Logo />

      <Profile />

      <Poster />

      <Options />
    </article>
  );
}

export default LeftPanel;
