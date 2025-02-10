import dogsDB from "@/data/dogsDB";
import catsDB from "@/data/catsDB";

import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";

import "./page.scss";

export default async function HomePage() {
  const t = await getTranslations();

  // TO DO: get DATA for OurAnimals from API
  const dataOurAnimals = [
    {
      slug: "cats",
      title: t("lists-title.cats"),
      btnTitle: t("buttons.more-cats"),
      items: catsDB.slice(0, 3),
    },
    {
      slug: "dogs",
      title: t("lists-title.dogs"),
      btnTitle: t("buttons.more-dogs"),
      items: dogsDB.slice(0, 3),
    },
  ];

  return (
    <>
      <HeroSection />
      <SearchSection />
      <AboutSection />
      <OurAnimals data={dataOurAnimals} />
      <HelpSection btnText={"buttons.more"} />
    </>
  );
}
