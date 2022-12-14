import PetCard from "../PetCard";

function AdoptionAlerts(props) {
  const { adoptionList } = props;

  return (
    <article className="h-[86.5vh] w-full bg-cream flex flex-wrap justify-start gap-4 p-4 lg:p-2 rounded-lg island overflow-y-scroll">
      {adoptionList &&
        adoptionList.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
    </article>
  );
}

export default AdoptionAlerts;
