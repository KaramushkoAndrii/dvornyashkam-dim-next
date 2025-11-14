"use client";

import { useTranslations } from "next-intl";
import Accordion from "@/components/UI/accordion/Accordion";

import "./rulesList.scss";

const RulesList = ({ data, accordionData = null }) => {
  const t = useTranslations();

  const { header, description } = data;

  return (
    <div className="rules">
      <h2 className="h2">{header}</h2>
      <p>{description}</p>

      {accordionData ? <Accordion data={accordionData} /> : null}
    </div>
  );
};

export default RulesList;
