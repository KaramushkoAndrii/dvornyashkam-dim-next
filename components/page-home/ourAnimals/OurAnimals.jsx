import dogsDB from "@/app/_data/dogsDB";
import catsDB from "@/app/_data/catsDB";

import AnimalsList from "../../animalsList/AnimalsList";

import "./ourAnimals.scss";

const OurAnimals = () => {
  return (
    <section className="animals">
      <AnimalsList
        title={"lists-title.dogs"}
        dataList={dogsDB}
        btnText={"buttons.more-dogs"}
        src={"animals/dogs"}
      />
      <AnimalsList
        title={"lists-title.cats"}
        dataList={catsDB}
        btnText={"buttons.more-cats"}
        src={"animals/cats"}
      />
    </section>
  );
};

export default OurAnimals;
