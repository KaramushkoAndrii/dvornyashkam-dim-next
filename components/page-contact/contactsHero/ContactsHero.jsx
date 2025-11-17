"use client";
import useContactsStore from "@/hooks/useContactsStore";
import SocialList from "@/components/common/contacts/SocialList";

const ContactsHero = ({ data }) => {
  const { contacts } = useContactsStore();
  const { title, header, headerContent, socialHeader } = data || {};

  return (
    <>
      <h2 className="title h2">{title}</h2>
      <div className="contact-page__adres">
        <h3 className="contact-page__header h3">{header}</h3>
        <span className="contact-page__content">{headerContent}</span>
        <div
          className={`contact-page__social ${!contacts ? "is-loading" : ""}`}
        >
          <span>{socialHeader}</span>

          {contacts && <SocialList data={contacts.social} />}
        </div>
      </div>
    </>
  );
};

export default ContactsHero;
