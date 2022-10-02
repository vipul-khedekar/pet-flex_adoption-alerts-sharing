import { useState } from "react";

import PetCard from "../PetCard";
import AdoptionsList from "../../data/adoptionsList.json";

function AdoptionAlerts() {
  const [adoptionList, setAdoptionList] = useState(AdoptionsList);

  return (
    <article className="bg-cream h-[87vh] w-full flex flex-wrap justify-start gap-6 p-4 rounded-lg overflow-y-scroll">
      {adoptionList &&
        adoptionList.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
    </article>
  );
}

export default AdoptionAlerts;
