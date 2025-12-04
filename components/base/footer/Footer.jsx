import { getTranslations } from "next-intl/server";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";
ModalFormTest;

import TransitionLink from "@/components/utils/TransitionLink";

import "./footer.scss";
import ModalFormTest from "@/components/UI/modalFormTest/ModalFormTest";

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer className="footer">
      <div className="footer__main">
        <TransitionLink href="/" className="logo__wrapper">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </TransitionLink>
        <h2 className="footer__title h2">{t("hero_section.title")}</h2>
      </div>

      <Modal id="modal-form">
        <ModalForm />
      </Modal>

      <p>
        product by:{" "}
        <a href="https://www.instagram.com/" target="_blank">
          Karamushko Andrii
        </a>
      </p>
    </footer>
  );
};

export default Footer;
