import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./hero.scss";
import logo from "../../../public/assets/svg/logo--in_brows.svg";
import heroImage from "../../../public/assets/images/hero/hero--desktop.jpg";

export const HeroSection = ({ title, className, bgImage = heroImage }) => {
  return (
    <section>
      <div className={`hero hero__${className}`}>
        <p
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
        <div className="menu-container--left">
          <div className="ml-16 mt-9 w-[200px] h-[100px] relative">
            <Image src={logo} alt="In brows" fill={true} objectFit="contain" />
          </div>
          <nav className="mt-9">
            <Link href="/" key="home-page" className="link">
              <p className="title">Główna</p>
              <span className="arrow"></span>
            </Link>
            <Link
              href="/eyebrows-styling"
              key="eyebrows_styling"
              className="link"
            >
              <p className="title">Brwi</p>
              <span className="arrow"></span>
            </Link>
            <Link
              href="/eyelashes-styling"
              key="eyelashes_styling"
              className="link"
            >
              <p className="title">Rzesy</p>
              <span className="arrow"></span>
            </Link>
            <Link
              href="/permanent-makeup"
              key="permanent_makeup"
              className="link"
            >
              <p className="title">Permanent</p>
              <span className="arrow"></span>
            </Link>
            <Link href="/#price" key="price" className="link">
              <p className="title">Cennik</p>
              <span className="arrow"></span>
            </Link>
            <Link href="/szkolenia" key="szkolenia" className="link">
              <p className="title">Szkolenia</p>
              <span className="arrow"></span>
            </Link>
            <Link href="/#contact" key="contact" className="link">
              <p className="title">Contact</p>
              <span className="arrow"></span>
            </Link>
          </nav>
        </div>
        <div className="menu-container--right">
          <Image src={bgImage} alt="In brows" fill={true} objectFit="cover" />
        </div>
        <div className="scroll-down-container">
          <div className="scroll-prompt">
            <div class="scroll-prompt-arrow-container">
              <div class="scroll-prompt-arrow">
                <div></div>
              </div>
              <div class="scroll-prompt-arrow">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
