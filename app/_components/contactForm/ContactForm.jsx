// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { PiTelegramLogo } from "react-icons/pi";

import { slideFromBottom } from "@/app/_constants/animations";
import Button from "@/app/_components/button/Button";

import "./contactForm.scss";

const ContactForm = ({ data, isOpen }) => {
  const { t } = { t: (x) => x }; // useTranslation();

  return (
    <motion.ul {...slideFromBottom} className="contactForm">
      {data.map((item, key) => (
        <li key={key} className="contactForm__item">
          <p>{item.name}</p>
          {item.typeHref === "tel" ? (
            <div>
              <a href={`${item.typeHref}:${item.number}`}>{item.number}</a>
              <a
                href={`${item.tgLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTelegramLogo />
              </a>
            </div>
          ) : (
            <a href={`mailto:${item.link}`}>{item.link}</a>
          )}
        </li>
      ))}
      <Button text={t("buttons.contact")} onClick={isOpen} />
    </motion.ul>
  );
};

export default ContactForm;
