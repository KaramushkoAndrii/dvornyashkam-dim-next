// import { useTranslation } from "react-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

import { slideFromRight } from "@/app/_constants/animations";
import HelpList from "@/app/_data/helpList";
import Button from "@/app/_components/button/Button";
import { FaPaw } from "react-icons/fa";

import "./helpSection.scss";

const HelpSection = ({ btnText }) => {
  const { t } = { t: (x) => x }; // useTranslation();

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
          <Link to={"/help"}>
            <Button text={t(btnText)} />
          </Link>
        ) : null}
      </motion.div>
    </section>
  );
};

export default HelpSection;
