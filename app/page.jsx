"use client";

import HeroSection from "@/app/_components/heroSection/HeroSection";
import SearchSection from "@/app/_components/searchSection/SearchSection";
import AboutSection from "@/app/_components/aboutSection/AboutSection";
import OurAnimals from "@/app/_components/ourAnimals/OurAnimals";
import HelpSection from "@/app/_components/common/helpSection/HelpSection";

import "./page.scss";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <AboutSection />
      <OurAnimals />
      <HelpSection btnText={"buttons.more"} />
    </>
  );
}
