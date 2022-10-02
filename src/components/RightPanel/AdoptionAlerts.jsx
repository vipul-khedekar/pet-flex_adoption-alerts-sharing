import PetCard from "../PetCard";

function AdoptionAlerts(props) {
  const { adoptionList } = props;

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
