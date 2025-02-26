"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight } from "@/constants/animations";
import FigureContainer from "@/components/UI/figureContainer/FigureContainer";

import aboutUsList from "@/data/aboutUsList";

import "./page.scss";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <section className="about-page">
      <motion.h2 {...slideFromLeft} className="title h2">
        {t("navigation.about_us")}
      </motion.h2>
      <ul className="about-page__list">
        {aboutUsList.map((item, key) => {
          const slideText = key % 2 === 0 ? slideFromRight : slideFromLeft;
          const slideImg = key % 2 === 0 ? slideFromLeft : slideFromRight;

          return (
            <li key={key} className="about-page__item">
              <FigureContainer
                {...slideImg}
                src={item.img}
                alt={item.alt}
                text={item.alt}
              />
              <motion.p className="about-page__text" {...slideText}>
                {t(`about-us-page.${item.text}`)}
              </motion.p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
