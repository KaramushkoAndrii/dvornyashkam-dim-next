"use client";

import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";

import { motion } from "framer-motion";

import { slideFromLeft } from "@/constants/animations";
import AnimalCard from "@/components/AnimalCard/AnimalCard";
import Button from "@/components/button/Button";

import { getAnimalsCategoryLink } from "@/utils";

import "./animalsList.scss";

const AnimalsList = ({ data }) => {
  const locale = useLocale();
  const router = useRouter();

  // Go to animals category
  const toAnimalsCategoryHandler = () => {
    router.push({ pathname: getAnimalsCategoryLink(data.slug) }, { locale });
  };
  return (
    <>
      <motion.h2 className="h2 title" {...slideFromLeft}>
        {data.title}
      </motion.h2>
      <ul className="animals-list">
        {(data.items || []).map((item) => (
          <li key={item.slug} className="animal-list__item">
            {<AnimalCard animal={item} />}
          </li>
        ))}
      </ul>
      {data.btnTitle && (
        <div className="animals__more-button">
          <Button
            text={data.btnTitle}
            onClick={toAnimalsCategoryHandler}
            variant="animals"
          />
        </div>
      )}
    </>
  );
};

export default AnimalsList;
