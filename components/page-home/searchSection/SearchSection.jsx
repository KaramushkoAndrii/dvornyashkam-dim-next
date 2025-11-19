"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/constants/animations";
import AnimalCard from "@/components/common/AnimalCard/AnimalCard";
import Button from "@/components/UI/button/Button";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";
import useModalStore from "@/hooks/useModalStore";

import "./searchSection.scss";

const SearchSection = ({ data, animals }) => {
  // const {
  //   title,
  //   btnRerol,
  //   btnAbout,
  //   items: { data: items = [] } = {},
  // } = data || {};
  const { title, btnRerol, btnAbout } = data || {};

  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // TO DO: It's better if you use one type of function (arrow or regular)
  function getRandomAnimal() {
    const randomAnimalIndex = Math.floor(
      Math.random() * (animals?.length || 0)
    );

    return animals?.[randomAnimalIndex];
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
        <Button
          text={btnRerol}
          onClick={animalRerol}
          disabled={isAnimating}
          variant="search"
        />
        <Button text={btnAbout} href="/about" variant="search" />
      </motion.div>
    </section>
  );
};

export default SearchSection;
