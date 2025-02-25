"use client";

import { motion } from "framer-motion";

import Counter from "@/components/page-home/Counter";
import { slideFromRight, slideFromLeft, scale } from "@/constants/animations";

import "./aboutSection.scss";

const AboutSection = ({ data }) => {
  const { title, description, statistics, cards } = data || {};

  return (
    <section className="about">
      <h2 className="about__title h2">{title}</h2>
      <motion.p className="about__description" {...slideFromLeft}>
        {description}
      </motion.p>

      <div className="about__info">
        <motion.ul {...slideFromRight} className="about__info-list">
          {statistics.map((item, key) => (
            <li key={key} className="about__info-list--item">
              {item.symbol ? item.symbol : null}
              <Counter startValue={0} endValue={+item.count} duration={2} />
              <span>{item.text}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.ul className="about__list" {...scale}>
        {cards.map((item, key) => (
          <li key={key} className="about__item">
            <h3 className="about__item--title h3">{item.title}</h3>
            <p className="about__item--content">{item.description}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default AboutSection;
