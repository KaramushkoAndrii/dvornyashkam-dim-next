"use client";

import { motion } from "framer-motion";

import Counter from "@/components/page-home/Counter";
import { slideFromRight, slideFromLeft, scale } from "@/constants/animations";

import "./aboutSection.scss";

const AboutSection = ({ data }) => {
  const { title, description, statistic, aboutItem } = data || {};

  return (
    <section className="about">
      <h2 className="about__title h2">{title}</h2>
      <motion.p className="about__description" {...slideFromLeft}>
        {description}
      </motion.p>

      <div className="about__info">
        <motion.ul {...slideFromRight} className="about__info-list">
          {statistic.map((item) => (
            <li key={item.id} className="about__info-list--item">
              {item.symbol ? item.symbol : null}
              <Counter startValue={0} endValue={+item.count} duration={2} />
              <span>{item.description}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.ul className="about__list" {...scale}>
        {aboutItem.map((item) => (
          <li key={item.id} className="about__item">
            <h3 className="about__item--title h3">{item.header}</h3>
            <p className="about__item--content">{item.description}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default AboutSection;
