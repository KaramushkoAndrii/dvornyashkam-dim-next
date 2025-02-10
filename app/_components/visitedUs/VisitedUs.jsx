"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { appear } from "@/app/_constants/animations";
import RulesList from "@/app/_components/rulesList/RulesList";

import "./visitedUs.scss";

const VisitedUs = ({ data }) => {
  const t = useTranslations();

  const {
    title,
    visitedHeader,
    visitedDate,
    RulesListData,
    RulesAccordionData,
  } = data;
  return (
    <motion.section {...appear} className="visitedUs">
      <h2>{t(title)}</h2>
      <div className="visitedUs__item">
        <p className="visitedUs__item--header">{t(visitedHeader)}</p>
        <p className="visitedUs__item--content">{t(visitedDate)}</p>
      </div>

      <RulesList data={RulesListData} accordionData={RulesAccordionData} />
    </motion.section>
  );
};

export default VisitedUs;
