import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialList = ({ data }) => {
  // Comparison link key with icons
  const icon = {
    telegram: <FaTelegram />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
    tiktok: <FaTiktok />,
    viber: <FaViber />,
    facebook: <FaFacebook />,
  };

  return (
    <ul className="contacts__social">
      {data.map((item) => (
        <li key={item.key} className="contacts__social-item">
          <a target="_blank" href={item.href}>
            {icon[item.key] || item.key}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
