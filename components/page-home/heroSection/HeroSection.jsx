"use client";

import { motion, delay } from "framer-motion";

import { slideFromLeft } from "@/constants/animations";

import "./heroSection.scss";

const HeroSection = ({ data }) => {
  const { pageTitle, title, description } = data || {};

  return (
    <section className="hero">
      <h1 className="hidden">{pageTitle}</h1>
      <motion.h2 {...slideFromLeft} className="hero__title h2">
        {title}
      </motion.h2>
      <motion.h3
        {...slideFromLeft}
        transition={{ ...slideFromLeft.transition, delay: 0.5 }}
        className="hero__description h3"
      >
        {description}
      </motion.h3>
    </section>
  );
};

export default HeroSection;
