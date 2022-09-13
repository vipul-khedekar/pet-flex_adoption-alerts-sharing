import SearchBar from "./SearchBar";
import AdoptionAlerts from "./AdoptionAlerts";

function RightPanel() {
  return (
    <section className="flex flex-col flex-[3] justify-start items-center gap-4">
      <SearchBar />

      <AdoptionAlerts />
    </section>
  );
}

export default RightPanel;
