"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";

import { FaArrowRightLong } from "react-icons/fa6";

import Contacts from "@/components/contacts/Contacts";

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
      <div
        className={`burger__menu menu ${menuOpen ? "close" : ""}`}
        onClick={toggleMenu}
      >
        <span className="burger__bar"></span>
        <span className="burger__bar"></span>
        <span className="burger__bar"></span>
      </div>

      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul className="navigation__list">
          {list.map((item, key) => (
            <li key={key} className="navigation__list-item">
              <Link href={item.href || "/"}>
                <span>{t(item.title)}</span>
                <FaArrowRightLong />
              </Link>
            </li>
          ))}
        </ul>

        <Contacts />
      </nav>
    </div>
  );
};

export default Navigation;
