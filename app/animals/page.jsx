import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
} from "../../components/Animations";

import "./animalsPage.scss";

export default function AnimalsPage() {
  const { t } = useTranslation();

  return (
    <section className="animals__section">
      <div className="animals__header">
        <motion.h2 {...slideFromBottom}>{t("animals-page.title")}</motion.h2>
        <motion.p {...slideFromBottom}>
          {t("animals-page.description")}
        </motion.p>
      </div>
      <ul className="animals-content">
        {animalList.map((animal, i) => {
          const animation = i === 0 ? slideFromLeft : slideFromRight;

          return (
            <motion.li
              {...animation}
              key={animal.id}
              className={`animals-content__${animal.id}`}
            >
              <Link to={`${animal.src}`}>
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
