"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import { useTranslation } from "react-i18next";

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";

import Button from "@/app/_components/button/Button";

import "./AnimalDetails.scss";

export default function AnimalDetails({ animal }) {
  const router = useRouter();

  const { t } = { t: (x) => x }; // useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    };
  }, []);

  const closeHandler = () => {
    router.push(`/animals/${animal.category}`);
  };

  return (
    <dialog
      className={`animal-details ${isOpen ? "open" : ""}`}
      open
      onClick={closeHandler}
    >
      {animal && (
        <div className="animal-details__content">
          <header>
            <button className="animal-details__close" onClick={closeHandler}>
              X
            </button>
          </header>
          <section>
            <ul className="animal-details__img-container">
              {animal.moreImg.map((img, indx) => (
                <li key={indx}>
                  <img src={img} alt={animal.name} />
                </li>
              ))}
            </ul>
            <h3>{animal.name}</h3>
            <h3>{animal.gender}</h3>
            <h3>{animal.age}</h3>
            <div>
              <i>
                {" "}
                <FaDog
                  style={{ fill: animal.animals ? "green" : "red" }}
                />{" "}
              </i>
              <i>
                {" "}
                <TbVaccine
                  style={{
                    fill: animal.vaccine ? "green" : "red",
                    stroke: animal.vaccine ? "green" : "red",
                  }}
                />{" "}
              </i>
            </div>
            <footer>
              <Button
                className="animal-details__action"
                text={t("buttons.house")}
                onClick={(evt) => console.log(evt)}
              />
              <Button
                className="animal-details__action"
                text={t("buttons.guard")}
                onClick={(evt) => console.log(evt)}
              />
            </footer>
          </section>
        </div>
      )}
    </dialog>
  );
}
