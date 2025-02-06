// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Counter from "@/app/_components/Counter";
import {
  slideFromRight,
  slideFromLeft,
  scale,
} from "@/app/_components/Animations";
import AboutList from "@/app/_data/aboutList";
import AboutListItem from "@/app/_data/aboutInfoList";

import "./aboutSection.scss";

const AboutSection = () => {
  const { t } = { t: (x) => x }; // useTranslation();

  return (
    <section className="about">
      <h2 className="about__title">{t("about.title")}</h2>
      <motion.p className="about__description" {...slideFromLeft}>
        {t("about.description")}
      </motion.p>

      <div className="about__info">
        <motion.ul {...slideFromRight} className="about__info-list">
          {AboutListItem.map((item, key) => (
            <li key={key} className="about__info-list--item">
              {item.symbol ? item.symbol : null}
              <Counter
                startValue={0}
                endValue={parseInt(item.count.replace(/\D/g, ""), 10)}
                duration={2}
              />
              <span>{t(`${item.text}`)}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.ul className="about__list" {...scale}>
        {AboutList.map((item, key) => (
          <li key={key} className="about__item">
            <h3 className="about__item--title">
              {t(`about-list.${item.title}`)}
            </h3>
            <p className="about__item--content">
              {t(`about-list.${item.content}`)}
            </p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default AboutSection;
