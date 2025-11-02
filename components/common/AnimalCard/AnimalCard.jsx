import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

import useModalStore from "@/hooks/useModalStore";
import { slideFromBottom } from "@/constants/animations";
import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import { getAnimalLink } from "@/utils";

import "./AnimalCard.scss";

const AnimalCard = ({ animal }) => {
  const { slug, category, img, name, gender, age, vaccine, animals } =
    animal || {};

  const t = useTranslations();
  const { openModal } = useModalStore();
  // const API_URL = "https://dvornyshki-cms.onrender.com";

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal("modal-form");
  };

  console.log(animal, "Вывод с AnimalCard");

  return (
    <>
      <motion.div {...slideFromBottom} className="animal">
        <Link href={getAnimalLink(category, slug)} className="animal__link">
          <div className="animal__info">
            <div className="animal__picture">
              <img src={`${img?.url}`} alt={name} />
            </div>
            <div className="animal__description">
              <h3 className="animal__name h3">{name}</h3>
              <span className="animal__gender">{gender}</span>
              <span className="animal__age">{age}</span>
            </div>
          </div>
          <div className="animal__characteristics">
            <div className="animal__animals">
              {/* // TO DO: what is 'animals'? May be need add title or select another key word for 'green'/'red' values. */}{" "}
              <FaDog style={{ fill: animals ? "green" : "red" }} />{" "}
            </div>
            <div className="animal__vaccine">
              {" "}
              <TbVaccine
                style={{
                  fill: vaccine ? "green" : "red",
                  stroke: vaccine ? "green" : "red",
                }}
              />{" "}
            </div>
          </div>
          <div className="animal__buttons">
            <button className="animal__choice" onClick={openHandler}>
              {t("search.choice")}
            </button>
            <button className="animal__choice" onClick={openHandler}>
              {t("search.trustee")}
            </button>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default AnimalCard;
