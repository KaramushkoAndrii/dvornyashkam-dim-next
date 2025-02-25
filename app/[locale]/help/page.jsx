"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromLeft } from "@/constants/animations";
import HelpListItem from "@/components/page-help/helpListDetailed/HelpListItem";
import HelpSection from "@/components/common/helpSection/HelpSection";

import items from "@/data/helpListDetailedData";
import pageData from "@/data/helpPageData";
import dataHelpList from "@/data/helpList";

import "./page.scss";

export default function HelpPage() {
  const t = useTranslations();

  const { title, description } = pageData || {};

  // TO DO: get DATA for HelpSection from API
  const dataHelpSection = {
    title: t("help-section.title"),
    description: t("help-section.description"),
    items: dataHelpList.map((item) => ({ text: t(item) })),
  };

  return (
    <section className="help-page">
      <header className="help-page__header">
        <motion.h2 {...slideFromLeft} className="h2">
          {t(title)}
        </motion.h2>
        <motion.p {...slideFromLeft}>{t(description)}</motion.p>
      </header>
      <HelpSection data={dataHelpSection} />

      <ul className="help-page__detailed">
        {items.map((item, index) => (
          <HelpListItem
            key={`help-list-detailed-${index}`}
            data={item}
            index={index}
            translationGroup={"help-list-detailed"}
          />
        ))}
      </ul>
    </section>
  );
}
