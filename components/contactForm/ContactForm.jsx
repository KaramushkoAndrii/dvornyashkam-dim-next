"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { PiTelegramLogo } from "react-icons/pi";
import useModalStore from "@/hooks/useModalStore";

import { slideFromBottom } from "@/constants/animations";
import Button from "@/components/button/Button";

import "./contactForm.scss";

const ContactForm = ({ data }) => {
  const t = useTranslations();
  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal();
  };

  // TO DO: isOpen is may be openHandler like in other components?
  return (
    <motion.ul {...slideFromBottom} className="contactForm">
      {data.map((item, key) => (
        <li key={key} className="contactForm__item">
          <p>{item.name}</p>
          {(item.key === "phone" || item.key === "telegram") && (
            <div>
              {item.key === "phone" && (
                <a href={`tel:${item.value}`}>{item.value}</a>
              )}

              {item.key === "telegram" && (
                <a
                  href={`https://t.me/${item.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTelegramLogo />
                </a>
              )}
            </div>
          )}
          {item.key === "email" && (
            <a href={`mailto:${item.value}`}>{item.value}</a>
          )}
        </li>
      ))}
      <Button text={t("buttons.contact")} onClick={openHandler} />
    </motion.ul>
  );
};

export default ContactForm;
