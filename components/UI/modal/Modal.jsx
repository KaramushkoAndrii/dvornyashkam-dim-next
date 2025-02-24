"use client";

import { useTranslations } from "next-intl";

import useModalStore from "@/hooks/useModalStore";
import Input from "@/components/UI/input/Input";

import "./modal.scss";

const Modal = () => {
  const t = useTranslations();
  const { isModalOpen, closeModal } = useModalStore();

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
        <div className="modal__body">
          <h2 className="modal__title h2">{t("modal.title")}</h2>
          <Input
            type={"text"}
            name={"user_name"}
            id={"user_name"}
            label={"inputs.first_name"}
            required
          />
          <Input
            type={"text"}
            name={"user_surname"}
            id={"user_surname"}
            label={"inputs.last_name"}
            required
          />
          <Input
            type={"tel"}
            name={"phone"}
            id={"phone"}
            label={"inputs.phone"}
            pattern={"^+?d{10,15}$"}
            autocomplite={"tel"}
            required
          />
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            label={"inputs.email"}
            autocomplite={"email"}
            required
          />

          <Input
            type={"textarea"}
            name={"user_masssge"}
            id={"user_masssge"}
            label={"inputs.message"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
