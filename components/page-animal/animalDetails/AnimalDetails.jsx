"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import Slider from "@/components/UI/slider/Slider";
import Tooltip from "@/components/UI/tooltip/Tooltip";
import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import { FaNotesMedical } from "react-icons/fa";
import useModalStore from "@/hooks/useModalStore";

import Button from "@/components/UI/button/Button";

import { getAnimalsCategoryLink, sleep } from "@/utils";

import "./AnimalDetails.scss";

export default function AnimalDetails({ animal }) {
  console.log(animal);

  const {
    name,
    age,
    age_text,
    gender,
    weight,
    weight_text,
    moreImg,
    story,
    category,
  } = animal;
  const router = useRouter();

  const t = useTranslations();

  const { openModal } = useModalStore();

  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setIsOpen(true);

  //   return () => {
  //     setIsOpen(false);
  //   };
  // }, []);

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("modal-form");
  };

  const closeHandler = async () => {
    //   setIsOpen(false);

    //   await sleep(300);

    router.push(getAnimalsCategoryLink(category));
  };

  return (
    <section className="animal-details">
      <div className="animal-details__header">
        <div className="animal-details__content">
          <Slider data={moreImg} />
          <h3 className="animal-details__name">{name}</h3>
          <div className="animal-details__info">
            <h4 className="animal-details__years">
              {`${t(`characteristics.age`)}: ${age} ${age_text}`}
            </h4>
            <h4 className="animal-details__sex">{`${t(
              `characteristics.sex`
            )}: ${gender}`}</h4>
            <h4 className="animal-details__weight">
              {`${t(`characteristics.weight`)}: ${weight} ${weight_text}`}
            </h4>
          </div>
        </div>
        <div className="animal-details__characteristic">
          <Tooltip
            text={t(
              `characteristics.${
                animal.animals ? "animal-friendly" : "not-animal-friendly"
              }`
            )}
          >
            <FaDog style={{ fill: animal.animals ? "green" : "red" }} />
            <span className="tooltip__content">
              {animal.animals ? "Дружит с животными" : "Не дружит с животными"}
            </span>
          </Tooltip>
          <Tooltip text={animal.vaccine ? "Вакцинирован" : "Не вакцинирован"}>
            <TbVaccine
              style={{
                fill: animal.vaccine ? "green" : "red",
                stroke: animal.vaccine ? "green" : "red",
              }}
            />
            <span className="tooltip__content">
              {animal.vaccine ? "Вакцинирован" : "Не вакцинирован"}
            </span>
          </Tooltip>
          <Tooltip text={animal.castration ? "Кастрирован" : "Не кастрирован"}>
            <FaNotesMedical
              style={{ fill: animal.castration ? "green" : "red" }}
            />
            <span className="tooltip__content">
              {animal.castration ? "Кастрирован" : "Не кастрирован"}
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="animal-details__main">
        {story}
        <Button
          className="animal-details__action"
          text={t("buttons.guard")}
          onClick={openHandler}
        />
        <button onClick={closeHandler}>To category</button>
      </div>

      {/* {animal && (
        <div className="animal-details__content">
          <header className="animal-details__header">
            <button className="animal-details__close" onClick={closeHandler}>
              X
            </button>
          </header>
          <section className="animal-details__info">
            <Slider data={animal.moreImg} />
            {console.log(animal.moreImg)}
            <div className="animal-details__wrapper">
              <div className="animal-details__params">
                <h3 className="h3">{animal.name}</h3>
                <h3 className="h3">{animal.gender}</h3>
                <h3 className="h3">{animal.age}</h3>
              </div>
              <div className="animal-details__characteristic">
                <Tooltip
                  text={
                    animal.animals
                      ? "Дружит с животными"
                      : "Не дружит с животными"
                  }
                >
                  <FaDog style={{ fill: animal.animals ? "green" : "red" }} />
                </Tooltip>
                <Tooltip
                  text={animal.vaccine ? "Вакцинирован" : "Не вакцинирован"}
                >
                  <TbVaccine
                    style={{
                      fill: animal.vaccine ? "green" : "red",
                      stroke: animal.vaccine ? "green" : "red",
                    }}
                  />
                </Tooltip>
                <Tooltip
                  text={animal.castration ? "Кастрирован" : "Не кастрирован"}
                >
                  <FaNotesMedical
                    style={{ fill: animal.castration ? "green" : "red" }}
                  />
                </Tooltip>
              </div>
              <footer className="animal-details__footer">
                <Button
                  className="animal-details__action"
                  text={t("buttons.house")}
                  onClick={openHandler}
                />
                <Button
                  className="animal-details__action"
                  text={t("buttons.guard")}
                  onClick={openHandler}
                />
              </footer>
            </div>
          </section>
        </div>
      )} */}
    </section>
  );
}
