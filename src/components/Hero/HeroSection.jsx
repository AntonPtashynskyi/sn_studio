import React from "react";
import Image from "next/image";

import "./hero.scss";

import logo from "../../../public/assets/svg/logo--strocked.svg";
import heroImage from "../../../public/assets/images/hero/hero--desktop.jpg";
import Link from "next/link";


export const HeroSection =  ({
  h1MobileTitle,
  className,
  bgImage = heroImage,
  h1Title,
  description,
  h2Title,
  CTAText
}) => {


  return (
    <section className={`${className} hero-base-section`}>
      <div
        className={`hero hero__${className} wrapper container flex flex-col justify-end md:justify-center py-[3rem] md:py-0`}
      >
        <p
          className="hero__text"
          dangerouslySetInnerHTML={{ __html: h1MobileTitle }}
        ></p>
        <div className="hero-content">
          <div className="left-block">
            <div className="self-start w-full flex flex-col gap-4">
              <Image src={logo} alt="In brows" />
              <h1 className="text-[40px]">{h1Title}</h1>
              <p className="text-2xl max-w-[50%]">{description}</p>
              <div>
                <Link href="/modal" className="px-10 py-2 text-xl bg-black hover:bg-gray-900 transition-all text-white rounded-lg shadow-sm">{CTAText}</Link>
              </div>
            </div>
          </div>
          {/* <div className={`right-block content__${className}`}></div> */}
        </div>
      </div>
    </section>
  );
};
