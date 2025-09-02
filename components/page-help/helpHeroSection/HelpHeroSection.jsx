"use client";

import { motion } from "framer-motion";
import { slideFromLeft, heroAnimationX } from "@/constants/animations";
import HelpSection from "@/components/common/helpSection/HelpSection";
import HelpListItem from "../helpListDetailed/HelpListItem";
import "./helpHeroSection.scss";

const HelpHeroSection = ({ content, helpData, items }) => {
  const { title, description } = content;

  //   console.log(helpData);

  return (
    <>
      <header className="help-page__header">
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
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
    </>
  );
};

export default HelpHeroSection;
