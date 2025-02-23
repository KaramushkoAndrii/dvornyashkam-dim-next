"use client";

import { motion } from "framer-motion";

import { slideFromRight } from "@/constants/animations";

import Button from "@/components/button/Button";
import { FaPaw } from "react-icons/fa";

import "./helpSection.scss";

const HelpSection = ({ data }) => {
  const { title, description, btn, items } = data || {};

  return (
    <section className="help">
      <motion.div {...slideFromRight} className="help__content">
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
        <ul className="help-list">
          {items.map((item, key) => (
            <li className="help-list__item" key={key}>
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
