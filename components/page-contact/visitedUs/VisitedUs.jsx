"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { appear } from "@/constants/animations";
import RulesList from "@/components/page-contact/rulesList/RulesList";

import "./visitedUs.scss";

const VisitedUs = ({ data }) => {
  const t = useTranslations();

  const {
    title,
    visitedHeader,
    visitedDate,
    rulesListData,
    rulesAccordionData,
  } = data;
  return (
    <motion.section {...appear} className="visited-us">
      <h2 className="h2 visited-us__title">{t(title)}</h2>
      <div className="visited-us__item">
        <p className="visited-us__item--header">{t(visitedHeader)}</p>
        <p className="visited-us__item--content">{t(visitedDate)}</p>
      </div>

      <RulesList data={rulesListData} accordionData={rulesAccordionData} />
    </motion.section>
  );
};

export default VisitedUs;
