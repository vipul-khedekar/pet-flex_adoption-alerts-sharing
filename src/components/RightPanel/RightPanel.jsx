import { useState } from "react";

import SearchBar from "./SearchBar";
import AdoptionAlerts from "./AdoptionAlerts";
import AdoptionsList from "../../data/adoptionsList.json";

function RightPanel() {
  const [adoptionList, setAdoptionList] = useState(AdoptionsList);

  function handleSearch(searchQuery) {
    if (searchQuery === ``) {
      return;
    }

    const searchResult = AdoptionsList.filter((pet) => {
      return (
        pet.petName.toLowerCase() === searchQuery.toLowerCase() ||
        pet.petType.toLowerCase() === searchQuery.toLowerCase()
      );
    });
    setAdoptionList(searchResult);
  }

  return (
    <section className="flex flex-col flex-[3] justify-start items-center gap-4">
      <SearchBar handleSearch={handleSearch} />

      <AdoptionAlerts adoptionList={adoptionList} />
    </section>
  );
}

export default RightPanel;
