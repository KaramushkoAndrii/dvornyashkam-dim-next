"use client";

import "./accordionSkeleton.scss";

const AccordionSkeleton = ({ count = 3 }) => {
  return (
    <div className="accordion-skeleton">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="accordion-skeleton__item">
          <div className="accordion-skeleton__title" />
          <div className="accordion-skeleton__content" />
        </div>
      ))}
    </div>
  );
};

export default AccordionSkeleton;
