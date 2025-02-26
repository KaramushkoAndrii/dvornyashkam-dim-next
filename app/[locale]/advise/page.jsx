"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import useModalStore from "@/hooks/useModalStore";
import Accordion from "@/components/UI/accordion/Accordion";
import Button from "@/components/UI/button/Button";
import { slideFromLeft, slideFromBottom } from "@/constants/animations";

import adviseAccordionData from "@/data/adviseAccordionData";

import "./page.scss";

export default function AdvisePage() {
  const t = useTranslations();

  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal();
  };

  return (
    <section className="advise-page">
      <motion.h2 {...slideFromLeft} className="title h2">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={adviseAccordionData} />

      <motion.p {...slideFromBottom} className="advise-page__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={openHandler} variant="advice" />
    </section>
  );
}
