"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/constants/animations";
import AnimalCard from "@/components/AnimalCard/AnimalCard";
import Button from "@/components/button/Button";

import "./searchSection.scss";

const SearchSection = ({ data }) => {
  const { title, btnRerol, btnAbout, items } = data || {};

  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // TO DO: It's better if you use one type of function (arrow or regular)
  function getRandomAnimal() {
    const randomAnimalIndex = Math.floor(Math.random() * (items?.length || 0));

    return items?.[randomAnimalIndex];
  }

  const animalRerol = () => {
    setIsAnimating(true);
  };

  // The action will run once after the application is built.
  useEffect(() => {
    setCurrentAnimal(getRandomAnimal());
    setIsAnimating(false);
  }, []);

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
      <h2 className="search__title h2">{title}</h2>

      <div className={`search__container ${isAnimating ? "rotate" : ""}`}>
        <AnimalCard animal={currentAnimal} />
      </div>

      <motion.div className="search__button-group" {...slideFromBottom}>
        {btnRerol?.title && (
          <Button
            text={btnRerol.title}
            onClick={animalRerol}
            disabled={isAnimating}
            variant="search"
          />
        )}
        {btnAbout?.title && btnAbout?.href && (
          <Button text={btnAbout.title} href={btnAbout.href} variant="search" />
        )}
      </motion.div>
    </section>
  );
};

export default SearchSection;
