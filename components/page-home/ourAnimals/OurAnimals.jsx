import AnimalsList from "@/components/animalsList/AnimalsList";

import "./ourAnimals.scss";

const OurAnimals = ({ data }) => {
  return (
    <section className="animals">
      {Object.entries(data || {}).map(([key, item]) => (
        <AnimalsList key={key} category={key} dataList={item} />
      ))}
    </section>
  );
};

export default OurAnimals;
