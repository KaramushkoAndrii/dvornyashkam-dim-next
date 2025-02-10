"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/constants/animations";
import AnimalCard from "@/components/AnimalCard/AnimalCard";
import dogsDB from "@/data/dogsDB";
import Button from "@/components/button/Button";

import "./searchSection.scss";

const SearchSection = () => {
  const t = useTranslations();

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
        <AnimalCard animal={currentAnimal} />
      </div>

      <motion.div className="search__button-group" {...slideFromBottom}>
        <Button
          text={t("buttons.rerol")}
          onClick={animalRerol}
          disabled={isAnimating}
        />
        <Link href="/about">
          <Button text={t("buttons.about")} />
        </Link>
      </motion.div>
    </section>
  );
};

export default SearchSection;
