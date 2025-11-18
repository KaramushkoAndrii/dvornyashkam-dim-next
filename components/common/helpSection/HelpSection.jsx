"use client";

import { motion } from "framer-motion";

import { slideFromRight, heroAnimationX } from "@/constants/animations";

import Button from "@/components/UI/button/Button";
import { FaPaw } from "react-icons/fa";

import "./helpSection.scss";

const HelpSection = ({ data }) => {
  const { title, description, btn, helpListItem } = data || {};

  return (
    <section className="help">
      <motion.div
        {...slideFromRight}
        {...heroAnimationX}
        className="help__content"
      >
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
        <ul className="help-list">
          {helpListItem?.map((item) => (
            <li className="help-list__item" key={item.id}>
              <FaPaw className="help-list__icon" />
              <span className="help-list__description">{item.text}</span>
            </li>
          ))}
        </ul>

        {btn?.title && btn?.href && (
          <Button text={btn.title} href={btn.href} variant="help-list" />
        )}
      </motion.div>
    </section>
  );
};

export default HelpSection;
