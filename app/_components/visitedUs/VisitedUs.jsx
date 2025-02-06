// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { appear } from "@/app/_components/Animations";
import RulesList from "@/app/_components/rulesList/RulesList";

import "./visitedUs.scss";

const VisitedUs = ({ data }) => {
  const { t } = { t: (x) => x }; // useTranslation();

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
