import { useState } from "react";

import AdoptionsList from "../../data/adoptionsList.json";

import SearchBar from "./SearchBar";
import AdoptionAlerts from "./AdoptionAlerts";

function RightPanel() {
  const [adoptionList, setAdoptionList] = useState(AdoptionsList);

  const handleSearch = (searchQuery) => {
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
  };

  const showAll = () => {
    setAdoptionList(AdoptionsList);
  };

  return (
    <section className="flex flex-col flex-[3] justify-start items-center gap-4">
      <SearchBar handleSearch={handleSearch} showAll={showAll} />

      {adoptionList.length !== 0 ? (
        <AdoptionAlerts adoptionList={adoptionList} />
      ) : (
        <article className="h-[87vh] w-full bg-cream flex justify-center items-center p-4 rounded-lg text-choco font-bold text-center">
          No matching results for the provided search query
        </article>
      )}
    </section>
  );
}

export default RightPanel;
