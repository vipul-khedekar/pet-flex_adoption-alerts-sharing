import Poster from "./Poster";
import Feed from "./Feed";

function CenterPanel() {
  return (
    <section className="flex flex-col flex-[2] justify-start items-center gap-6">
      <Poster />

      <Feed />
    </section>
  );
}

export default CenterPanel;
