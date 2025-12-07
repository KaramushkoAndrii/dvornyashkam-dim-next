"use client";

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
    animals,
    vaccine,
    castration,
  } = animal;
  const router = useRouter();

  const t = useTranslations();

  const { openModal } = useModalStore();

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("modal-form");
  };

  const closeHandler = async () => {
    await sleep(300);

    router.push(getAnimalsCategoryLink(category));
  };

  return (
    <section className="animal-details">
      <div className="animal-details__header">
        <Slider data={moreImg} />
        <div className="animal-details__content">
          <h3 className="animal-details__name h2">{name}</h3>

          <div className="animal-details__info">
            <h4 className="animal-details__years h3">
              {`${t(`characteristics.age`)}: ${age} ${age_text}`}
            </h4>

            <h4 className="animal-details__sex h3">{`${t(
              `characteristics.sex`
            )}: ${gender}`}</h4>

            <h4 className="animal-details__weight h3">
              {`${t(`characteristics.weight`)}: ${weight} ${weight_text}`}
            </h4>
          </div>
        </div>

        <div className="animal-details__characteristic">
          <Tooltip
            text={t(
              `characteristics.${
                animals ? "animal-friendly" : "not-animal-friendly"
              }`
            )}
          >
            <FaDog style={{ fill: animals ? "green" : "red" }} />
            <span className="tooltip__content span">
              {t(
                `characteristics.${
                  animals ? "animal-friendly" : "not-animal-friendly"
                }`
              )}
            </span>
          </Tooltip>

          <Tooltip
            text={t(`characteristics.${vaccine ? "vaccine" : "not-vaccine"}`)}
          >
            <TbVaccine
              style={{
                fill: vaccine ? "green" : "red",
                stroke: vaccine ? "green" : "red",
              }}
            />
            <span className="tooltip__content span">
              {t(`characteristics.${vaccine ? "vaccine" : "not-vaccine"}`)}
            </span>
          </Tooltip>

          <Tooltip
            text={t(
              `characteristics.${castration ? "castration" : "not-castration"}`
            )}
          >
            <FaNotesMedical style={{ fill: castration ? "green" : "red" }} />
            <span className="tooltip__content span">
              {t(
                `characteristics.${
                  castration ? "castration" : "not-castration"
                }`
              )}
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="animal-details__main">
        <h3 className="animal-details__title h3">
          {t(`characteristics.title`)}
        </h3>
        <p className="p">{story}</p>
        <Button
          className="animal-details__action"
          text={t("buttons.guard")}
          onClick={openHandler}
          variant={"get"}
        />
        <Button
          onClick={closeHandler}
          text={t("buttons.category")}
          variant={"to-category"}
        />
      </div>
    </section>
  );
}
