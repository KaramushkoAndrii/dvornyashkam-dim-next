"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromLeft } from "@/constants/animations";
import HelpListItem from "@/components/helpListDetailed/HelpListItem";
import HelpSection from "@/components/common/helpSection/HelpSection";

import items from "@/app/_data/helpListDetailedData";
import pageData from "@/app/_data/helpPageData";

import "./helpPage.scss";

export default function HelpPage() {
  const t = useTranslations();

  const { title, description } = pageData || {};

  return (
    <section className="help__page">
      <header className="help__header">
        <motion.h2 {...slideFromLeft}>{t(title)}</motion.h2>
        <motion.p {...slideFromLeft}>{t(description)}</motion.p>
      </header>
      <HelpSection />

      <ul className="help__detailed">
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
