"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  scale,
} from "@/constants/animations";

import SocialList from "@/components/common/contacts/SocialList";
import ContactForm from "@/components/page-contact/contactForm/ContactForm";
import VisitedUs from "@/components/page-contact/visitedUs/VisitedUs";
import Map from "@/components/page-contact/map/Map";

import contactFormData from "@/data/contactFormData";
import visitedUsDate from "@/data/visitedUsDate";
import contactPageData from "@/data/contactPageData";
import { contactsSocial } from "@/data/contactsList";

import "./page.scss";

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
    <section className="contact-page">
      <motion.h2 {...slideFromLeft} className="title h2">
        {t(title)}
      </motion.h2>

      <motion.div {...slideFromRight} className="contact-page__adres">
        <h3 className="contact-page__header h3">{t(header)}</h3>
        <span className="contact-page__content">{t(headerContent)}</span>
      </motion.div>
      <motion.div {...slideFromBottom} className="contact-page__social">
        <h3 className="contact-page__header h3">{t(socialHeader)}</h3>
        <SocialList data={contactsSocial} />
      </motion.div>

      <ContactForm data={contactFormData} />

      <motion.div {...scale} className="contact-page__info">
        <h2 className="contact-page__info--header h2">
          {t(responseble)}
          <i>{t(sterilaz)}</i>
        </h2>
        <p className="contact-page__info--content">{t(tomuch)}</p>
        <p className="contact-page__info--content">{t(slogan)}</p>
      </motion.div>

      <div className="contact-page__contact">
        <VisitedUs data={visitedUsDate} />

        <Map data={""} />
      </div>
    </section>
  );
}
