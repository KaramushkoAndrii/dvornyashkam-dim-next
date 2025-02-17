"use client";

import { Link } from "@/i18n/routing";

import Navigation from "@/components/navigation/Navigation";
import ChangeLng from "@/components/changeLng/ChangeLng";

import { navigationList } from "@/data/navigationList";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navigation list={navigationList} />

      <Link href="/" className="logo__wrapper">
        <img className="logo" src="/images/logo.png" alt="logo" />
      </Link>

      <ChangeLng />
    </header>
  );
};

export default Header;
