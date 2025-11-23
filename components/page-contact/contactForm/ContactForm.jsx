"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { PiTelegramLogo } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import useModalStore from "@/hooks/useModalStore";

import { slideFromBottom, heroAnimationY } from "@/constants/animations";
import Button from "@/components/UI/button/Button";

import "./contactForm.scss";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";

const ContactForm = ({ data }) => {
  const { contactFormItem } = data || {};
  const t = useTranslations();
  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("test");
  };

  // TO DO: isOpen is may be openHandler like in other components?
  return (
    <>
      <motion.ul
        {...slideFromBottom}
        {...heroAnimationY}
        className="contact-form"
      >
        {contactFormItem.map((item) => (
          <li key={item.id} className="contact-form__item">
            <p className="contact-form__name">{item.name}</p>
            {(item.key === "phone" || item.key === "telegram") && (
              <div className="contact-form__content">
                {item.key === "phone" && (
                  <a className="contact-form__link" href={`tel:${item.value}`}>
                    <LuPhone />
                    {item.value}
                  </a>
                )}

                {item.key === "telegram" && (
                  <a
                    className="contact-form__link"
                    href={`https://t.me/${item.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiTelegramLogo />
                    {item.value}
                  </a>
                )}
              </div>
            )}
            {item.key === "email" && (
              <a className="contact-form__link" href={`mailto:${item.value}`}>
                <LuMessageCircleMore />
                {item.value}
              </a>
            )}
          </li>
        ))}
        <Button
          text={t("buttons.contact")}
          onClick={openHandler}
          variant="contact-form"
        />
      </motion.ul>
    </>
  );
};

export default ContactForm;
