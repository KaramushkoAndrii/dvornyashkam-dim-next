"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

import { slideFromLeft } from "@/app/_constants/animations";
import AnimalCard from "@/app/_components/AnimalCard/AnimalCard";
import Button from "@/app/_components/button/Button";

import "./animalsList.scss";

const AnimalsList = ({ title, src, btnText, dataList }) => {
  const t = useTranslations();
  return (
    <>
      <motion.h2 className="animals__title" {...slideFromLeft}>
        {t(`${title}`)}
      </motion.h2>
      <ul className="animals__list">
        {dataList.slice(0, 3).map((item, key) => (
          <li key={key} className="animal__list--item">
            {<AnimalCard animal={item} />}
          </li>
        ))}
      </ul>
      {dataList.length > 3 && (
        <div className="animals__more-button">
          <Link href={src || "/"}>
            <Button text={t(`${btnText}`)} />
          </Link>
        </div>
      )}
    </>
  );
};

export default AnimalsList;
