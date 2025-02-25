"use client";

import Navigation from "@/components/base/navigation/Navigation";
import ChangeLng from "@/components/base/changeLng/ChangeLng";

import { navigationList } from "@/data/navigationList";

import TransitionLink from "@/components/utils/TransitionLink";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navigation list={navigationList} />

      <TransitionLink href="/" className="logo__wrapper">
        <img className="logo" src="/images/logo.png" alt="logo" />
      </TransitionLink>

      <ChangeLng />
    </header>
  );
};

export default Header;
