import { getTranslations } from "next-intl/server";

import TransitionLink from "@/components/utils/TransitionLink";

import "./footer.scss";

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer>
      <div className="footer__main">
        <TransitionLink href="/" className="logo__wrapper">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </TransitionLink>
        <h2 className="hero__title h2">{t("hero_section.title")}</h2>
      </div>
    </footer>
  );
};

export default Footer;
