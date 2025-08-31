import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";

import dogsDB from "@/data/dogsDB";
import catsDB from "@/data/catsDB";
import aboutList from "@/data/aboutList";
import aboutListItem from "@/data/aboutInfoList";
import helpList from "@/data/helpList";

import "./page.scss";

export default async function HomePage() {
  const t = await getTranslations();

  const res = await fetch("http://localhost:1337/api/hero-section", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Faliet to fetch");
  }

  const json = await res.json();

  const aboutData = await fetch(
    "http://localhost:1337/api/about-section?populate=*",
    {
      next: { revalidate: 60 },
    }
  );

  if (!aboutData.ok) {
    throw new Error("About failed to frtch");
  }

  const aboutJson = await aboutData.json();

  //GET DOGSDB

  const resDogs = await fetch(
    "http://localhost:1337/api/dogs?populate=img&populate=moreImg",
    {
      next: { revalidate: 60 },
    }
  );

  if (!resDogs.ok) {
    throw new Error("Error with get DB");
  }

  const dogsDB2 = await resDogs.json();

  const catsData = dogsDB2.data
    .filter((item) => item.category != "dogs")
    .slice(0, 3);

  // console.log(dogsDB2);

  const dataHeroSection = {
    pageTitle: json.data?.pageTitle || "",
    title: json.data?.title || "",
    description: json.data?.description || "",
  };

  // TO DO: get DATA for SearchSection from API
  const dataSearchSection = {
    title: t("search.title"),
    btnAbout: {
      title: t("buttons.about"),
      href: "/about",
    },
    btnRerol: {
      title: t("buttons.rerol"),
    },
    items: dogsDB,
  };

  // GET data for About from API

  const dataAboutSection = {
    title: aboutJson.data?.title || "",
    description: aboutJson.data?.description || "",

    statistics: aboutJson.data?.statistic.map(
      ({ symbol, count, description }) => ({
        symbol,
        count,
        description,
      })
    ),
    cards: aboutJson.data?.aboutItem.map(({ header, description }) => ({
      title: header,
      description,
    })),
  };

  // TO DO: get DATA for OurAnimals from API
  const dataOurAnimals = [
    {
      slug: "cats",
      title: t("lists-title.cats"),
      btnTitle: t("buttons.more-cats"),
      items: catsData,
      // items: catsDB.slice(0, 3),
    },
    {
      slug: "dogs",
      title: t("lists-title.dogs"),
      btnTitle: t("buttons.more-dogs"),
      items: dogsDB2.data.slice(0, 3),
    },
  ];

  // Get data for helpSectionFrom API

  const resHelp = await fetch(
    "http://localhost:1337/api/help-section?populate=*",
    {
      next: { revalidate: 60 },
    }
  );

  if (!resHelp.ok) {
    throw new Error("Faliet to feth HelpSection");
  }

  const dataHelp = await resHelp.json();

  const dataHelpSection = {
    title: dataHelp.data?.title || "",
    description: dataHelp.data?.description || "",
    items: dataHelp.data.HelpListItem.map((item) => item),
    btn: { title: t("buttons.more"), href: "/help" },
  };

  return (
    <>
      <HeroSection data={dataHeroSection} />
      <SearchSection data={dataSearchSection} />
      <AboutSection data={dataAboutSection} />
      <OurAnimals data={dataOurAnimals} />
      <HelpSection data={dataHelpSection} />
    </>
  );
}
