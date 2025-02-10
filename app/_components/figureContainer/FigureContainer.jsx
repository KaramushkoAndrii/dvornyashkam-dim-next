import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import "./figureContainer.scss";

const FigureContainer = ({ src, alt, text, ...props }) => {
  const t = useTranslations();

  return (
    <motion.figure {...props} className="figure-container">
      <img src={src} alt={alt} />
      <figcaption>{t(`${text}`)}</figcaption>
    </motion.figure>
  );
};

export default FigureContainer;
