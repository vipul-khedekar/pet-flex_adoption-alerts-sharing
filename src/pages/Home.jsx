import LeftPanel from "../components/LeftPanel/LeftPanel";
import CenterPanel from "../components/CenterPanel/CenterPanel";
import RightPanel from "../components/RightPanel/RightPanel";

function Home() {
  return (
    <main className="h-[100vh] w-[100vw] flex justify-between items-start gap-4 p-4">
      <LeftPanel />

      <CenterPanel />

      <RightPanel />
    </main>
  );
}

export default Home;
