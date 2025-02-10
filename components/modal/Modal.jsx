"use client";

import { useTranslations } from "next-intl";
import Input from "@/components/input/Input";

import "./modal.scss";

const Modal = () => {
  const t = useTranslations();

  // TO DO: get state from store (redux, zustand, mobx, etc.)
  // https://zustand-demo.pmnd.rs/
  // or
  // https://react-redux.js.org/introduction/getting-started
  const [isModalOpen] = [false];

  const closeHandler = () => {
    // TO DO: toggle Modal store (redux, zustand, mobx, etc.) state to false
    // setIsModalOpen(false);
    console.log(
      "// TO DO: toggle Modal store (redux, zustand, mobx, etc.) state to false"
    );
  };

  return (
    <div className={`modal-container ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal">
        <header className="modal__header">
          <h2>{t("modal.callback")}</h2>
          <span className="modal__close" onClick={closeHandler}>
            X
          </span>
        </header>
        <div className="modal__body">
          <h2 className="modal__title">{t("modal.title")}</h2>
          <Input
            type={"text"}
            name={"user_name"}
            id={"user_name"}
            label={"Введіть ім'я"}
            required
          />
          <Input
            type={"text"}
            name={"user_surname"}
            id={"user_surname"}
            label={"Ваше прізвище"}
            required
          />
          <Input
            type={"tel"}
            name={"phone"}
            id={"phone"}
            label={"Номер телефону"}
            pattern={"^+?d{10,15}$"}
            autocomplite={"tel"}
            required
          />
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            label={"Електронна пошта"}
            autocomplite={"email"}
            required
          />

          <Input
            type={"textarea"}
            name={"user_masssge"}
            id={"user_masssge"}
            label={"Місце для ваших питань"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
