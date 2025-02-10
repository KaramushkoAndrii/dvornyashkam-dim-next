import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import "./HelpListItem.scss";
import { slideFromLeft, slideFromRight } from "@/constants/animations";

const HelpListItem = ({ data, index, translationGroup }) => {
  const t = useTranslations();

  const { header, description, subDescription, type, src, linkContent } =
    data || {};

  const oddLi = index % 2 === 0 ? slideFromLeft : slideFromRight;

  return (
    <motion.li {...oddLi} className="detailed__item">
      <h3>{t(`${translationGroup}.${header}`)}</h3>
      <p>{t(`${translationGroup}.${description}`)}</p>
      <footer>
        <p className="sub__text">
          {t(`${translationGroup}.${subDescription}`)}
        </p>
        {type === "button" ? (
          <button onClick={(evt) => console.log(evt)}>{linkContent}</button>
        ) : (
          <a href={`${type}:${src}`} target="_blank">
            {linkContent}
          </a>
        )}
      </footer>
    </motion.li>
  );
};

export default HelpListItem;
