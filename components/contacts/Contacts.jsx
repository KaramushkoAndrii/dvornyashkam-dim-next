import { ContactsLinks, ContactsSocial } from "@/data/contactsList";

import SocialList from "@/components/contacts/SocialList";

import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contacts__links">
        <li className="contacts__links-item">
          <a target="_blank" href={`mailto:${ContactsLinks.eamil}`}>
            {ContactsLinks.eamil}
          </a>
        </li>
        <li className="contacts__links-item">
          <a target="_blank" href={`tel:${ContactsLinks.phone}`}>
            {ContactsLinks.phone}
          </a>
        </li>
      </ul>

      <SocialList data={ContactsSocial} />
    </div>
  );
};

export default Contacts;
