// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Accordion from "@/app/_components/accordion/Accordion";
import Button from "@/app/_components/button/Button";
import { slideFromLeft, slideFromBottom } from "@/app/_constants/animations";

import AdviseAccordionData from "@/app/_data/adviseAccordionData";

import "./advisePage.scss";

export default function AdvisePage() {
  const { t } = { t: (x) => x }; // useTranslation();

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
