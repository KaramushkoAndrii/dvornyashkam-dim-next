"use client";
import useContactsStore from "@/hooks/useContactsStore";
import SocialList from "@/components/common/contacts/SocialList";
import { motion } from "framer-motion";
import {
  slideFromBottom,
  heroAnimationX,
  slideFromLeft,
} from "@/constants/animations";

const ContactsHero = ({ data }) => {
  const { contacts } = useContactsStore();
  const { title, header, headerContent, socialHeader } = data || {};

  return (
    <>
      <motion.h2 {...heroAnimationX} {...slideFromLeft} className="title h2">
        {title}
      </motion.h2>
      <motion.div {...slideFromBottom} className="contact-page__adres">
        <h3 className="contact-page__header h3">{header}</h3>
        <span className="contact-page__content">{headerContent}</span>
        <div
          className={`contact-page__social ${!contacts ? "is-loading" : ""}`}
        >
          <span>{socialHeader}</span>

          {contacts && <SocialList data={contacts.social} />}
        </div>
      </motion.div>
    </>
  );
};

export default ContactsHero;
