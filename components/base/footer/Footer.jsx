import { getTranslations } from "next-intl/server";
import Modal from "@/components/UI/modal/Modal";
import ModalForm from "@/components/UI/modalForm/ModalForm";

import TransitionLink from "@/components/utils/TransitionLink";

import "./footer.scss";

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

      <Modal>
        <ModalForm />
      </Modal>
    </footer>
  );
};

export default Footer;
