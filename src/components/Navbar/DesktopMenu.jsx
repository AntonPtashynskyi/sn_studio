import Link from "next/link";
import React, { useEffect, useState } from "react";

const DesktopMenu = () => {
  return (
    <div className="menu-container">
      <nav className="navigation-links">
        <Link href="/" key="home-page" className="link">
          <p className="title">Główna</p>
        </Link>
        <span className="link drop-down">
          <p>Usługi </p>
          <div className="drop-down--list">
            <Link href="/services" key="eyebrows_styling" className="link">
              <p className="title">Wszystkie usługi</p>
            </Link>
            <Link
              href="/services#brows"
              key="eyebrows_styling_brows"
              className="link"
            >
              <p className="title">Brwi</p>
            </Link>
            <Link href="/services" key="eyelashes_styling" className="link">
              <p className="title">Rzesy</p>
            </Link>
            <Link href="/services" key="permanent_makeup" className="link">
              <p className="title">Permanent</p>
            </Link>
          </div>
        </span>
        <Link href="/#price" key="price" className="link">
          <p className="title">Cennik</p>
        </Link>
        <Link href="/training" key="training" className="link">
          <p className="title">Szkolenia</p>
        </Link>
        <Link href="/#contact" key="contact" className="link">
          <p className="title">Contact</p>
        </Link>
      </nav>
    </div>
  );
};

export default DesktopMenu;
