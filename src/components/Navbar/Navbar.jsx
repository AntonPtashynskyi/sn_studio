"use client";
import React, { useEffect, useState } from "react";

import "./navbar.scss";
import "../Hero/hero.scss";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > 500 &&
        setNavbarVisible(currentScrollY <= lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navbarClassName = navbarVisible ? "show" : "hide";

  return (
    <header className={`navBar ${navbarClassName}`}>
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};
