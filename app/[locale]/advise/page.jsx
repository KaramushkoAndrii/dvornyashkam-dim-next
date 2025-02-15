"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import useModalStore from "@/hooks/useModalStore";
import Accordion from "@/components/accordion/Accordion";
import Button from "@/components/button/Button";
import { slideFromLeft, slideFromBottom } from "@/constants/animations";

import AdviseAccordionData from "@/data/adviseAccordionData";

import "./advisePage.scss";

export default function AdvisePage() {
  const t = useTranslations();

  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal();
  };

  return (
    <section className="advise__page">
      <motion.h2 {...slideFromLeft} className="h1 h2">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={AdviseAccordionData} />

      <motion.p {...slideFromBottom} className="advise__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={openHandler} />
    </section>
  );
}
