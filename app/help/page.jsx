"use client";

// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { slideFromLeft } from "@/app/_constants/animations";
import HelpListDetailed from "@/app/_components/helpListDetailed/HelpListDetailed";

import HelpListDetailedData from "@/app/_data/helpListDetailedData";
import HelpPageData from "@/app/_data/helpPageData";

import "./helpPage.scss";

export default function HelpPage() {
  const { t } = { t: (x) => x }; // useTranslation();

  const { title, description, HelpSection } = HelpPageData || {};

  return (
    <section className="help__page">
      <header className="help__header">
        <motion.h2 {...slideFromLeft}>{t(title)}</motion.h2>
        <motion.p {...slideFromLeft}>{t(description)}</motion.p>
      </header>
      <HelpSection />

      <ul className="help__detailed">
        <HelpListDetailed
          dataList={HelpListDetailedData}
          translationGroup={"help-list-detailed"}
        />
      </ul>
    </section>
  );
}
