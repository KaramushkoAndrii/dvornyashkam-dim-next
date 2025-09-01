"use client";

import { useState } from "react";

import AccordionItem from "@/components/UI/accordion/AccordionItem";
import AccordionSkeleton from "@/components/UI/accordion/AcordionSkeleton";

import "./accordion.scss";

const Accordion = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  if (!data || data.length === 0) {
    return <AccordionSkeleton count={3} />; // по умолчанию 3 элемента
  }

  return (
    <ul className="accordion">
      {data.map((el, id) => (
        <AccordionItem
          onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
          data={el}
          isOpen={id === openId}
          key={id}
        />
      ))}
    </ul>
  );
};

export default Accordion;
