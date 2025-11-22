import { fetchApi } from "@/lib/api";
import AboutHero from "@/components/about-page/about-hero/AboutHero";
import "./page.scss";

export default async function AboutPage({ params }) {
  const { locale } = await params;

  const aboutPageData = await fetchApi("/about-page", {
    locale,
    populate: "aboutUsList.img",
  });

  return <AboutHero data={aboutPageData.data} />;
}

// "use client";

// import { useTranslations } from "next-intl";
// import { motion } from "framer-motion";

// import {
//   slideFromLeft,
//   slideFromRight,
//   heroAnimationX,
// } from "@/constants/animations";
// import FigureContainer from "@/components/UI/figureContainer/FigureContainer";

// import aboutUsList from "@/data/aboutUsList";

// import "./page.scss";

// export default function AboutPage() {
//   const t = useTranslations();

//   return (
//     <section className="about-page">
//       <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
//         {t("navigation.about_us")}
//       </motion.h2>
//       <ul className="about-page__list">
//         {aboutUsList.map((item, key) => {
//           const heroItem = key === 0 ? heroAnimationX : null;
//           const slideText = key % 2 === 0 ? slideFromRight : slideFromLeft;
//           const slideImg = key % 2 === 0 ? slideFromLeft : slideFromRight;

//           return (
//             <motion.li key={key} className="about-page__item">
//               <FigureContainer
//                 {...slideImg}
//                 {...heroItem}
//                 src={item.img}
//                 alt={item.alt}
//                 text={item.alt}
//               />
//               <motion.p
//                 className="about-page__text"
//                 {...slideText}
//                 {...heroItem}
//               >
//                 {t(`about-us-page.${item.text}`)}
//               </motion.p>
//             </motion.li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }
