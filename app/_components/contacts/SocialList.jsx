import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";

const SocialList = ({ data }) => {
  // Comparison link key with icons
  const icon = {
    telegram: <PiTelegramLogo />,
    instagram: <SlSocialInstagram />,
  };

  return (
    <ul className="contacts__social">
      {data.map((item) => (
        <li key={item.key} className="contacts__social-item">
          <a target="__blank" href={item.href}>
            {icon[item.key] || item.key}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
