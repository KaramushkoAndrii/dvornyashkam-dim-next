import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import contactPageData from "@/data/contactPageData";
import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  heroAnimationX,
  heroAnimationY,
  scale,
} from "@/constants/animations";

export default function ContactPage() {
  const {
    title,
    header,
    headerContent,
    socialHeader,
    responseble,
    sterilaz,
    tomuch,
    slogan,
  } = contactPageData || {};
  const t = useTranslations();
}

// "use client";

// import SocialList from "@/components/common/contacts/SocialList";
// import ContactForm from "@/components/page-contact/contactForm/ContactForm";
// import VisitedUs from "@/components/page-contact/visitedUs/VisitedUs";
// import Map from "@/components/page-contact/map/Map";

// import contactFormData from "@/data/contactFormData";
// import visitedUsDate from "@/data/visitedUsDate";

// import { contactsSocial } from "@/data/contactsList";

// import "./page.scss";

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
