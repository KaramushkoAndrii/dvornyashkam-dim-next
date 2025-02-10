"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromLeft } from "@/app/_constants/animations";
import "./heroSection.scss";

const HeroSection = () => {
  const t = useTranslations();

  return (
    <section className="hero">
      <h1 style={{ visibility: "hidden", position: "absolute" }}>
        Притулок для тварин dvornyashkam_dim
      </h1>
      <motion.h2 {...slideFromLeft} className="hero__title">
        {t("hero_section.title")}
      </motion.h2>
      <h3 className="hero__description">{t("hero_section.sub-title")}</h3>
    </section>
  );
};

export default HeroSection;
