import { memo } from "react";

import AnimalCard from "@/app/_components/AnimalCard/AnimalCard";

import "./allAnimalsList.scss";

const AllAnimalsList = ({ list }) => {
  return (
    <>
      <ul className="allAnnimals__list">
        {list.map((item) => (
          <li key={item.id}>
            <AnimalCard animal={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(AllAnimalsList);
