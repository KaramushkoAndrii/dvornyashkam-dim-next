"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { appear } from "@/constants/animations";
import RulesList from "@/components/page-contact/rulesList/RulesList";

import "./visitedUs.scss";

const VisitedUs = ({ data, accordionData }) => {
  const t = useTranslations();

  const {
    title,
    description,
    // visitedDate,
    // rulesListData,
    // rulesAccordionData,
  } = data;
  const { rulesList } = accordionData;
  return (
    <motion.section {...appear} className="visited-us">
      <h2 className="h2 visited-us__title">{title}</h2>
      <div className="visited-us__item">
        <p className="visited-us__item--header">{description}</p>
        {/* <p className="visited-us__item--content">{t(visitedDate)}</p> */}
      </div>

      <RulesList data={accordionData} accordionData={rulesList} />
    </motion.section>
  );
};

export default VisitedUs;
