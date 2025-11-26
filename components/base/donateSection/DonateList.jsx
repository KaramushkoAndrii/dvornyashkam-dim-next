"use client";

import { motion } from "framer-motion";
import { slideFromBottom } from "@/constants/animations";
import { useTranslations } from "next-intl";

const DonateList = ({ donateList }) => {
  const t = useTranslations();

  const { DonateItem } = donateList;
  return (
    <motion.section
      {...slideFromBottom}
      viewport={{ once: false }}
      className="donate"
    >
      <h2 className="donate__title h2">{t("donate.title")}</h2>

      <ul className="donate__list">
        {DonateItem.map((item) => (
          <li className="donate__item" key={item.id}>
            <a
              className="donate__link"
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="donate__img-container">
                <img
                  className="donate__img"
                  src={item.logo.url}
                  alt={`${item.name}logo`}
                />
              </div>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default DonateList;
