"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import "./figureContainer.scss";

const FigureContainer = ({ src, alt, text, ...props }) => {
  const t = useTranslations();

  return (
    <motion.figure {...props} className="figure-container">
      <img className="figure-container__img" src={src} alt={alt} />
      <figcaption className="figure-container__figcaption">{text}</figcaption>
    </motion.figure>
  );
};

export default FigureContainer;
