"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
} from "@/constants/animations";

import { getAnimalsCategoryLink } from "@/utils";

import AnimalList from "@/data/animalList";

import "./animalsPage.scss";

export default function AnimalsPage() {
  const t = useTranslations();

  return (
    <section className="animals-page">
      <div className="animals-page__header">
        <motion.h2 {...slideFromBottom}>{t("animals-page.title")}</motion.h2>
        <motion.p {...slideFromBottom}>
          {t("animals-page.description")}
        </motion.p>
      </div>
      <ul className="animals-page__content">
        {AnimalList.map((animal, i) => {
          const animation = i === 0 ? slideFromLeft : slideFromRight;

          return (
            <motion.li
              {...animation}
              key={animal.id}
              className={`animals-content__${animal.id}`}
            >
              <Link href={getAnimalsCategoryLink(animal.src)}>
                <img src={animal.imgSrc} alt={animal.id} />
                <span>{t(`${animal.titleKey}`)}</span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
