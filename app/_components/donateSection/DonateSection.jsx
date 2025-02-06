"use client";

// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { slideFromBottom } from "@/app/_constants/animations";

import DonateList from "@/app/_data/donateList";

import "./donateSection.scss";

const DonateSection = () => {
  const { t } = { t: (x) => x }; // useTranslation();

  return (
    <motion.section
      {...slideFromBottom}
      viewport={{ once: false }}
      className="donate"
    >
      <h2 className="donate__title">{t("donate.title")}</h2>

      <ul className="donate__option">
        {DonateList.map((item, key) => (
          <li key={key}>
            <a href={item.src} target="_blank" rel="noopener noreferrer">
              <div className="img__container">
                <img src={item.logo} alt={`${item.name}logo`} />
              </div>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default DonateSection;
