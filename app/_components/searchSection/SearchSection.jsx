"use client";

import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/app/_constants/animations";
import AnimalCard from "@/app/_components/AnimalCard/AnimalCard";
import dogsDB from "@/app/_data/dogsDB";
import Button from "@/app/_components/button/Button";

import "./searchSection.scss";

const SearchSection = ({ isOpen }) => {
  const { t } = { t: (x) => x }; // useTranslation();

  const [currentAnimal, setCurrentAnimal] = useState(getRandomAnimal());
  const [isAnimating, setIsAnimating] = useState(false);

  function getRandomAnimal() {
    const randomAnimalIndex = Math.floor(Math.random() * dogsDB.length);

    return dogsDB[randomAnimalIndex];
  }

  const animalRerol = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setCurrentAnimal(getRandomAnimal());
        setIsAnimating(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="search">
      <h2 className="search__title">{t("search.title")}</h2>

      <div className={`card-container ${isAnimating ? "rotate" : ""}`}>
        <AnimalCard animal={currentAnimal} isOpen={isOpen} />
      </div>

      <motion.div className="search__button-group" {...slideFromBottom}>
        <Button
          text={t("buttons.rerol")}
          onClick={animalRerol}
          disabled={isAnimating}
        />
        <Link to={"/about"}>
          <Button text={t("buttons.about")} />
        </Link>
      </motion.div>
    </section>
  );
};

export default SearchSection;
