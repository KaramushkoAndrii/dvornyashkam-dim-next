"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getRandomAnimal } from "@/lib/random";

import { slideFromBottom } from "@/constants/animations";
import AnimalCard from "@/components/common/AnimalCard/AnimalCard";
import Button from "@/components/UI/button/Button";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";
import useModalStore from "@/hooks/useModalStore";

import "./searchSection.scss";
// import { resolve } from "styled-jsx/css";

//DURATION MUST BE EQUAL DURATION IS CSS FILE
const ANIMATION_DURATION = 1000;

const SearchSection = ({ data, initialAnimal, locale }) => {
  const { title, btnRerol, btnAbout } = data || {};

  const [currentAnimal, setCurrentAnimal] = useState(initialAnimal);
  const [isAnimating, setIsAnimating] = useState(false);

  const animalRerol = async () => {
    setIsAnimating(true);

    const startTime = Date.now();

    try {
      const newAnimal = await getRandomAnimal(locale);
      const elapsedTime = Date.now() - startTime;

      const cycles = Math.max(1, Math.ceil(elapsedTime / ANIMATION_DURATION));

      const targetTime = cycles * ANIMATION_DURATION;

      const remainingTime = targetTime - elapsedTime;

      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      if (newAnimal) {
        setCurrentAnimal(newAnimal);
      }
    } catch (error) {
      console.log("Error rerol :", error);
    } finally {
      setIsAnimating(false);
    }
  };

  console.log(currentAnimal);

  return (
    <section className="search">
      <h2 className="search__title h2">{title}</h2>

      <div className={`search__container ${isAnimating ? "rotate" : ""}`}>
        {currentAnimal && <AnimalCard animal={currentAnimal} />}
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
