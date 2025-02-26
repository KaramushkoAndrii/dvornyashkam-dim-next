"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

import { FaArrowRightLong } from "react-icons/fa6";

import Contacts from "@/components/common/contacts/Contacts";
import TransitionLink from "@/components/utils/TransitionLink";

import "./navigation.scss";

const Navigation = ({ list }) => {
  const t = useTranslations();

  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // console.log(t("navigation.about_us"));

  return (
    <div className="nav__wrapper">
      <div className={`menu ${menuOpen ? "close" : ""}`} onClick={toggleMenu}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>

      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul className="navigation__list">
          {list.map((item, key) => (
            <li key={key} className="navigation__list-item">
              <TransitionLink href={item.href || "/"}>
                <span>{t(item.title)}</span>
                <FaArrowRightLong />
              </TransitionLink>
            </li>
          ))}
        </ul>

        <Contacts />
      </nav>
    </div>
  );
};

export default Navigation;
