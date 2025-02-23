import { memo } from "react";

import AnimalCard from "@/components/AnimalCard/AnimalCard";

import "./allAnimalsList.scss";

const AllAnimalsList = ({ list }) => {
  return (
    <>
      <ul className="all-animals__list">
        {list.map((item) => (
          <li key={item.id} className="all-animals__item">
            <AnimalCard animal={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(AllAnimalsList);
