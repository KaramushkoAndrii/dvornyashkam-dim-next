import { contactsLinks, contactsSocial } from "@/data/contactsList";

import SocialList from "@/components/common/contacts/SocialList";

import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <a
            className="contacts__link"
            target="_blank"
            href={`mailto:${contactsLinks.email}`}
          >
            {contactsLinks.email}
          </a>
        </li>
        <li className="contacts__links-item">
          <a target="_blank" href={`tel:${contactsLinks.phone}`}>
            {contactsLinks.phone}
          </a>
        </li>
      </ul>

      <SocialList data={contactsSocial} />
    </div>
  );
};

export default Contacts;
