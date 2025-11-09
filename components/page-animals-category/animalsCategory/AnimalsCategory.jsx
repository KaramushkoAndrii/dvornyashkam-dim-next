"use client";

import { useState, useCallback, useMemo } from "react";

import AllAnimalsList from "@/components/page-animals-category/allAnimalsList/AllAnimalsList";
import SearchFilter from "@/components/page-animals-category/searchFilter/SearchFilter";

import "./AnimalsCategory.scss";

const AnimalsCategory = ({ title, btnMoreTitle, data = [] }) => {
  const [visibleCards, setVisibleCards] = useState(4);

  const [filters, setFilters] = useState({
    age: "",
    size: "",
    gender: "",
    vaccine: false,
  });

  const filteredData = useMemo(() => {
    return data
      .filter((animal) => {
        if (filters.age) {
          const age = parseInt(animal.age, 10);
          switch (filters.age) {
            case "0-1":
              return age <= 1;
            case "1-3":
              return age > 1 && age <= 3;
            case "4-6":
              return age > 3 && age <= 6;
            case "7+":
              return age >= 7;
            default:
              return true;
          }
        }

        return true;
      })

      .filter((animal) => {
        if (filters.size) {
          const weight = parseInt(animal.weight, 10);
          switch (filters.size) {
            case "0-15":
              return weight <= 15;
            case "15-25":
              return weight > 15 && weight <= 25;
            case "25+":
              return weight > 25;
            default:
              return true;
          }
        }

        return true;
      })

      .filter((animal) => {
        return !filters.gender || animal.gender === filters.gender;
      })

      .filter((animal) => {
        return !filters.vaccine || animal.vaccine === filters.vaccine;
      });
  }, [data, filters]);

  const visibleData = useMemo(
    () => filteredData.slice(0, visibleCards),
    [filteredData, visibleCards]
  );

  const loadMoreAnimals = () => {
    setVisibleCards((prev) => prev + 4);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setVisibleCards(4);
  };

  return (
    <section className="animals-category">
      <h2 className="h2 animals-category__title">{title || "Category"}</h2>

      <SearchFilter onFilterChange={handleFilterChange} />

      <section className="animals-category__content">
        <AllAnimalsList list={visibleData} />
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
