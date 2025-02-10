"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Accordion from "@/components/accordion/Accordion";
import Button from "@/components/button/Button";
import { slideFromLeft, slideFromBottom } from "@/app/_constants/animations";

import AdviseAccordionData from "@/app/_data/adviseAccordionData";

import "./advisePage.scss";

export default function AdvisePage() {
  const t = useTranslations();

  return (
    <section className="advise__page">
      <motion.h2 {...slideFromLeft} className="page__title">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={AdviseAccordionData} />

      <motion.p {...slideFromBottom} className="advise__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={(evt) => console.log(evt)} />
    </section>
  );
}
