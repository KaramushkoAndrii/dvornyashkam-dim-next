import { memo, useState } from "react";

import AnimalCard from "@/components/common/AnimalCard/AnimalCard";

import "./allAnimalsList.scss";

const AllAnimalsList = ({ list }) => {
  const [activeCard, setActiveCard] = useState(false);
  const mainClass = "all-animals__item";
  return (
    <>
      <ul className="all-animals__list">
        {list.map((item) => (
          <li
            key={item.id}
            // className={
            //   activeCard === item.id
            //     ? "all-animals__item--active"
            //     : "all-animals__item"
            // }

            className={`${mainClass} ${
              activeCard === item.id ? `${mainClass}--active` : ""
            }`}
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
            onTouchStart={() => setActiveCard(item.id)}
            onTouchEnd={() => setActiveCard(null)}
          >
            <AnimalCard animal={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(AllAnimalsList);
