"use client";

import { motion, delay } from "framer-motion";
// import YouTube from "react-youtube";

import { slideFromLeft } from "@/constants/animations";

import "./heroSection.scss";

const HeroSection = ({ data }) => {
  const { pageTitle, title, description } = data || {};

  return (
    <section className="hero">
      <h1 className="hidden">{pageTitle}</h1>
      <div className="hero__wrapper">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__content">
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
      </div>
    </section>
  );
};

export default HeroSection;
