"use client";
import { motion } from "framer-motion";
import { slideFromBottom } from "@/constants/animations";

const ContactsInfo = ({ data }) => {
  const { headerInfo, subHeader, description, subDescription } = data || {};
  return (
    <motion.div {...slideFromBottom} className="contact-page__info">
      <h2 className="contact-page__info--header h2">
        {headerInfo}
        <i>{subHeader}</i>
      </h2>
      <p className="contact-page__info--content">{description}</p>
      <p className="contact-page__info--content">{subDescription}</p>
    </motion.div>
  );
};

export default ContactsInfo;
