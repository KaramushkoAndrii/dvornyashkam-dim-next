"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { validationRules } from "@/constants/validationRules";
import useModalStore from "@/hooks/useModalStore";
import Button from "@/components/Ui/button/Button";
import Input from "@/components/UI/input/Input";

import "./modal.scss";

const Modal = () => {
  const t = useTranslations();
  const { isModalOpen, closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //Отправка данных на сервер происходит тут
  const onSubmit = (data) => {
    console.log(data);
    closeHandler();
    reset();
  };

  console.log(watch("example"));

  const closeHandler = () => {
    closeModal();
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)} className="modal__body">
          <h2 className="modal__title h2">{t("modal.title")}</h2>
          <Input
            type={"text"}
            name={"user_name"}
            id={"user_name"}
            label={"inputs.first_name"}
            register={register("user_name", validationRules.name)}
            error={errors.user_name?.message}
          />
          <Input
            type={"text"}
            name={"user_surname"}
            id={"user_surname"}
            label={"inputs.last_name"}
            register={register("user_surname", validationRules.surname)}
            error={errors.user_surname?.message}
          />
          <Input
            type={"tel"}
            name={"phone"}
            id={"phone"}
            label={"inputs.phone"}
            pattern={"^\\+?\\d{10,15}$"}
            autocomplite={"tel"}
            register={register("phone", validationRules.phone)}
            error={errors.phone?.message}
          />
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            label={"inputs.email"}
            autocomplite={"email"}
            register={register("email", validationRules.email)}
            error={errors.email?.message}
          />

          <Input
            type={"textarea"}
            name={"user_masssge"}
            id={"user_masssge"}
            label={"inputs.message"}
            register={register("user_message")}
          />
          <Button text="Click me" className="modal__button" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
