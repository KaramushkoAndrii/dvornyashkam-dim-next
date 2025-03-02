"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  heroAnimationY,
  heroAnimationX,
} from "@/constants/animations";

import { getAnimalsCategoryLink } from "@/utils";

import TransitionLink from "@/components/utils/TransitionLink";

import animalList from "@/data/animalList";

import "./page.scss";

export default function AnimalsPage() {
  const t = useTranslations();

  return (
    <section className="animals-page">
      <div className="animals-page__header">
        <motion.h2 className="title" {...slideFromBottom} {...heroAnimationY}>
          {t("animals-page.title")}
        </motion.h2>
        <motion.p
          className="animals-page__description"
          {...slideFromBottom}
          {...heroAnimationY}
        >
          {t("animals-page.description")}
        </motion.p>
      </div>
      <ul className="animals-page__content">
        {animalList.map((animal, i) => {
          const animation = i === 0 ? slideFromLeft : slideFromRight;

          return (
            <motion.li
              {...heroAnimationX}
              {...animation}
              key={animal.id}
              className={`animals-content__${animal.id}`}
            >
              <TransitionLink href={getAnimalsCategoryLink(animal.src)}>
                <img
                  className="animals-page__img"
                  src={animal.imgSrc}
                  alt={animal.id}
                />
                <span className="animals-page__category">
                  {t(`${animal.titleKey}`)}
                </span>
              </TransitionLink>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
