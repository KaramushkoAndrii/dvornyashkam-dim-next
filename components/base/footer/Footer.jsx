import { getTranslations } from "next-intl/server";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";

import TransitionLink from "@/components/utils/TransitionLink";

import "./footer.scss";

const Footer = async () => {
  const t = await getTranslations();

  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <TransitionLink href="/" className="logo__wrapper">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </TransitionLink>
        <h2 className="footer__title h2">{t("footer.title")}</h2>
      </div>

      <Modal id="modal-form">
        <ModalForm />
      </Modal>

      <div className="footer__info">
        <p className="footer__privat span">
          © {t("footer.privat")} {getCurrentYear}
        </p>
        <p className="footer__dev span">
          {t("footer.dev")}:
          <a href="https://www.instagram.com/" target="_blank">
            Karamushko Andrii
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
