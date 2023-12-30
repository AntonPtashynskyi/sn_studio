import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./hero.scss";
import logo from "../../../public/assets/svg/logo--strocked.svg";
import heroImage from "../../../public/assets/images/hero/hero--desktop.jpg";

export const HeroSection = ({
  title,
  className,
  bgImage = heroImage,
  h1Title,
  description,
  h2Title,
}) => {
  return (
    <section>
      <div className={`hero hero__${className} flex flex-col justify-end`}>
        <p
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
        <div className="menu-container--top ">
          <nav className="flex gap-[20px] w-full justify-center items-center max-w-[70%] mx-auto">
            <Link href="/" key="home-page" className="link">
              <p className="title">Główna</p>
            </Link>
            <Link
              href="/eyebrows-styling"
              key="eyebrows_styling"
              className="link"
            >
              <p className="title">Brwi</p>
            </Link>
            <Link
              href="/eyelashes-styling"
              key="eyelashes_styling"
              className="link"
            >
              <p className="title">Rzesy</p>
            </Link>
            <Link
              href="/permanent-makeup"
              key="permanent_makeup"
              className="link"
            >
              <p className="title">Permanent</p>
            </Link>
            <Link href="/#price" key="price" className="link">
              <p className="title">Cennik</p>
            </Link>
            <Link href="/szkolenia" key="szkolenia" className="link">
              <p className="title">Szkolenia</p>
            </Link>
            <Link href="/#contact" key="contact" className="link">
              <p className="title">Contact</p>
            </Link>
          </nav>
        </div>
        <div className="menu-container--bottom flex">
          <div className="main-logo">
            <div className="ml-16 self-start mt-[20%]">
              <Image src={logo} alt="In brows" />
              <h1 className="text-[40px]">{h1Title}</h1>
              <p className="text-2xl max-w-[50%]">{description}</p>
              <span className="decorative-title">{h2Title}</span>
            </div>
          </div>
          <div className="content">
            <Image
              src={heroImage}
              alt="In brows"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
