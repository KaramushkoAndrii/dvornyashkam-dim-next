"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
} from "@/app/_constants/animations";

import AnimalList from "@/app/_data/animalList";

import "./animalsPage.scss";

export default function AnimalsPage() {
  const t = useTranslations();

  return (
    <section className="animals__section">
      <div className="animals__header">
        <motion.h2 {...slideFromBottom}>{t("animals-page.title")}</motion.h2>
        <motion.p {...slideFromBottom}>
          {t("animals-page.description")}
        </motion.p>
      </div>
      <ul className="animals-content">
        {AnimalList.map((animal, i) => {
          const animation = i === 0 ? slideFromLeft : slideFromRight;

          return (
            <motion.li
              {...animation}
              key={animal.id}
              className={`animals-content__${animal.id}`}
            >
              <Link href={`/animals/${animal.src}`}>
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
