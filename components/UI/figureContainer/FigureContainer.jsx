"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

import "./figureContainer.scss";

const FigureContainer = ({ src, alt, text, ...props }) => {
  const t = useTranslations();

  return (
    <motion.figure {...props} className="figure-container">
      <div className="figure-container__img-wrapper">
        <Image
          className="figure-container__img"
          src={src}
          alt={alt}
          fill={true}
        />
      </div>

      <figcaption className="figure-container__figcaption">{text}</figcaption>
    </motion.figure>
  );
};

export default FigureContainer;
