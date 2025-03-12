"use client";

import { useTranslations } from "next-intl";

import useModalStore from "@/hooks/useModalStore";

import "./modal.scss";

const Modal = ({ children }) => {
  const t = useTranslations();
  const { isModalOpen, closeModal, modalContent } = useModalStore();

  const closeHandler = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className={`modal-container ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal">
        <header className="modal__header">
          <h2 className="h2">{t("modal.callback")}</h2>
          <span className="modal__close" onClick={closeHandler}>
            X
          </span>
        </header>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
