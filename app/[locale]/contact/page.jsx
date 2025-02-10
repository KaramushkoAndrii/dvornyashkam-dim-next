"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  scale,
} from "@/constants/animations";

import SocialList from "@/components/contacts/SocialList";
import ContactForm from "@/components/contactForm/ContactForm";
import VisitedUs from "@/components/visitedUs/VisitedUs";
import Map from "@/components/map/Map";

import ContactFormData from "@/app/_data/contactFormData";
import VisitedUsDate from "@/app/_data/visitedUsDate";
import contactPageData from "@/app/_data/contactPageData";
import { ContactsSocial } from "@/app/_data/contactsList";

import "./contactPage.scss";

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

  return (
    <section className="contact__page">
      <motion.h2 {...slideFromLeft} className="page__title">
        {t(title)}
      </motion.h2>

      <motion.div {...slideFromRight} className="contact__adres">
        <span className="contact__header">{t(header)}</span>
        <p className="contact__content">{t(headerContent)}</p>
      </motion.div>
      <motion.div {...slideFromBottom} className="contact__social">
        <span className="contact__header">{t(socialHeader)}</span>
        <SocialList data={ContactsSocial} />
      </motion.div>

      <ContactForm data={ContactFormData} />

      <motion.div {...scale} className="contact__info">
        <h2 className="contact__info--header">
          {t(responseble)}
          <i>{t(sterilaz)}</i>
        </h2>
        <p className="contact__info--content">{t(tomuch)}</p>
        <p className="contact__info--content">{t(slogan)}</p>
      </motion.div>

      <div className="contact__contact">
        <VisitedUs data={VisitedUsDate} />

        <Map data={""} />
      </div>
    </section>
  );
}
