import Feed from "./Feed";

function CenterPanel() {
  return (
    <article className="flex flex-col flex-[2] justify-start items-center gap-4">
      <Feed />
    </article>
  );
}

export default CenterPanel;
