"use client";

import HeroSection from "@/components/page-home/heroSection/HeroSection";
import SearchSection from "@/components/page-home/searchSection/SearchSection";
import AboutSection from "@/components/page-home/aboutSection/AboutSection";
import OurAnimals from "@/components/page-home/ourAnimals/OurAnimals";
import HelpSection from "@/components/common/helpSection/HelpSection";

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
