import { useTranslations } from "next-intl";
import { fetchApi } from "@/lib/api";
import ContactForm from "@/components/page-contact/contactForm/ContactForm";
import VisitedUs from "@/components/page-contact/visitedUs/VisitedUs";
import MapWithNoSSR from "@/components/page-contact/map/MapLoader";
import ContactsHero from "@/components/page-contact/contactsHero/ContactsHero";
import ContactsInfo from "@/components/page-contact/contactsInfo/ContactsInfo";
// import { motion } from "framer-motion";
import contactPageData from "@/data/contactPageData";

import "./page.scss";
// import {
//   slideFromLeft,
//   slideFromRight,
//   slideFromBottom,
//   heroAnimationX,
//   heroAnimationY,
//   scale,
// } from "@/constants/animations";

export default async function ContactPage() {
  const contactsHeaderContent = await fetchApi("/contact-hero-section");

  const resContactsForm = await fetchApi("/contact-form-data", {
    populate: "contactFormItem",
  });
  const contactsForm = resContactsForm.data.contactFormItem;

  const mainContactsInfo = await fetchApi("/contact-main-info");

  const resVisitedUs = await fetchApi("/visited-us");
  const visitedUsData = resVisitedUs.data;

  const resAccordion = await fetchApi("/rules-list", {
    populate: "rulesList",
  });
  const acordionData = resAccordion.data;

  const resMapData = await fetchApi("/map-data", {
    populate: "markerIcon",
  });
  // const t = useTranslations();

  return (
    <section className="contact-page">
      <ContactsHero data={contactsHeaderContent?.data} />

      <ContactForm data={contactsForm} />

      <ContactsInfo data={mainContactsInfo.data} />

      <div className="contact-page__contact">
        {/* Компонент принимает 2 пропса. 1 - содежримое плашки (заголовок и описание)б 2 - данные для акардиона. Заголовок и содержание полей */}
        <VisitedUs data={visitedUsData} accordionData={acordionData} />

        <MapWithNoSSR mapData={resMapData.data} />
      </div>
    </section>
  );
}

// "use client";

// import SocialList from "@/components/common/contacts/SocialList";
// import ContactForm from "@/components/page-contact/contactForm/ContactForm";
// import VisitedUs from "@/components/page-contact/visitedUs/VisitedUs";
// import Map from "@/components/page-contact/map/Map";

// import contactFormData from "@/data/contactFormData";
// import visitedUsDate from "@/data/visitedUsDate";

// import { contactsSocial } from "@/data/contactsList";

// export default function ContactPage() {

//   return (
//     <section className="contact-page">
//       <motion.h2 {...slideFromLeft} {...heroAnimationX} className="title h2">
//         {t(title)}
//       </motion.h2>

//       <motion.div
//         {...slideFromRight}
//         {...heroAnimationX}
//         className="contact-page__adres"
//       >
//         <h3 className="contact-page__header h3">{t(header)}</h3>
//         <span className="contact-page__content">{t(headerContent)}</span>
//       </motion.div>
//       <motion.div
//         {...slideFromBottom}
//         {...heroAnimationY}
//         className="contact-page__social"
//       >
//         <h3 className="contact-page__header h3">{t(socialHeader)}</h3>
//         <SocialList data={contactsSocial} />
//       </motion.div>

//       <ContactForm data={contactFormData} />

//       <motion.div {...scale} className="contact-page__info">
//         <h2 className="contact-page__info--header h2">
//           {t(responseble)}
//           <i>{t(sterilaz)}</i>
//         </h2>
//         <p className="contact-page__info--content">{t(tomuch)}</p>
//         <p className="contact-page__info--content">{t(slogan)}</p>
//       </motion.div>

//       <div className="contact-page__contact">
//         <VisitedUs data={visitedUsDate} />

//         {/* <Map data={""} /> */}
//         <Map position={[50.510228483551636, 30.41187174733428]} />
//       </div>
//     </section>
//   );
// }
