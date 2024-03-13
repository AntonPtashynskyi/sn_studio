import React from "react";
import Image from "next/image";

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
      <div
        className={`hero hero__${className} flex flex-col justify-end md:justify-center py-[3rem] md:py-0`}
      >
        <p
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
        <div className="hero-content">
          <div className="main-logo">
            <div className="ml-16 self-start mt-[20%] w-full">
              <Image src={logo} alt="In brows" />
              <h1 className="text-[40px]">{h1Title}</h1>
              <p className="text-2xl max-w-[50%]">{description}</p>
              <span className="decorative-title">{h2Title}</span>
            </div>
          </div>
          <div className={`content content__${className}`}></div>
        </div>
      </div>
    </section>
  );
};
