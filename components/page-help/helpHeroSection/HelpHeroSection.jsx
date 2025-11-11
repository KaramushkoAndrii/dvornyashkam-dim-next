"use client";

import { motion } from "framer-motion";
import { slideFromLeft, heroAnimationX } from "@/constants/animations";
import HelpSection from "@/components/common/helpSection/HelpSection";
import HelpListItem from "../helpListDetailed/HelpListItem";
import "./helpHeroSection.scss";

const HelpHeroSection = ({ content, helpData, items }) => {
  const { title, description } = content;

  return (
    <section className="help-page">
      <header className="help-page__header">
        <motion.h2 {...slideFromLeft} {...heroAnimationX} className="h2">
          {title}
        </motion.h2>
        <motion.p {...slideFromLeft} {...heroAnimationX}>
          {description}
        </motion.p>
      </header>
      <HelpSection data={helpData} />

      <ul className="help-page__detailed">
        {items?.map((item, index) => (
          <HelpListItem
            key={`help-list-detailed-${index}`}
            data={item}
            index={index}
            translationGroup={"help-list-detailed"}
          />
        ))}
      </ul>
    </section>
  );
};

export default HelpHeroSection;
