"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import useModalStore from "@/hooks/useModalStore";
import Button from "../UI/button/Button";
import Accordion from "../UI/accordion/Accordion";
import ModalForm from "../UI/modalForm/ModalForm";
import {
  slideFromLeft,
  slideFromBottom,
  heroAnimationX,
} from "@/constants/animations";

const AdvicePage = ({ data }) => {
  const t = useTranslations();

  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("modal-form");
  };

  return (
    <section className="advise-page">
      <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
        {t("advise-page.title")}
      </motion.h2>

      <Accordion data={data} />

      <motion.p {...slideFromBottom} className="advise-page__content">
        {t("advise-page.content")}
      </motion.p>

      <Button text={t("buttons.call")} onClick={openHandler} variant="advice" />
    </section>
  );
};

export default AdvicePage;
