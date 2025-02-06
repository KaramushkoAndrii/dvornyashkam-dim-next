"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Navigation from "@/app/_components/navigation/Navigation";
import { navigationList } from "@/app/_data/navigationList";
import ChangeLng from "@/app/_components/changeLng/ChangeLng";

import "./header.scss";

const Header = () => {
  const { pathname } = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="header">
      <Navigation list={navigationList} />

      <Link to={"/"} className="logo__wrapper">
        <img className="logo" src="/logo.png" alt="logo" />
      </Link>

      <ChangeLng />
    </header>
  );
};

export default Header;
