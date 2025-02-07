import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Accordion from "../../components/accordion/Accordion";
import Button from "../../components/button/Button";
import { slideFromLeft, slideFromBottom } from "../../components/Animations";

import AdviseAccordionData from "./data/adviseAccordionData";

import "./advisePage.scss";

export default function AdvisePage() {
  const { t } = useTranslation();

  return (
    <section className="advise__page">
      <motion.h2 {...slideFromLeft} className="page__title">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={AdviseAccordionData} />

      <motion.p {...slideFromBottom} className="advise__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={isOpen} />
    </section>
  );
}
