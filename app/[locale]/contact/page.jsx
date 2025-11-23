import { useTranslations } from "next-intl";
import { fetchApi } from "@/lib/api";
import ContactForm from "@/components/page-contact/contactForm/ContactForm";
import VisitedUs from "@/components/page-contact/visitedUs/VisitedUs";
import MapWithNoSSR from "@/components/page-contact/map/MapLoader";
import ContactsHero from "@/components/page-contact/contactsHero/ContactsHero";
import ContactsInfo from "@/components/page-contact/contactsInfo/ContactsInfo";

import "./page.scss";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const contactsHeaderContent = await fetchApi("/contact-hero-section", {
    locale,
  });

  const contactsForm = await fetchApi("/contact-form-data", {
    locale,
    populate: "contactFormItem",
  });

  const mainContactsInfo = await fetchApi("/contact-main-info", {
    locale,
  });

  const visitedUsData = await fetchApi("/visited-us", {
    locale,
  });

  const accordionData = await fetchApi("/rules-list", {
    locale,
    populate: "rulesList",
  });

  const resMapData = await fetchApi("/map-data", {
    populate: "markerIcon",
  });
  // const t = useTranslations();

  return (
    <section className="contact-page">
      <ContactsHero data={contactsHeaderContent?.data} />

      <ContactForm data={contactsForm.data} />

      <ContactsInfo data={mainContactsInfo.data} />

      <div className="contact-page__contact">
        {/* Компонент принимает 2 пропса. 1 - содежримое плашки (заголовок и описание)б 2 - данные для акардиона. Заголовок и содержание полей */}
        <VisitedUs
          data={visitedUsData.data}
          accordionData={accordionData.data}
        />

        <MapWithNoSSR mapData={resMapData.data} />
      </div>
    </section>
  );
}
