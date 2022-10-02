import { useState } from "react";

import SearchBar from "./SearchBar";
import AdoptionAlerts from "./AdoptionAlerts";
import AdoptionsList from "../../data/adoptionsList.json";

function RightPanel() {
  const [adoptionList, setAdoptionList] = useState(AdoptionsList);

  return (
    <section className="flex flex-col flex-[3] justify-start items-center gap-4">
      <SearchBar />

      <AdoptionAlerts adoptionList={adoptionList} />
    </section>
  );
}

export default RightPanel;
