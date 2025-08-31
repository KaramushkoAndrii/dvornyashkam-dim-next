import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";

// import dogsDB from "@/data/dogsDB";
// import catsDB from "@/data/catsDB";
// import aboutList from "@/data/aboutList";
// import aboutListItem from "@/data/aboutInfoList";
// import helpList from "@/data/helpList";

import "./page.scss";
import next from "next";

export default async function HomePage() {
  const t = await getTranslations();

  const heroData = await fetch("http://localhost:1337/api/hero-section", {
    next: { revalidate: 60 },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Error with fetch hero-section");
      return res.json();
    })
    .catch((e) => console.error(e));

  const aboutData = await fetch(
    "http://localhost:1337/api/about-section?populate=*",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Error with fetch about-section");
      return res.json();
    })
    .catch((e) => console.error(e));

  //GET AnimalsDB
  const animalsDB = await fetch(
    "http://localhost:1337/api/dogs?populate=img&populate=moreImg",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Error with get data from animalsDB");
      return res.json();
    })
    .catch((e) => console.error(e));

  //CREATE DB ONLY FOR CATS
  const catsData = animalsDB.data
    .filter((item) => item.category != "dogs")
    .slice(0, 3);

  const dataHeroSection = {
    pageTitle: heroData.data?.pageTitle || "",
    title: heroData.data?.title || "",
    description: heroData.data?.description || "",
  };

  // Get DATA for SearchSection from API
  const searchData = await fetch("http://localhost:1337/api/search-section", {
    next: { revalidate: 60 },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Error with searc-section");
      return res.json();
    })
    .catch((e) => console.error(e));

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

  // GET data for About from API
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

  // TO DO: get DATA for OurAnimals from API
  const ourAnimalsData = await fetch(
    "http://localhost:1337/api/our-animal?populate=dogs&populate=cats",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed with animals data");
      return res.json();
    })
    .catch((e) => console.error(e));

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

  // Get data for helpSectionFrom API
  const helpData = await fetch(
    "http://localhost:1337/api/help-section?populate=*",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Error with help-data");
      return res.json();
    })
    .catch((e) => console.error(e));

  const dataHelpSection = {
    title: helpData.data?.title || "",
    description: helpData.data?.description || "",
    items: helpData.data.HelpListItem.map((item) => item),
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
