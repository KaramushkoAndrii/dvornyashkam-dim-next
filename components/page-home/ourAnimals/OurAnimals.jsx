import AnimalsList from "@/components/animalsList/AnimalsList";

import "./ourAnimals.scss";

const OurAnimals = ({ data }) => {
  return (
    <section className="animals">
      {(data || []).map((item) => (
        <AnimalsList key={item.slug} data={item} />
      ))}
    </section>
  );
};

export default OurAnimals;
