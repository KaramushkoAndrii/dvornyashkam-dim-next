"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

import { slideFromRight } from "@/constants/animations";
import HelpList from "@/data/helpList";
import Button from "@/components/button/Button";
import { FaPaw } from "react-icons/fa";

import "./helpSection.scss";

const HelpSection = ({ btnText }) => {
  const t = useTranslations();

  return (
    <section className="help">
      <motion.div {...slideFromRight} className="help__content">
        <h2>{t("help-section.title")}</h2>
        <p>{t("help-section.description")}</p>
        <ul>
          {HelpList.map((item, key) => (
            <li key={key}>
              <FaPaw />
              <span>{t(`${item}`)}</span>
            </li>
          ))}
        </ul>

        {btnText ? (
          <Link href="/help">
            <Button text={t(btnText)} />
          </Link>
        ) : null}
      </motion.div>
    </section>
  );
};

export default HelpSection;
