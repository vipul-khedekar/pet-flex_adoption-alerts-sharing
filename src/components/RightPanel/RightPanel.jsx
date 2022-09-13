import SearchBar from "./SearchBar";
import AdoptionAlerts from "./AdoptionAlerts";

function RightPanel() {
  return (
    <section className="flex flex-col flex-[2] justify-start items-center gap-4">
      <SearchBar />

      <AdoptionAlerts />
    </section>
  );
}

export default RightPanel;
