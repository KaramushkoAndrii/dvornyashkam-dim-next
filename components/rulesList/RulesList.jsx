"use client";

import { useTranslations } from "next-intl";
import Accordion from "@/components/accordion/Accordion";

import "./rulesList.scss";

const RulesList = ({ data, accordionData = null }) => {
  const t = useTranslations();

  const { title, description } = data;

  return (
    <div className="rules">
      <h2 className="h2">{t(title)}</h2>
      <p>{t(description)}</p>

      {accordionData ? <Accordion data={accordionData} /> : null}
    </div>
  );
};

export default RulesList;
