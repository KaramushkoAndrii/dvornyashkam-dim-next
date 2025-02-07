import HeroSection from "../../components/heroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import OurAnimals from "../../components/ourAnimals/OurAnimals";
import HelpSection from "../../components/helpSection/HelpSection";

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
