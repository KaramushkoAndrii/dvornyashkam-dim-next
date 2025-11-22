"use client";

import { motion } from "framer-motion";
import FigureContainer from "../../UI/figureContainer/FigureContainer";
import {
  slideFromLeft,
  slideFromRight,
  heroAnimationX,
} from "@/constants/animations";

const AboutHero = ({ data }) => {
  const { title, aboutUsList } = data || {};
  return (
    <section className="about-page">
      <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
        {title}
      </motion.h2>
      <ul className="about-page__list">
        {aboutUsList.map((item, key) => {
          const heroItem = key === 0 ? heroAnimationX : null;
          const slideText = key % 2 === 0 ? slideFromLeft : slideFromRight;
          const slideImg = key % 2 === 0 ? slideFromRight : slideFromLeft;

          return (
            <motion.li key={item.id} className="about-page__item">
              <motion.p
                className="about-page__text"
                {...slideText}
                {...heroItem}
              >
                {item.text}
              </motion.p>
              <FigureContainer
                {...slideImg}
                {...heroItem}
                src={item.img.url}
                alt={item.alt}
                text={item.alt}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default AboutHero;
