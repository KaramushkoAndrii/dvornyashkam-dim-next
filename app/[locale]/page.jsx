import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";
import { fetchApi } from "@/lib/api";

import "./page.scss";
import next from "next";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = await getTranslations();

  //GET AnimalsDB
  const animalsDB = await fetchApi("/dogs?populate=img&populate=moreImg");

  //CREATE DB ONLY FOR CATS
  const catsData = animalsDB.data
    .filter((item) => item.category != "dogs")
    .slice(0, 3);

  //GET DATA FOR HERO SECTION FROM API
  const heroData = await fetchApi("/hero-section", {
    locale: locale,
    populate: "mainVideo",
  });

  //GET DATA FOR SEARCH SECTION FROM API
  const searchData = await fetchApi("/search-section");
  const dataSearchSection = {
    title: searchData.data?.title,
    btnAbout: {
      title: searchData.data?.btnAbout,
      href: "/about",
    },
    btnRerol: {
      title: searchData.data?.btnRerol,
    },
    items: animalsDB,
  };

  //GET DATA FOR ABOUT SECTION FROM API
  const aboutData = await fetchApi("/about-section?populate=*");
  const dataAboutSection = {
    title: aboutData.data?.title || "",
    description: aboutData.data?.description || "",

    statistics: aboutData.data?.statistic.map(
      ({ symbol, count, description }) => ({
        symbol,
        count,
        description,
      })
    ),
    cards: aboutData.data?.aboutItem.map(({ header, description }) => ({
      title: header,
      description,
    })),
  };

  //GET DATA FOR ANIMALS LIST FROM API
  const ourAnimalsData = await fetchApi(
    "/our-animal?populate=dogs&populate=cats"
  );
  const dataOurAnimals = [
    {
      slug: ourAnimalsData.data?.cats[0]?.slug || "",
      title: ourAnimalsData.data?.cats[0]?.title || "",
      btnTitle: ourAnimalsData.data?.cats[0]?.btnTitle || "",
      items: catsData,
    },
    {
      slug: ourAnimalsData.data?.dogs[0]?.slug || "",
      title: ourAnimalsData.data?.dogs[0]?.title || "",
      btnTitle: ourAnimalsData.data?.dogs[0]?.btnTitle || "",
      items: animalsDB.data.slice(0, 3),
    },
  ];

  //GET DATA FOR HELP SECTION FROM API
  const helpData = await fetchApi("/help-section", {
    populate: ["helpListItem", "btn"],
    locale: locale,
  });

  return (
    <>
      <HeroSection data={heroData.data} />
      <SearchSection data={dataSearchSection} />
      <AboutSection data={dataAboutSection} />
      <OurAnimals data={dataOurAnimals} />
      <HelpSection data={helpData.data} />
    </>
  );
}
