import SocialList from "@/components/common/contacts/SocialList";
import { MdOutlineEmail } from "react-icons/md";

import useContactsStore from "@/hooks/useContactsStore";

import "./contacts.scss";

const Contacts = () => {
  const { contacts } = useContactsStore();

  if (!contacts) return "Loading....";

  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <a target="_blank" href={`tel:${contacts?.phone}`}>
            {contacts?.phone}
          </a>
        </li>
        <li className="contacts__item-svg">
          <a
            className="contacts__link"
            target="_blank"
            href={`mailto:${contacts?.email}`}
          >
            <i>
              <MdOutlineEmail />
            </i>
            <p>{contacts?.email}</p>
          </a>
        </li>
      </ul>

      <SocialList data={contacts.social} />
    </div>
  );
};

export default Contacts;
