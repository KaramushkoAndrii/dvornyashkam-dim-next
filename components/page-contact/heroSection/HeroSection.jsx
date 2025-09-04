import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  heroAnimationX,
  heroAnimationY,
  scale,
} from "@/constants/animations";
import "./heroSection";

const HeroSection = ({ data }) => {
  const { title, header, headerContent } = data;
  return (
    <>
      <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
        {t(title)}
      </motion.h2>

      <motion.div
        {...slideFromRight}
        {...heroAnimationX}
        className="contact-page__adres"
      >
        <h3 className="contact-page__header h3">{t(header)}</h3>
        <span className="contact-page__content">{t(headerContent)}</span>
      </motion.div>
    </>
  );
};

export default HeroSection;
