"use client";

import { useState, useCallback, useMemo } from "react";

import AllAnimalsList from "@/components/page-animals-category/allAnimalsList/AllAnimalsList";
import SearchFilter from "@/components/page-animals-category/searchFilter/SearchFilter";

import "./AnimalsCategory.scss";

const AnimalsCategory = ({ title, btnMoreTitle, data = [] }) => {
  const [visibleCards, setVisibleCards] = useState(4);

  const visibleData = useMemo(
    () => data.slice(0, visibleCards),
    [data, visibleCards]
  );

  const loadMoreAnimals = () => {
    setVisibleCards((prev) => prev + 4);
  };

  return (
    <section className="animals-category">
      <h2 className="h2 animals-category__title">{title || "Category"}</h2>

      <SearchFilter />

      <section className="animals-category__content">
        {data.length > 0 ? (
          <AllAnimalsList list={visibleData} />
        ) : (
          <p className="no-results">За вашим запитом тварин не знайдено</p>
        )}
      </section>

      {visibleCards < data.length && (
        <button className="animals-category__more" onClick={loadMoreAnimals}>
          {btnMoreTitle || "More"}
        </button>
      )}
    </section>
  );
};

export default AnimalsCategory;
