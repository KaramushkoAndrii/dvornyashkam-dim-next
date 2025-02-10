"use client";

import { motion } from "framer-motion";

import { slideFromLeft } from "@/constants/animations";

import "./heroSection.scss";

const HeroSection = ({ data }) => {
  const { pageTitle, title, description } = data || {};

  return (
    <section className="hero">
      {/* // TO DO: move styles to the style file */}
      <h1 style={{ visibility: "hidden", position: "absolute" }}>
        {pageTitle}
      </h1>
      <motion.h2 {...slideFromLeft} className="hero__title">
        {title}
      </motion.h2>
      <h3 className="hero__description">{description}</h3>
    </section>
  );
};

export default HeroSection;
