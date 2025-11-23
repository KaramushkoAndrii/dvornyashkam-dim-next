import { getTranslations } from "next-intl/server";

import { fetchApi } from "@/lib/api";
import { getRandomAnimal } from "@/lib/random";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";

import "./page.scss";
import next from "next";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = await getTranslations();

  const initialRandomAnimal = await getRandomAnimal(locale);

  //GET DATA FOR HERO SECTION FROM API
  const heroData = await fetchApi("/hero-section", {
    locale: locale,
    populate: "mainVideo",
  });

  //GET DATA FOR SEARCH SECTION FROM API
  const searchData = await fetchApi("/search-section", {
    locale: locale,
  });

  //GET DATA FOR ABOUT SECTION FROM API
  const aboutData = await fetchApi("/about-section", {
    locale: locale,
    populate: ["statistic", "aboutItem"],
  });

  const ourAnimalsConfig = await fetchApi("/our-animal", {
    locale: locale,
    populate: ["dogs", "cats"],
  });

  //GET DOGS FROM API
  const heroDogs = await fetchApi("/dogs", {
    locale: locale,
    populate: ["img", "moreImg"],
    "filters[category][$eq]": "dogs",
    "pagination[limit]": 3,
  });

  //GET CATS FROM API
  const heroCats = await fetchApi("/dogs", {
    locale: locale,
    populate: ["img", "moreImg"],
    "filters[category][$eq]": "cats",
    "pagination[limit]": 3,
  });

  const ourAnimalsData = [
    { ...ourAnimalsConfig.data.dogs[0], items: heroDogs.data },
    { ...ourAnimalsConfig.data.cats[0], items: heroCats.data },
  ];

  //GET DATA FOR HELP SECTION FROM API
  const helpData = await fetchApi("/help-section", {
    populate: ["helpListItem", "btn"],
    locale: locale,
  });

  return (
    <>
      <HeroSection data={heroData.data} />
      <SearchSection
        data={searchData.data}
        initialAnimal={initialRandomAnimal}
        locale={locale}
      />
      <AboutSection data={aboutData.data} />
      <OurAnimals data={ourAnimalsData} />
      <HelpSection data={helpData.data} />
    </>
  );
}
