"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { validationRules } from "@/constants/validationRules";
import Button from "@/components/UI/button/Button";
import Input from "@/components/UI/input/Input";
import useModalStore from "@/hooks/useModalStore";

const ModalForm = () => {
  const t = useTranslations();
  const { closeModal } = useModalStore();

  const closeHandler = () => {
    closeModal();
  };

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

  // console.log(watch("example"));

  return (
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
  );
};

export default ModalForm;
