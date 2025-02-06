"use client";

import { useState, useEffect } from "react";
// // import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

import Contacts from "@/app/_components/contacts/Contacts";

import "./navigation.scss";

const Navigation = ({ list }) => {
  const { t } = { t: (x) => x }; // useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const location = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
